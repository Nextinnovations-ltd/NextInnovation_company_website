<x-layout>
    <h1 class="text-4xl font-semibold mb-3">Successful Works</h1>
    <x-breadcrumb :route="[]" current="Successful Work" />

    @if (session('success'))
    <x-success-alert name="success" />
    @endif

    <x-total-create :total="$data->total()" routeName="works.create" createName="Add Successful Work" />

    <form action="{{ route('works') }}" class="flex flex-col lg:flex-row md:items-center mb-2 gap-2">
        <input type="text" name="search" value="{{ request('search') }}" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-full lg:w-[25%] p-2.5" placeholder="Search Title or Id" />
        <select id="language" name="language" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-full lg:w-[20%] p-2.5">
            <x-forms.option name="language" value="" text="Choose Language" />
            <x-forms.option name="language" value="1" text="Python" :dbData="request('language')" />
            <x-forms.option name="language" value="2" text="PHP" :dbData="request('language')" />
            <x-forms.option name="language" value="3" text="Laravel" :dbData="request('language')" />
            <x-forms.option name="language" value="4" text="Wordpress" :dbData="request('language')" />
            <x-forms.option name="language" value="5" text="React Js" :dbData="request('language')" />
            <x-forms.option name="language" value="6" text="Next Js" :dbData="request('language')" />
            <x-forms.option name="language" value="7" text="Django" :dbData="request('language')" />
            <x-forms.option name="language" value="8" text="Vue Js" :dbData="request('language')" />
        </select>
        <select id="category" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-full lg:w-[20%] p-2.5">
            <x-forms.option name="category" value="" text="Choose Category" />
            <x-forms.option name="category" value="1" text="Web Development" :dbData="request('category')" />
            <x-forms.option name="category" value="2" text="System Development" :dbData="request('category')" />
            <x-forms.option name="category" value="3" text="UI/UX" :dbData="request('category')" />
            <x-forms.option name="category" value="4" text="EOR" :dbData="request('category')" />
            <x-forms.option name="category" value="5" text="Testing" :dbData="request('category')" />
        </select>
        <x-forms.searchbtn/>
    </form>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Project Link
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Programming Language
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $item)
                <tr class="bg-white border-b border-gray-200 hover:bg-gray-50">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ $item->title_limit }}
                    </th>
                    <td class="px-6 py-4">
                        {{ $item->link }}
                    </td>
                    <td class="px-6 py-4">
                        {{ implode(', ', $item->language_name) }}
                    </td>
                    <td class="px-6 py-4">
                        {{ implode(', ', $item->category_name) }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex justify-end items-center gap-1">
                            <x-eye routeName="works.edit" :id="$item->id" />
                            <x-edit-btn routeName="works.edit" :id="$item->id" />
                            <x-delete-btn routeName="works.delete" :id="$item->id" />
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
