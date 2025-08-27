@props(['yearlyViews','totalViewsIn5Years','yearlyContacts'])
<div class="w-full bg-white rounded-lg shadow-sm p-6">
    <div class="mb-4 ms-2">
        <h2 class="leading-none text-3xl font-bold text-gray-900">{{$totalViewsIn5Years}}</h2>
        <p class="text-base font-normal text-gray-500">Users visit last 5 years</p>
    </div>
    <div id="column-chart"></div>
</div>

@push('js')
<script>
    const yearlyViews = @json($yearlyViews);
    const yearlyContacts = @json($yearlyContacts);
    const getBarOptions = {
        series: [
            {
                name: "Contacts",
                color: "#F59E0B",
                data: yearlyContacts,
            },
            {
                name: "Visiters",
                color: "#1A56DB",
                data: yearlyViews,
            },
        ],
        chart: {
            type: "bar",
            height: "320px",
            fontFamily: "Inter, sans-serif",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadiusApplication: "end",
                borderRadius: 2,
            },
        },
        states: {
            hover: {
                filter: {
                    type: "darken",
                    value: 1,
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        grid: {
            show: true,
            borderColor: '#E5E7EB',
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
            },
        },

        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            floating: false,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500'
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: true,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    colors: '#6B7280',
                    fontSize: '12px',
                }
            },
        },
        fill: {
            opacity: 1,
        },
    }

    if (document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("column-chart"), getBarOptions);
        chart.render();
    }
</script>
@endpush
