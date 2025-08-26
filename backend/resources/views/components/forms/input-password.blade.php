<div class="relative flex items-center">
    <input type="password" name="{{ $name }}" id="{{ $name }}"
        class="text-sm rounded-lg block w-full pr-10 p-2.5 border focus:ring-1
        @if ($errors->has($name))
            bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500
        @else
            bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500
        @endif"
    />
    <i class="fa-regular fa-eye-slash toggle-password absolute right-3 text-gray-500 cursor-pointer"
    data-target="{{ $name }}"></i>
    <i class="fa-regular fa-eye toggle-password hidden absolute right-3 text-gray-500 cursor-pointer"
    data-target="{{ $name }}"></i>
</div>
