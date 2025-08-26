@props(['route','name','count','bg_color'])
<a href="{{ $route }}" class="p-6 flex justify-between {{$bg_color}} border border-gray-200 rounded-lg shadow-sm">
    <div class="text-white">
        <h3 class="text-[28px] opacity-70 text-muted font-medium">{{$name}}</h3>
        <p class="text-[50px] opacity-95 text-white font-semibold">{{$count}}</p>
    </div>
    <div>{{$slot}}</div>
</a>
