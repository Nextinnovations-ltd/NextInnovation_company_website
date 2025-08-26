@props(['routeName','id'])
<form action="{{ route($routeName,$id) }}" method="POST" onclick="return confirm('Are you sure to delete');">
    @csrf
    @method('DELETE')
    <button type="submit" class="px-3 py-2 text-xs font-medium text-center text-white bg-[#DC3545] rounded-lg hover:bg-[#B02A37] focus:ring-2 focus:outline-none focus:ring-red-300"><i class="fa-solid fa-trash-can"></i></button>
</form>
