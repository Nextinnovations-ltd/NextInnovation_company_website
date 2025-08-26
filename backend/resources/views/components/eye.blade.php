@props(['routeName','id'])
<a href="{{ route($routeName,$id) }}" class="px-3 py-2 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-2 focus:outline-none focus:ring-yellow-300">
    <i class="fa-solid fa-eye"></i>
</a>
