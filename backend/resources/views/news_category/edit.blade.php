<x-layout>

    <h1 class="text-4xl font-semibold mb-3">News Category</h1>
    <x-breadcrumb :route="[
        ['name'=>'News','link'=>route('news')],
        ['name'=>'Category','link'=>route('news.category')],
    ]" current="Create" />

    <div class="w-full xl:w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <h5 class="text-2xl font-medium text-gray-900 mb-6">Edit News Category</h5>
        <form class="space-y-6" action="{{ route('news.category.update', $category) }}" method="POST">
            @csrf
            @method('PUT')
            <div>
                <x-forms.label for="name" text="Name" require="*" />
                <x-forms.input type="text" name="name" id="name" :dbData="$category->name" />
                <x-forms.error name="name" />
            </div>

            <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">Update</button>
        </form>
    </div>


</x-layout>
