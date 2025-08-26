<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Blog;
use App\Models\User;
use App\Models\Work;
use App\Models\Contact;
use App\Models\Visiter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\VisiterRequest;

class DashboardController extends Controller
{
    public function index() {
        $currentYear = now()->year;

        $deleteFiveYear = $currentYear - 5;
        Visiter::where('year',$deleteFiveYear)->delete();

        // line chart
        $lineChart = $this->lineChart($currentYear);
        $totalViewsCurrentYear = $lineChart['totalViewsCurrentYear'];
        $monthlyViews = $lineChart['monthlyViews'];
        $monthlyContact = $lineChart['monthlyContact'];

        // bar chart
        $barChart = $this->barChart($currentYear);
        $yearlyViews = $barChart['yearlyViews'];
        $totalViewsIn5Years = $barChart['totalViewsIn5Years'];
        $yearlyContacts = $barChart['yearlyContacts'];

        // pizza chart
        $pizzaData = $this->pizzaChart();

        return view('dashboard', compact('monthlyViews','monthlyContact','totalViewsCurrentYear','yearlyViews','yearlyContacts','totalViewsIn5Years','pizzaData'));
    }

    public function visiterApi(VisiterRequest $request, $page) {
        $currentMonth = now()->month;
        $currentYear = now()->year;
        $visiter = Visiter::where('month',$currentMonth)->where('year',$currentYear)->where('page',$page)->first();
        if (!$visiter) {
            Visiter::create([
                "month" => $currentMonth,
                "year" => $currentYear,
                "view" => 1,
                "page" => $page
            ]);
            return response()->json([
                "message" => "New data created"
            ],200);
        } else {
            $visiter->update([
                "view" => $visiter->view + 1,
            ]);
            return response()->json([
                "message" => "Data updated"
            ],200);
        }
    }

    private function pizzaChart() {
        $pages = ['eor', 'website', 'system', 'uiux', 'testing', 'news'];
        $viewsByPage = Visiter::select('page', DB::raw('SUM(view) as total'))
            ->whereIn('page', $pages)
            ->groupBy('page')
            ->pluck('total', 'page');
        $totalPizzaChart = $viewsByPage->sum();

        $pizzaData = [];
        foreach ($pages as $page) {
            $view = $viewsByPage[$page] ?? 0;
            $pizzaData[] = $totalPizzaChart > 0 ? ($view / $totalPizzaChart * 100) : 0;
        }
        return $pizzaData;
    }

    private function barChart($currentYear) {
        $startYear = $currentYear - 4;
        $yearlyViewsRaw = Visiter::select('year', DB::raw('SUM(view) as total'))
                            ->where('page', 'home')
                            ->whereBetween('year', [$startYear, $currentYear])
                            ->groupBy('year')
                            ->orderBy('year')
                            ->get()
                            ->keyBy('year');

        $yearlyContactsRaw = Contact::selectRaw('YEAR(created_at) as year, COUNT(*) as total')
                            ->whereBetween(DB::raw('YEAR(created_at)'), [$startYear, $currentYear])
                            ->groupBy(DB::raw('YEAR(created_at)'))
                            ->orderBy(DB::raw('YEAR(created_at)'))
                            ->get()
                            ->keyBy('year');

        $yearlyViews = [];
        $yearlyContacts = [];
        $totalViewsIn5Years = 0;
        foreach (range($startYear, $currentYear) as $i => $year) {
            $viewTotal = $yearlyViewsRaw[$year]->total ?? 0;
            $contactTotal = $yearlyContactsRaw[$year]->total ?? 0;

            $yearlyViews[] = [
                'x' => (string) $year,
                'y' => $viewTotal,
            ];
            $yearlyContacts[] = [
                'x' => (string) $year,
                'y' => $contactTotal,
            ];

            $totalViewsIn5Years += $viewTotal;
        }
        return [
            'yearlyViews' => $yearlyViews,
            'totalViewsIn5Years' => $totalViewsIn5Years,
            'yearlyContacts' => $yearlyContacts,
        ];
    }

    private function lineChart($currentYear) {
        $monthlyCounts = Contact::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
                        ->whereYear('created_at', $currentYear)
                        ->groupBy(DB::raw('MONTH(created_at)'))
                        ->pluck('count', 'month');
        $monthlyContact = array_fill(0, 12, 0);
        foreach ($monthlyCounts as $month => $count) {
            $monthlyContact[$month - 1] = $count;
        }

        $homeVisiters = Visiter::where('year',$currentYear)->where('page','home')->orderBy('month')->get();
        $totalViewsCurrentYear = $homeVisiters->sum('view');
        $monthlyViews = array_fill(0, 12, 0);
        foreach ($homeVisiters as $v) {
            $monthIndex = $v->month - 1;
            $monthlyViews[$monthIndex] = $v->view;
        }
        return [
            'totalViewsCurrentYear' => $totalViewsCurrentYear,
            'monthlyViews' => $monthlyViews,
            'monthlyContact' => $monthlyContact,
        ];
    }

}
