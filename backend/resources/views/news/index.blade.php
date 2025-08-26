<x-layout>
    <h1 class="text-4xl font-semibold mb-3">News</h1>
    <x-breadcrumb :route="[]" current="News" />

    @if (session('success'))
    <x-success-alert name="success" />
    @endif

    <x-total-create :total="$data->total()" routeName="news.create" createName="Add News" />

    <form action="{{ route('news') }}" class="flex flex-col md:flex-row md:items-center mb-2 gap-2">
        <input type="text" name="search" value="{{ request('search') }}" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-full md:w-[300px] p-2.5" placeholder="Search Title or Id" />
        <select id="category" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-full md:w-[150px] p-2.5">
            <x-forms.option name="category" value="" text="Choose Category" />
            <x-forms.option name="category" value="1" text="News" :dbData="request('category')" />
            <x-forms.option name="category" value="2" text="Career" :dbData="request('category')" />
            <x-forms.option name="category" value="3" text="Blog" :dbData="request('category')" />
        </select>
        <x-forms.searchbtn/>
    </form>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Feature Image
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $item)
                <tr class="bg-white border-b border-gray-200 hover:bg-gray-50">
                    <th scope="row" class="my-auto px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ $item->title_limit }}
                    </th>
                    <td class="px-6 py-4 my-auto">
                        {{ $item->category_name }}
                    </td>
                    <td class="px-6 py-4">
                        <img src="{{ $item->medium_feature }}" class="w-[100px] h-[70px] rounded shadow-lg" alt="">
                    </td>

                    <td class="px-6 py-4">
                        <div class="flex justify-end items-center gap-1">
                            <x-eye routeName="news.edit" :id="$item->id" />
                            <x-edit-btn routeName="news.edit" :id="$item->id" />
                            <x-delete-btn routeName="news.delete" :id="$item->id" />
                        </div>
                    </td>
                </tr>
                @endforeach

            </tbody>
        </table>
    </div>
    <div class="mt-2">{{ $data->links() }}</div>
    @if (!$data->total())
    <x-no-data/>
    @endif

</x-layout>
