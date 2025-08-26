@props(['dbData'=>'','type','name','id'])
<input type="{{ $type }}" name="{{$name}}" id="{{$id}}" value="{{ old($name,$dbData) }}"
    class="text-sm rounded-lg  block w-full p-2.5 border focus:ring-1
    @if ($errors->has($name))
    bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500
    @else
    bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500
    @endif"
/>

