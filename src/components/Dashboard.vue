<template>
  <div class="relative min-h-screen md:flex">
    <!-- mobile menu bar -->
    <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      <!-- logo -->
      <a href="#" class="p-4 flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        <span class="text-2xl font-bold">Better Dev</span>
      </a>
      <!-- mobile menu button -->
      <button class="p-4 hover:bg-gray-600" @click="isMenuOpen =!isMenuOpen" >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- sidebar -->
    <div class="bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out md:relative md:translate-x-0" :class="!isMenuOpen ? '-translate-x-full': '' ">
      <!-- logo -->
      <a href="#" class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        <span class="text-2xl font-bold">Better Dev</span>
      </a>

      <!-- navigation bar -->
      <nav>
        <a href="" class="block py-2 5 px-4 hover:bg-blue-400 rounded transition duration-200">Home</a>
        <a href="" class="block py-2 5 px-4 hover:bg-blue-400 rounded transition duration-200">About</a>
        <a href="" class="block py-2 5 px-4 hover:bg-blue-400 rounded transition duration-200">Featurs</a>
        <a href="" class="block py-2 5 px-4 hover:bg-blue-400 rounded transition duration-200">Contact</a>
      </nav>
      
    </div>
    <!-- content -->
    <div class="flex-1 p-8 text-2xl font-extrabold">
      content goes here
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen : false,
    }
  }
}
</script>