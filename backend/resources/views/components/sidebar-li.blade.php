@props(['name','route'])
<li>
    <a href="{{ route($route) }}" class="{{ request()->is('admin/'.$route.'*') ? 'bg-gray-200' : '' }} flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
        {{$slot}}
        <span class="ms-3">{{$name}}</span>
    </a>
</li>
