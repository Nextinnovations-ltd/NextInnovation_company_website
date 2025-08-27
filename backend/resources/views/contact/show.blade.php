<x-layout>

    <h1 class="text-4xl font-semibold mb-3">Contact</h1>
    <x-breadcrumb :route="[
        ['name'=>'Contact','link'=>route('contact')],
    ]" current="View" />

    <div class="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <h5 class="text-3xl font-medium text-gray-900 mb-6">Contact Information</h5>
        <div class="flex flex-col gap-3">
            <div class="flex items-end gap-4">
                <h4 class="text-[20px] font-semibold">Name :</h4>
                <span class="text-[16px] font-medium">{{ $contact->name }}</span>
            </div>
            <div class="flex items-end gap-4">
                <h4 class="text-[20px] font-semibold">Email :</h4>
                <span class="text-[16px] font-medium">{{ $contact->email }}</span>
            </div>
            <div class="flex items-end gap-4">
                <h4 class="text-[20px] font-semibold">Phone :</h4>
                <span class="text-[16px] font-medium">{{ $contact->phone }}</span>
            </div>
            <div class="flex items-end gap-4">
                <h4 class="text-[20px] font-semibold">Country :</h4>
                <span class="text-[16px] font-medium">{{ ucwords($contact->country) }}</span>
            </div>
            <div class="flex items-end gap-4">
                <h4 class="text-[20px] font-semibold">Budget :</h4>
                <span class="text-[16px] font-medium">{{ $contact->budget_format }}</span>
            </div>
            <div class="flex items-end gap-4">
                <h4 class="text-[20px] font-semibold">Interest :</h4>
                <span class="text-[16px] font-medium">{{ $contact->interest_name }}</span>
            </div>
            <div class="flex items-start gap-4">
                <h4 class="text-[20px] text-nowrap font-semibold">Message :</h4>
                <span class="text-[16px] mt-1 font-medium">{{ $contact->message }}</span>
            </div>
            <div class="flex items-end gap-4">
                <h4 class="text-[20px] font-semibold">Date :</h4>
                <span class="text-[16px] font-medium">{{ $contact->created_at->format('j M Y g:i a') }}</span>
            </div>
            @if (!$contact->done)
            <form action="{{ route('contact.done', $contact->id) }}" method="POST">
                @csrf
                @method('PUT')
                <button type="submit" class="w-full mt-3 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5">Mark as Read</button>
            </form>
            @endif
        </div>
    </div>


</x-layout>
