@props(['pizzaData'])
<div class="w-full bg-white rounded-lg shadow-sm p-6">
    <div class="mb-16 ms-2">
        <h2 class="leading-none text-xl font-semibold text-gray-900">Users Visit Pages</h2>
    </div>
    <div id="pie-chart"></div>
</div>

@push('js')
<script>
    const pizzaData = @json($pizzaData);
    const pizzaName = ["Eor", "Website", "System", "UI/UX", "Testing","News"];
    const pizzaColor = ["#1C64F2","#16BDCA","#9061F9","#F59E0B","#EF4444","#10B981"];;
    const getPizzaOptions = () => {
        return {
            series: pizzaData,
            colors: pizzaColor,
            chart: {
                height: "320px",
                width: "100%",
                type: "pie",
            },
            stroke: {
                colors: ["white"],
                lineCap: "3",
            },
            plotOptions: {
                pie: {
                    labels: {
                        show: true,
                    },
                    size: "100%",
                    dataLabels: {
                        offset: -25
                    }
                },
            },
            labels: pizzaName,
            dataLabels: {
                enabled: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
            legend: {
                position: "bottom",
                fontFamily: "Inter, sans-serif",
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            },
            xaxis: {
                labels: {
                    formatter: function (value) {
                        return value  + "%"
                    },
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        }
    }

    if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("pie-chart"), getPizzaOptions());
        chart.render();
    }

</script>
@endpush
