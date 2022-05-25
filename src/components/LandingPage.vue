<template>
  <div class="bg-gray-200 flex flex-col items-center">
    <header class="bg-indigo-700 w-full px-4 py-2 flex justify-center border-b-4 border-pink-500">
      <div class=" max-w-7xl w-full">
        <div class="flex items-center justify-between">
          <div class="flex">
            <img class="text-blue-100 w-10 h-10" src="/src/assets/download.png"/>
            <span class="text-3xl text-pink-500">scrimba</span>
          </div>
          <button class="sm:hidden">
            <span class="material-icons-round text-blue-100">menu</span>
          </button>
        </div>
        <div class="text-left mt-4 my-4">
          <h1 class="text-2xl text-indigo-100">Want to learn Tailwind CSS?</h1>
          <p class="text-sm text-indigo-200">“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design,and the build size is tiny.”</p>
          <div class="relative mt-4 flex justify-between">
            <div>
              <a href="#" class="capitalize bg-pink-500 text-indigo-100 rounded-full font-bold mt-2 px-4 py-2">Enroll now</a>
            </div>
            <div class="absolute right-0 bg-white border-4 border-pink-500 rounded-full flex justify-center items-center p-5">
              <img class="w-16 h-16" src="/src/assets/tailwind-css-2.svg  "/>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="mt-16 w-full flex flex-col items-center">
      <div class="max-w-7xl w-full text-left p-4">
        <h1 class="text-indigo-700 font-bold text-xl border-b border-indigo-600 pb-1">How it works</h1>
        <p class="text-sm mt-4 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 

        <h1 class="text-indigo-700 font-bold text-xl border-b border-indigo-600 pb-1 mt-4">Advantages</h1>

        <div class="mt-4 flex flex-col sm:flex-row sm:-mx-2">
          <div class="mt-4 sm:w-1/3">
            <div class="h-full bg-white border-b-4 rounded-lg border-pink-500 p-8 flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
              <div class="">
                <div class="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">RT</div>
              </div>
              <div class="mt-4 font-bold">No Custom CSS</div>
              <div class="mt-2 text-gray-600 text-sm">Tailwind's advance class extraction will leave your project free of custom CSS.</div>
            </div>
          </div>

          <div class="mt-4 sm:w-1/3">
            <div class="h-full bg-white border-b-4 rounded-lg border-pink-500 p-8 flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
              <div class="">
                <div class="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">RT</div>
              </div>
              <div class="mt-4 font-bold">No Custom CSS</div>
              <div class="mt-2 text-gray-600 text-sm">Tailwind's advance class extraction will leave your project free of custom CSS.Tailwind's advance class extraction will leave your project free of custom CSS.</div>
            </div>
          </div>

          <div class="mt-4 sm:w-1/3">
            <div class="h-full bg-white border-b-4 rounded-lg border-pink-500 p-8 flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
              <div class="">
                <div class="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">RT</div>
              </div>
              <div class="mt-4 font-bold">No Custom CSS</div>
              <div class="mt-2 text-gray-600 text-sm">Tailwind's advance class extraction will leave your project free of custom CSS.</div>
            </div>
          </div>

        </div>
      </div>

      <div class="bg-gray-800 w-full flex flex-col items-center border-t-2 norder-black mt-12 py-12 p-4">
        <h1 class="text-gray-400 font-bold text-xl">Sing up to download the free PDF</h1>
        <form class="max-w-4xl w-full mt-4 text-gray-400">

          <div class="flex flex-col md:flex-row md:-mx-2">
            <label for="first_name" class="sr-only">First Name</label>
            <input type="text" placeholder="First Name" class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" id="first_name">
            <input type="text" placeholder="Last Name" class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" id="fast_name">
          </div>

          <div  class="flex flex-col md:flex-row md:-mx-2">
            <input type="text" placeholder="Last Name" class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" id="fast_name">
            <input type="text" placeholder="Last Name" class="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2" id="fast_name">
          </div>

          <div>
              <button class="bg-blue-600 text-white rounded-lg mt-4 py-2 px-4 w-full">Create account</button>
          </div>
        </form>
      </div>
    </main>

    <footer class="bg-gray-800 w-full pb-8">
      <p class="text-gray-600 font-light">Copyright @ 2021Scrimba</p>
    </footer>
  </div>
</template>