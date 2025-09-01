@props(['category','dbData'=>''])
<div>
    <x-forms.label for="category" text="Category" require="*" />
    <x-forms.select name="category">
        @foreach ($category as $item)
        <x-forms.option name="category" :value="$item->id" :text="$item->name" :dbData="$dbData" />
        @endforeach
    </x-forms.select>
    <x-forms.error name="category" />
</div>
