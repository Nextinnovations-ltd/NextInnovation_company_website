@props(['dbData'=>'','type','name','id'])
<input type="{{$type}}" name="{{$name}}" id="{{$id}}" value="{{ old($name,$dbData) }}"
    class="text-sm rounded-lg block border w-full p-2.5 cursor-not-allowed
    @if ($errors->has($name))
    bg-red-50 border-red-300 text-red-900
    @else
    bg-gray-200 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500
    @endif"
disabled />
