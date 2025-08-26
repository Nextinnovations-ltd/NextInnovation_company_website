@props(['total','routeName','createName'=>''])
<div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
    <div class="text-2xl font-semibold">
        Total- <span class="text-blue-500">{{ $total }}</span>
    </div>

    @if ($createName)
    <a href="{{ route($routeName) }}" class="text-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"><i class="fa-solid fa-plus"></i> {{$createName}}</a>
    @endif
</div>
