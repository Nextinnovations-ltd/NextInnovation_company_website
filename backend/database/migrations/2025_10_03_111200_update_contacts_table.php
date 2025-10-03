<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->string('phone')->nullable()->change();
            $table->string('company_name')->nullable()->after('phone');
            $table->unsignedTinyInteger('budget_jp')->nullable()->after('budget');
            $table->unsignedTinyInteger('hope')->nullable()->after('budget_jp');
            $table->unsignedTinyInteger('known')->nullable()->after('interest');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->string('phone')->nullable(false)->change();
            $table->dropColumn('company_name');
            $table->dropColumn('budget_jp');
            $table->dropColumn('hope');
            $table->dropColumn('known');
        });
    }
};
