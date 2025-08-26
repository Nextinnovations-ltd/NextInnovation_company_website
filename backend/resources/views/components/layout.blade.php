<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Next Innovations</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('images/ni-logo-only.jpg') }}">
    <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    @vite('resources/css/app.css')
</head>
<body class="bg-gray-50">
    <x-navbar/>

    @if (Auth::user())
    <x-sidebar/>
    <div class="sm:ml-64">
        <div class="p-8 rounded-lg dark:border-gray-700 mt-14">
            {{$slot}}
        </div>
    </div>
    @else
    {{$slot}}
    @endif

    <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script>
        $(document).ready(function () {
            $('.toggle-password').on('click', function () {
                const inputId = $(this).data('target');
                const input = $('#' + inputId);
                const isPassword = input.attr('type') === 'password';

                input.attr('type', isPassword ? 'text' : 'password');

                // Toggle both icons for this input
                $(`.toggle-password[data-target="${inputId}"]`).toggleClass('hidden');
            });
        });
    </script>
    @yield('js')
    @stack('js')
    <!-- ===================== Shine Htet Aung ================================ -->
</body>
</html>
