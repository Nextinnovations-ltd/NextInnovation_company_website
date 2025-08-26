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

    public function getInterestNameAttribute() {
        $interest = $this->interest;
        $name = match ($interest) {
            1 => 'EOR(Employer of Record)',
            2 => 'Development',
            3 => 'UI/UX Design',
            4 => 'Testing',
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
