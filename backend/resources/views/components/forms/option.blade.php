@props(['name', 'value', 'text', 'dbData'=>''])
<option value="{{$value}}" {{ old($name, $dbData) == $value ? 'selected' : '' }}>{{$text}}</option>
