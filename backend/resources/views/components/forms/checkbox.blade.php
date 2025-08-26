@props(['name','id','value','text','dbData'=>[]])
<input name="{{$name.'[]'}}" id="{{$id}}" type="checkbox" value="{{$value}}" {{ in_array($value, old($name, $dbData)) ? 'checked' : '' }}
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-2 border-2
    @if ($errors->has($name))
    border-red-500
    @else
    focus:ring-blue-500
    @endif
"/>
<label for="{{$id}}" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{$text}}</label>
