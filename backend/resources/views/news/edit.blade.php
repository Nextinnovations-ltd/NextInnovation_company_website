<x-layout>

    <h1 class="text-4xl font-semibold mb-3">News</h1>
    <x-breadcrumb :route="[
        ['name'=>'News','link'=>route('news')],
    ]" current="Edit" />

    <div class="grid grid-cols-5 gap-4">
        <div class="col-span-5 xl:col-span-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
            <h5 class="text-2xl font-medium text-gray-900 mb-6">Edit News</h5>
            <form class="space-y-6" action="{{ route('news.update', $blog->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div>
                    <x-forms.label for="title" text="Title" require="*" />
                    <x-forms.input type="text" name="title" id="title" :dbData="$blog->title" />
                    <x-forms.error name="title" />
                </div>
                <div>
                    <x-forms.label for="description" text="Description" require="*" />
                    <textarea name="description" id="description" >{{ old('description', $blog->description) }}</textarea>
                    <x-forms.error name="description" />
                </div>
                <x-blog-category-drop-down :dbData="$blog->category" />
                <div>
                    <x-forms.label for="feature" text="Feature Image" require="*" />
                    <x-forms.input type="hidden" name="feature" id="hidden-feature" :dbData="$blog->feature" />
                    <x-forms.disabled type="text" name="feature" id="feature" :dbData="$blog->feature" />
                    <x-forms.error name="feature" />
                </div>

                <button type="submit" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">Update</button>
            </form>
        </div>
        <div class="col-span-5 xl:col-span-2">
            <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <form action="{{ route('news.edit.create.image', $blog->id) }}" id="myForm" class="space-y-6" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div>
                        <x-forms.label for="images" text="Upload Images" require="" />
                        <input id="images" name="images[]" type="file"
                            class="block w-full text-sm rounded-lg cursor-pointer focus:outline-none
                            @if ($errors->has('images') || $errors->has('images.*'))
                            bg-red-50 border-red-500 text-red-900 border
                            @else
                            text-gray-900 border border-gray-300 bg-gray-50
                            @endif
                        " multiple />
                        <x-forms.error name="images" />
                        <x-forms.error name="images.*" />
                    </div>

                    <div class="grid grid-cols-2 gap-4" id="dataList">
                        @foreach ($blog->blog_images as $image)
                        <div class="relative inline-flex items-center text-sm font-medium text-center bg-white rounded-lg">
                            <div class="flex flex-col gap-1 w-full">
                                <img class="w-full h-[150px] rounded-lg" src="{{ $image->medium }}" alt="">
                                <div>
                                    <button type="button" class="copy-btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-3 py-2"><i class="fa-solid fa-copy"></i> Copy</button>
                                    <button type="button" class="feature-btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-3 py-2"><i class="fa-solid fa-star"></i> Feature</button>
                                </div>
                            </div>
                            <a href="{{ route('news.delete.image', $image->id) }}" class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -end-2">X</a>
                        </div>
                        @endforeach
                    </div>

                    <button type="button" id="upload-btn" class="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center disabled:bg-blue-400">Upload</button>
                </form>
            </div>
        </div>
    </div>

@section('js')
<script src="https://cdn.tiny.cloud/1/oa1xawbi2jwqnpr3t8slf2oi2osj8sr6x18x08rcthm8ygxe/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
<script>
    tinymce.init({
        selector: 'textarea',
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        height: 500,
    });
</script>

<script>
    const awsEndpoint = @json(env('AWS_URL_ENDPOINT'));
    $(document).ready(function () {
        $('#upload-btn').click(function () {
            var files = $('#images')[0].files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];

                if (!isValidFileType(file) || !isValidFileSize(file)) {
                    return;
                }
            }
            $('#upload-btn').text('Uploading...').prop('disabled', true);
            var formData = new FormData($("#myForm")[0]);
            $.ajax({
                type: 'POST',
                url: $("#myForm").attr('action'),
                data: formData,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function (response) {
                    $list = '';
                    for ($i = 0; $i < response.length; $i++) {
                        $list += `<div class="relative inline-flex items-center text-sm font-medium text-center bg-white rounded-lg">
                                    <div class="flex flex-col gap-1 w-full">
                                        <img class="w-full h-[150px] rounded-lg" src="${awsEndpoint}/images/medium/${response[$i].name}" alt="">
                                        <div>
                                            <button type="button" class="copy-btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-3 py-2"><i class="fa-solid fa-copy"></i> Copy</button>
                                            <button type="button" class="feature-btn text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-3 py-2"><i class="fa-solid fa-star"></i> Feature</button>
                                        </div>
                                    </div>
                                    <a href="/admin/news/delete/image/${response[$i].id}" class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -end-2">X</a>
                                </div>`;
                    }
                    $('#dataList').html($list);
                },
                complete: function () {
                    $('#images').val("");
                    $('#upload-btn').text('Upload').prop('disabled', false);
                }
            });
        });

        function isValidFileType(file) {
            var validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            var extension = file.name.split('.').pop().toLowerCase();
            if ($.inArray(extension, validExtensions) === -1) {
                alert('Invalid file type. Please select a valid image file.');
                return false;
            }
            return true;
        }

        function isValidFileSize(file) {
            var maxSize = 5 * 1024 * 1024;
            if (file.size > maxSize) {
                alert('File size exceeds the maximum allowed size (5MB). Please choose a smaller file.');
                return false;
            }
            return true;
        }

        $('#dataList').on('click', '.copy-btn', function () {
            var parentDiv = $(this).closest('.relative');
            var srcValue = parentDiv.find('img').attr('src');

            // Create a temporary textarea element to copy the text to the clipboard
            var tempTextArea = $('<textarea>');
            tempTextArea.val(srcValue);
            $('body').append(tempTextArea);
            tempTextArea.select();

            // Copy the text to the clipboard
            document.execCommand('copy');
            tempTextArea.remove();

            $(this).html('<i class="fa-solid fa-check"></i> Copied');
            setTimeout(() => {
                $(this).html('<i class="fa-regular fa-copy"></i> Copy');
            }, 2000);
        });

        $('#dataList').on('click', '.feature-btn', function () {
            var parentDiv = $(this).closest('.relative');
            var srcValue = parentDiv.find('img').attr('src');
            var parts = srcValue.split('/');
            var imgName = parts[parts.length - 1];
            $('#feature').val(imgName);
            $('#hidden-feature').val(imgName);

            $(this).html('<i class="fa-solid fa-check"></i> Featured');
            setTimeout(() => {
                $(this).html('<i class="fa-solid fa-star"></i> Feature');
            }, 2000);
        });

    })
</script>
@endsection

</x-layout>
