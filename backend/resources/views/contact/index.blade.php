<x-layout>
    <h1 class="text-4xl font-semibold mb-3">Contact</h1>
    <x-breadcrumb :route="[]" current="Contact" />

    @if (session('success'))
    <x-success-alert name="success" />
    @endif

    <x-total-create :total="$data->total()" />

    <form action="{{ route('contact') }}" class="flex items-center mb-2 gap-2">
        <input type="text" name="search" value="{{ request('search') }}" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-[300px] p-2.5" placeholder="Search Name, Email or Phone" />
        <select id="read" name="read" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-[150px] p-2.5">
            <x-forms.option name="category" value="" text="All" />
            <x-forms.option name="read" value="false" text="Unread" :dbData="request('read')" />
            <x-forms.option name="read" value="true" text="Read" :dbData="request('read')" />
        </select>
        <x-forms.searchbtn/>
    </form>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Phone
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $item)
                <tr class="border-b border-gray-200 hover:bg-gray-50
                    @if ($item->done)
                    bg-white
                    @else
                    bg-gray-200
                    @endif">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ $item->name }}
                    </th>
                    <td class="px-6 py-4">
                        {{ $item->email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ $item->phone }}
                    </td>
                    <td class="px-6 py-4">
                        {{ $item->created_at->format('j M Y g:i a') }}
                    </td>

                    <td class="px-6 py-4 flex justify-end items-center gap-2">
                        <x-eye routeName="contact.view" :id="$item->id" />
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
