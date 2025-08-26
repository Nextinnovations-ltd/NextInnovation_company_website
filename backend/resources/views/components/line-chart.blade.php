@props(['monthlyViews','totalViewsCurrentYear','monthlyContact'])
<div class="w-full bg-white rounded-lg shadow-sm p-6">
    <div class="mb-4 ms-2">
        <h2 class="leading-none text-3xl font-bold text-gray-900">{{$totalViewsCurrentYear}}</h2>
        <p class="text-base font-normal text-gray-500">Users visit current year</p>
    </div>
    <div id="labels-chart"></div>
</div>

@push('js')
<script>
    const monthData = @json($monthlyViews);
    const monthContact = @json($monthlyContact);
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const getLineOptions = {
        xaxis: {
            show: true,
            categories: month,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
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
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
                formatter: function(value) {
                    return value;
                }
            }
        },
        series: [
            {
                name: "Visiters",
                data: monthData,
                color: "#1A56DB",
            },
            {
                name: "Contacts",
                data: monthContact,
                color: "#7E3BF2",
            },
        ],
        chart: {
            sparkline: {
                enabled: false
            },
            height: "320px",
            width: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: true,
                formatter: function (val, opts) {
                    return month[val-1]; // Show month name
                }
            },
            // y: {
            //     formatter: function (val, opts) {
            //         const index = opts.dataPointIndex;
            //         return `${month[index]}: ${val}`;
            //     }
            // }
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 3,
            curve: 'smooth',
        },
        legend: {
            position: 'bottom',
            fontFamily: 'Inter, sans-serif',
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
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0
            }
        },

    }

    if (document.getElementById("labels-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("labels-chart"), getLineOptions);
        chart.render();
    }
</script>
@endpush
