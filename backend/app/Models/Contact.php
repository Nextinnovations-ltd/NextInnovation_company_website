<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    public function scopeFilter($query, $filter) {
        $query->when($filter['search'] ?? false, function($query,$search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'LIKE', '%' . $search . '%')
                    ->orWhere('email', 'LIKE', '%' . $search . '%')
                    ->orWhere('phone', 'LIKE', '%' . $search . '%');
            });
        });
        $query->when($filter['read'] ?? false, function($query,$read) {
            $read = $read === 'true' ? true : false;
            $query->where('done', $read);
        });
    }

    public function getBudgetJpNameAttribute() {
        $budget = $this->budget_jp;
        $name = match ($budget) {
            1 => '50万未満',
            2 => '100万未満',
            3 => '100万円',
            4 => '200万円',
            5 => '300万円',
            6 => '400万円',
            7 => '500万円',
            8 => '600万円',
            9 => '700万円',
            10 => '800万円',
            11 => '900万円',
            12 => '1000万円以上',
            13 => '未定',
            14 => '応相談',
            default => 'Unknown',
        };
        return $name;
    }

    public function getHopeNameAttribute() {
        $hope = $this->hope;
        $name = match ($hope) {
            1 => '資料送付',
            2 => '見積依頼',
            3 => '打ち合せ希望',
            4 => 'その他',
            default => 'Unknown',
        };
        return $name;
    }

    public function getKnownNameAttribute() {
        $known = $this->known;
        $name = match ($known) {
            1 => 'ご紹介',
            2 => 'SNS',
            3 => 'その他媒体',
            4 => '営業',
            default => 'Unknown',
        };
        return $name;
    }

    public function getInterestNameAttribute() {
        $interest = $this->interest;
        $name = match ($interest) {
            1 => 'EOR(Employer of Record)',
            2 => 'Development',
            3 => 'UI/UX Design',
            4 => 'Testing',
            5 => 'EORのみ',
            6 => '安心ラボ型EOR',
            7 => 'プロジェクト伴走型EOR',
            8 => 'UI/UXデザイン',
            9 => 'サイト制作・リニューアル',
            10 => 'システム開発・DX支援',
            11 => 'EOR代理店制度について',
            12 => 'その他',
            default => 'Unknown',
        };
        return $name;
    }

    public function getBudgetFormatAttribute() {
        $budget = $this->budget;
        preg_match('/^(\d+)(\D+)$/u', $budget, $matches);

        if (count($matches) === 3) {
            $number = $matches[1];
            $currency = $matches[2];
            $formattedBudget = number_format((int) $number) . $currency;
        } else {
            $formattedBudget = $budget; // fallback if pattern doesn't match
        }
        return $formattedBudget;
    }
}
