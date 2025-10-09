<x-layout>

    <h1 class="text-4xl font-semibold mb-3">Admin</h1>
    <x-breadcrumb :route="[
        ['name'=>'Admin','link'=>route('users')],
    ]" current="Edit" />

    <div class="w-full xl:w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <h5 class="text-2xl font-medium text-gray-900 mb-6">Edit Admin</h5>
        <form class="space-y-6" action="{{ route('users.update', $user->id) }}" method="POST">
            @csrf
            @method('PUT')
            <div>
                <x-forms.label for="name" text="Name" require="*" />
                <x-forms.input type="text" name="name" id="name" :dbData="$user->name" />
                <x-forms.error name="name" />
            </div>
            <div>
                <x-forms.label for="email" text="Email" require="*" />
                <x-forms.input type="email" name="email" id="email" :dbData="$user->email" />
                <x-forms.error name="email" />
            </div>
            <div>
                <x-forms.label for="role" text="Role" require="*" />
                <x-forms.select name="role">
                    <x-forms.option name="role" value="2" text="Editor" :dbData="$user->role" />
                    <x-forms.option name="role" value="1" text="Admin" :dbData="$user->role" />
                </x-forms.select>
                <x-forms.error name="role" />
            </div>
            <div class="flex items-center">
                <input name="changePassword" id="changePassword" type="checkbox" {{ old('changePassword') ? 'checked' : '' }}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-2 border-2 focus:ring-blue-500"/>
                <label for="changePassword" class="ms-2 text-sm font-medium text-gray-900">Change Password</label>
            </div>
            <div class="grid grid-cols-2 gap-3" id="passwordField">
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

            <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">Update</button>
        </form>
    </div>

    @section('js')
    <script>
        $(document).ready(function() {
            function checkCheckbox() {
                if ($('#changePassword').is(':checked')) {
                    $('#passwordField').show('slow');
                }else {
                    $('#password').val('');
                    $('#confirmPassword').val('');
                    $('#passwordField').hide('slow');
                }
            }

            checkCheckbox();

            $('#changePassword').change(function() {
                checkCheckbox();
            });
        });
    </script>
    @endsection

</x-layout>
