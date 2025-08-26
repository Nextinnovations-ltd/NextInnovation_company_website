<x-layout>
    <h1 class="text-4xl font-semibold mb-3">Users</h1>
    <x-breadcrumb :route="[]" current="Users" />

    @if (session('success'))
    <x-success-alert name="success" />
    @endif

    <x-total-create :total="$data->total()" routeName="users.create" createName="Add User" />

    <form action="{{ route('users') }}" class="flex flex-col md:flex-row md:items-center mb-2 gap-2">
        <input type="text" name="search" value="{{ request('search') }}" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-full md:w-[300px] p-2.5" placeholder="Search Name, Email or Id" />
        <select id="role" name="role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 focus:outline-none block w-full md:w-[150px] p-2.5">
            <x-forms.option name="role" value="" text="Choose Role" />
            <x-forms.option name="role" value="2" text="Editor" :dbData="request('role')" />
            <x-forms.option name="role" value="1" text="Admin" :dbData="request('role')" />
        </select>
        <x-forms.searchbtn/>
    </form>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Role
                    </th>
                    <th scope="col" class="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $item)
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">
                        {{ $item->id }}
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ $item->name }}
                    </th>
                    <td class="px-6 py-4">
                        {{ $item->email }}
                    </td>
                    <td class="px-6 py-4">
                        {{ $item->role_name }}
                    </td>

                    <td class="px-6 py-4 flex justify-end gap-1">
                        <x-edit-btn routeName="users.edit" :id="$item->id" />
                        @if (Auth::user()->id != $item->id)
                        <x-delete-btn routeName="users.delete" :id="$item->id" />
                        @endif
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
