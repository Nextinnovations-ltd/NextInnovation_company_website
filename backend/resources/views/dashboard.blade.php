@props(['monthlyViews','monthlyContact','totalViewsCurrentYear','yearlyViews','yearlyContacts','totalViewsIn5Years','pizzaData'])
<x-layout>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-3 mb-10">
        <div class="lg:col-span-2 xl:col-span-3">
            <x-line-chart :monthlyViews="$monthlyViews" :totalViewsCurrentYear="$totalViewsCurrentYear" :monthlyContact="$monthlyContact" />
        </div>
        <div class="xl:col-span-2">
            <x-bar-chart :yearlyViews="$yearlyViews" :totalViewsIn5Years="$totalViewsIn5Years" :yearlyContacts="$yearlyContacts" />
        </div>
        <div class="xl:col-span-2">
            <x-pizza-chart :pizzaData="$pizzaData" />
        </div>
    </div>
</x-layout>
