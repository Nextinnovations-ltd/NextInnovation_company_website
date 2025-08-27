<x-layout>

    <h1 class="text-4xl font-semibold mb-3">Users</h1>
    <x-breadcrumb :route="[
        ['name'=>'Users','link'=>route('users')],
    ]" current="Create" />

    <div class="w-full xl:w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <h5 class="text-2xl font-medium text-gray-900 mb-6">Create Users</h5>
        <form class="space-y-6" action="{{ route('users.store') }}" method="POST">
            @csrf
            <div>
                <x-forms.label for="name" text="Name" require="*" />
                <x-forms.input type="text" name="name" id="name" />
                <x-forms.error name="name" />
            </div>
            <div>
                <x-forms.label for="email" text="Email" require="*" />
                <x-forms.input type="email" name="email" id="email" />
                <x-forms.error name="email" />
            </div>
            <div class="grid grid-cols-2 gap-3">
                <div>
                    <x-forms.label for="password" text="Password" require="*" />
                    <x-forms.input-password name="password" />
                    <x-forms.error name="password" />
                </div>
                <div>
                    <x-forms.label for="confirmPassword" text="Confirm Password" require="*" />
                    <x-forms.input-password name="confirmPassword" />
                    <x-forms.error name="confirmPassword" />
                </div>
            </div>
            <div>
                <x-forms.label for="role" text="Role" require="*" />
                <x-forms.select name="role">
                    <x-forms.option name="role" value="2" text="Editor" />
                    <x-forms.option name="role" value="1" text="Admin" />
                </x-forms.select>
                <x-forms.error name="role" />
            </div>

            <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">Create</button>
        </form>
    </div>


</x-layout>
