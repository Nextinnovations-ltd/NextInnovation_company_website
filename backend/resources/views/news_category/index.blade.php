<x-layout>
    <h1 class="text-4xl font-semibold mb-3">Blog Category</h1>
    <x-breadcrumb :route="[
        ['name'=>'News','link'=>route('news')],
    ]" current="Category" />

    @if (session('success'))
    <x-success-alert name="success" />
    @endif

    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div class="text-2xl font-semibold">
            Total- <span class="text-blue-500">{{ $category->total() }}</span>
        </div>
        <a href="{{ route('news.category.create') }}" class="text-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"><i class="fa-solid fa-plus"></i> Add Category</a>
    </div>

    <form action="{{ route('news.category') }}" class="flex flex-col md:flex-row md:items-center mb-2 gap-2">
        <input type="text" name="search" value="{{ request('search') }}" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-full md:w-[300px] p-2.5" placeholder="Search Title" />
        <button type="submit" class="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg class="w-4 h-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
        </button>
    </form>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($category as $item)
                <tr class="bg-white border-b border-gray-200 hover:bg-gray-50">
                    <th scope="row" class="my-auto px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ $item->id }}
                    </th>
                    <th scope="row" class="my-auto px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ $item->name }}
                    </th>

                    <td class="px-6 py-4">
                        <div class="flex justify-end items-center gap-1">
                            <x-edit-btn routeName="news.category.edit" :id="$item->id" />
                            <x-delete-btn routeName="news.category.delete" :id="$item->id" />
                        </div>
                    </td>
                </tr>
                @endforeach

            </tbody>
        </table>
    </div>
    <div class="mt-2">{{ $category->links() }}</div>
    @if (!$category->total())
    <x-no-data/>
    @endif

</x-layout>
