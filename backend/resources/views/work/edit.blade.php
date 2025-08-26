<x-layout>

    <h1 class="text-4xl font-semibold mb-3">Successful Works</h1>
    <x-breadcrumb :route="[
        ['name'=>'Successful Work','link'=>route('works')],
    ]" current="Edit" />

    <div class="w-full xl:w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="text-2xl font-medium text-gray-900 dark:text-white mb-6">Edit Successful Work</h5>
        <form class="space-y-6" action="{{ route('works.update', $work->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div>
                <x-forms.label for="title" text="Title" require="*" />
                <x-forms.input type="text" name="title" id="title" :dbData="$work->title" />
                <x-forms.error name="title" />
            </div>
            <div>
                <x-forms.label for="pj-link" text="Project Link" require="*" />
                <x-forms.input type="text" name="link" id="link" :dbData="$work->link" />
                <x-forms.error name="link" />
            </div>
            <div>
                <x-forms.label for="language" text="Programming Language" require="*" />
                <div class="grid grid-cols-2 gap-y-2">
                    <div class="flex items-center">
                        <x-forms.checkbox name="language" id="python" value="1" text="Python" :dbData="$work->language" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="language" id="php" value="2" text="PHP" :dbData="$work->language" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="language" id="laravel" value="3" text="Laravel" :dbData="$work->language" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="language" id="wordpress" value="4" text="Wordpress" :dbData="$work->language" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="language" id="reactjs" value="5" text="React Js" :dbData="$work->language" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="language" id="nextjs" value="6" text="Next Js" :dbData="$work->language" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="language" id="django" value="7" text="Django" :dbData="$work->language" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="language" id="vuejs" value="8" text="Vue Js" :dbData="$work->language" />
                    </div>
                </div>
                <x-forms.error name="language" />
            </div>
            <div>
                <x-forms.label for="category" text="Category" require="*" />
                {{-- <x-forms.select name="category">
                    <x-forms.option name="category" value="1" text="Web Development" dbData="{{$work->category}}" />
                    <x-forms.option name="category" value="2" text="System Development" dbData="{{$work->category}}" />
                    <x-forms.option name="category" value="3" text="UI/UX" dbData="{{$work->category}}" />
                </x-forms.select> --}}
                <div class="grid grid-cols-2 gap-y-2">
                    <div class="flex items-center">
                        <x-forms.checkbox name="category" id="website" value="1" text="Web Development" :dbData="$work->category" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="category" id="system" value="2" text="System Development" :dbData="$work->category" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="category" id="uiux" value="3" text="UI/UX" :dbData="$work->category" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="category" id="eor" value="4" text="EOR" :dbData="$work->category" />
                    </div>
                    <div class="flex items-center">
                        <x-forms.checkbox name="category" id="testing" value="5" text="Testing" :dbData="$work->category" />
                    </div>
                </div>
                <x-forms.error name="category" />
            </div>
            <div>
                <x-forms.label for="image" text="Upload Image" require="" />
                <input id="image" name="image" type="file"
                    class="block w-full text-sm rounded-lg cursor-pointer focus:outline-none
                    @if ($errors->has('image'))
                    bg-red-50 border-red-500 text-red-900 border
                    @else
                    text-gray-900 border border-gray-300 bg-gray-50
                    @endif
                ">
                <x-forms.error name="image" />
                <img src="{{ $work->medium }}" class="w-full h-[400px] rounded-lg shadow-xl mt-3" alt="">
            </div>

            <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        </form>
    </div>


</x-layout>
