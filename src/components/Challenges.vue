<template>
<div>
    <!-- Text challenges -->
    <h1 class="font-bold underline text-center">Challenges 1</h1>
    <div class="w-1/3">
    <h1 class="capitalize text-xl text-gray-900">Lorem ipsum dolor sit amet, consectetur</h1>
    <p class="m-2 text-justify leading-normal tracking widest"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
    <div class="m-2 p-6 bg-blue-900 text-blue-200 text-justify"> 
    <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
    <p class="mt-3">- Victor Gonzalez <span class ="italic">instructor</span></p>
    </div>
    <button class="uppercase bg-blue-900 text-white p-1">Enroll Now</button> 
    </div>

    <!-- Button challenges -->
    <h1 class="font-bold underline">Challenges 2</h1>

    <div><button class="m-1 p-1 bg-blue-500 rounded border-l-4 border-blue-500">Submit</button></div>
    <div><button class="m-1 p-1 text-red-500 border-solid border-2 border-red-400 rounded">Cancel</button></div>
    <div><button class="m-1 px-4 py-1 bg-indigo-100 text-indigo-500 border-solid border-b-4 border-indigo-500">Save</button></div>
    <div><button class="m-1 px-16 py-3 text-red-500 rounded-full border-4 text-sm bg-red-400 border-red-500">Bye Now</button></div>
    <div><button class="m-1 p-1 uppercase border-4 border-dashed">Send Postcard</button></div>

    <!-- Block Gallery Challenges -->
    <h1 class="font-bold underline">Challenges 4</h1>
    <div class="flex h-screen flex-wrap">
        <div class="flex w-1/3">
            <div class="bg-red-100 m-2 w-full flex justify-center items-center">A</div>
        </div>
        <div class="flex w-1/3">
            <div class="bg-red-200 m-2 w-full flex justify-center items-center">B</div>
        </div>
        <div class="flex w-1/3">
            <div class="bg-red-300 m-2 w-full flex justify-center items-center">C</div>
        </div>
        <div class="flex w-1/3">
            <div class="bg-red-400 m-2 w-full flex justify-center items-center">D</div>
        </div>
        <div class="flex w-1/3">
            <div class="bg-red-500 m-2 w-full flex justify-center items-center">E</div>
        </div>
        <div class="flex w-1/3">
            <div class="bg-red-600 m-2 w-full flex justify-center items-center">F</div>
        </div>
        <div class="flex w-1/3">
            <div class="bg-red-700 m-2 w-full flex justify-center items-center">G</div>
        </div>
        <div class="flex w-1/3">
            <div class="bg-red-800 m-2 w-full flex justify-center items-center">H</div>
        </div>
        <div class="flex w-1/3">
            <div class="bg-red-900 m-2 w-full flex justify-center items-center">I</div>
        </div>
    </div>

    <!-- input component Challenges -->
    <h1 class="font-bold underline">Challenges 5</h1>
    <div class="h-screen flex flex-col justify-center items-center">
        <label for="full_name" class="font-bold text-sm text-gray-700">Full Name</label>
        <input placeholder="Enter your full name" class="mt-2 shadow border rounded-lg px-3 py-2 focus:bg-blue-100 placeholder-indigo-300" />
        <button class="bg-blue-900 text-blue-100 mt-2 px-3 py-2 rounded-lg">Save</button>
    </div>

    <!-- Employee card Challenges -->
    <h1 class="font-bold underline">Challenges 6</h1>
    <div class="h-screen bg-gray-500 flex justify-center items-center">
        <div class="w-80 bg-white overflow-hidden rounded-lg">
            <div class="bg-gray-200 text-left text-lg px-6 py-4">The title of the card here</div>
            <div class="flex justify-between px-6 py-4 text-xs items-center">
                <div class="bg-yellow-600 uppercase rounded-full px-2 py-1 font-bold text-white">Under review</div>
                <div>MAY 14,1988</div>
            </div>
            <div class="px-6 py-4 border-t">
                <div class="bg-gray-200 rounded text-left p-4">
                    Here is a short comment about this employee.
                </div>
            </div>
            <div class="bg-gray-200 text-left px-6 py-4">
                <div class="text-gray-500 font-bold text-sm">Employee</div>
                <div class="flex flex-row mt-2">
                    <div class="flex items-center justify-center rounded-full bg-blue-700 text-sm text-white  w-12 h-12">VG</div>
                    <div class="px-4">
                        <p class="font-bold">Victor Gonzalez</p>
                        <p class="text-sm">instructor</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>