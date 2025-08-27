<x-layout>

    <h1 class="text-4xl font-semibold mb-3">Change Password</h1>
    <x-breadcrumb :route="[]" current="Change Password" />

    <div class="w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        @session('success')
        <x-success-alert name="success" />
        @endsession
        @session('error')
        <x-success-alert name="error" />
        @endsession
        <form class="space-y-6" action="{{ route('updatePassword') }}" method="POST">
            @csrf
            @method('PUT')
            <div>
                <x-forms.label for="oldPassword" text="Old Password" require="*" />
                <x-forms.input-password name="oldPassword" />
                <x-forms.error name="oldPassword" />
            </div>
            <div class="grid grid-cols-2 gap-3" id="passwordField">
                <div>
                    <x-forms.label for="newPassword" text="New Password" require="*" />
                    <x-forms.input-password name="newPassword" />
                    <x-forms.error name="newPassword" />
                </div>
                <div>
                    <x-forms.label for="confirmNewPassword" text="Confirm New Password" require="*" />
                    <x-forms.input-password name="confirmNewPassword" />
                    <x-forms.error name="confirmNewPassword" />
                </div>
            </div>

            <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">Change Password</button>
        </form>
    </div>

</x-layout>
