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
                <h5 class="text-3xl font-semibold text-gray-900 mb-6 text-center">Login</h5>
                <form class="space-y-6" action="{{ route('login') }}" method="POST">
                    @csrf
                    <div>
                        <x-forms.label for="email" text="Email" require="*" />
                        <x-forms.input type="email" name="email" id="email" />
                        <x-forms.error name="email" />
                    </div>
                    <div>
                        <x-forms.label for="password" text="Password" require="*" />
                        <x-forms.input-password name="password" />
                        <x-forms.error name="password" />
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-center">
                            <input name="remember" id="remember" type="checkbox" {{ old('remember') ? 'checked' : '' }}
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-2 border-2 focus:ring-blue-500"/>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="{{ route('forgetPassword') }}" class="text-blue-700 hover:text-blue-500 underline">Forget Password?</a>
                    </div>

                    <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </form>
            </div>
        </div>
    </div>
</x-layout>
