<x-layout>
    <div class="w-full">
        <div class="p-8 rounded-lg flex items-center h-screen">
            <div class="w-[500px] mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                @if (session('success'))
                <x-success-alert name="success" />
                @endif
                @if (session('error'))
                <x-success-alert name="error" />
                @endif
                <h5 class="text-3xl font-semibold text-gray-900 mb-6 text-center">Reset Password</h5>
                <form class="space-y-6" action="{{ route('resetPassword', $token) }}" method="POST">
                    @csrf
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
                    <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset Password</button>
                </form>
            </div>
        </div>
    </div>
</x-layout>
