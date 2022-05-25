<template>
  <div class="bg-gray-200 h-screen flex" >
    <div :class="isMenuOpen ? 'block' : 'hidden'" @click="isMenuOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>
    <!-- sidebar -->
    <!-- <div class="bg-gray-900 text-gray-100 w-64 absolute inset-y-0 left-0 transform transition duration-300 ease-in-out lg:relative lg:translate-x-0 " :class="!isMenuOpen ? '-translate-x-full': '' "> -->
    
    <div :class="isMenuOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ease-in">
      <a href="#" class="flex items-center mt-8 justify-center">
        <svg class="h-12 w-12" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
        </svg>
        <span class="font-extrabold text-2xl mx-2 text-white">Dashboard</span>
      </a>
      <!-- nav -->
      <nav class="mt-10">
        <a href="#" class="flex items-center text-gray-100 mt-4 px-6 py-2 bg-gray-700">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
          </svg>
          <span class="mx-3">Dashboard</span>
        </a>

        <a href="#" class="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700  hover:text-gray-100">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
          </svg>
          <span class="mx-3">UI Elements</span>
        </a>

        <a href="#" class="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700  hover:text-gray-100">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <span class="mx-3">Tables</span>
        </a>

        <a href="#" class="flex items-center mt-4 py-2 px-6 text-gray-400 hover:bg-gray-700  hover:text-gray-100">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
          <span class="mx-3">Forms</span>
        </a>
      </nav>
    </div>

    <div class="flex-1 flex flex-col overflow-hidden">
    <!-- mobile menu bar class="py-4 px-6"-->
    
      <div class="flex justify-between items-center border-b-4 border-indigo-600 py-4 px-6 bg-white">
        <div class="flex items-center">
          <button class="text-gray-500 focus:outline-none lg:hidden" @click="isMenuOpen=true">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          <div class="relative mx-4 lg:mx-0">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input class="w-32 outline-none sm:w-64 rounded-md pl-10 pr-4 py-2 border focus:border-indigo-600 focus:ring focus:ring-blue-300 focus:bg-opacity-60" type="text" placeholder="Search">
          </div>
        </div>

        <div class="flex items-center">
          {{isMenuOpen}}
          <button class="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- content -->
      <div class="flex-1 bg-gray-200 overflow-x-hidden overflow-y-auto">
        <div class="container mx-auto px-6 py-8">
          <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>

          <div class="mt-4">
            <div class="flex flex-wrap -mx-6">
              <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="bg-indigo-500 rounded-full p-3">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z" fill="currentColor"></path>
                      <path d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z" fill="currentColor"></path>
                      <path d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z" fill="currentColor"></path>
                      <path d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z" fill="currentColor"></path>
                      <path d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z" fill="currentColor"></path>
                      <path d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-600">8,282</h4>
                    <div class="text-gray-400">New Users</div>
                  </div>
                </div>
              </div>

              <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="bg-yellow-600 rounded-full p-3">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z" fill="currentColor"></path>
                      <path d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z" fill="currentColor"></path>
                      <path d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z" fill="currentColor"></path>
                  </svg>
                  </div>
                  <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-600">200,521</h4>
                    <div class="text-gray-400">Total Orders</div>
                  </div>
                </div>
              </div>

              <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div class="bg-pink-500 rounded-full p-3">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                      <path d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z" stroke="currentColor" stroke-width="2"></path>
                    </svg>
                  </div>
                  <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-600">215,542</h4>
                    <div class="text-gray-400">Available Products</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="flex flex-col mt-8">
            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table class="min-w-full">
                  <thead class="">
                    <tr class="border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      <th class="px-6 py-3 ">Name</th>
                      <th class="px-6 py-3">Tittle</th>
                      <th class="px-6 py-3">Status</th>
                      <th class="px-6 py-3">Role</th>
                      <th class="px-6 py-3"></th>
                    </tr>
                  </thead>
                  
                  <tbody class="bg-white">
                    <tr class="border-b border-gray-200">
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div class="ml-4">
                              <div class="text-sm leading-5 font-medium text-gray-900">John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                          </div>
                      </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div class="text-sm leading-5 text-gray-500">Web dev</div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap"><span class="text-green-900 bg-green-100 px-2 text-xs font-semibold inline-flex rounded-full">Active</span></td>
                      <td class="px-6 py-4 whitespace-no-wrap text-gray-500">Owner</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right"><a class="text-indigo-600 hover:text-indigo-900 font-medium leading-5">Edit</a></td>
                    </tr>

                    <tr class="border-b border-gray-200">
                    
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div class="ml-4">
                              <div class="text-sm leading-5 font-medium text-gray-900">John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                          </div>
                      </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div class="text-sm leading-5 text-gray-500">Web dev</div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap"><span class="text-green-900 bg-green-100 px-2 text-xs font-semibold inline-flex rounded-full">Active</span></td>
                      <td class="px-6 py-4 whitespace-no-wrap text-gray-500">Owner</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right"><a class="text-indigo-600 hover:text-indigo-900 font-medium leading-5">Edit</a></td>
                    </tr>
                    <tr class="border-b border-gray-200">
                    
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div class="ml-4">
                              <div class="text-sm leading-5 font-medium text-gray-900">John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                          </div>
                      </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div class="text-sm leading-5 text-gray-500">Web dev</div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap"><span class="text-green-900 bg-green-100 px-2 text-xs font-semibold inline-flex rounded-full">Active</span></td>
                      <td class="px-6 py-4 whitespace-no-wrap text-gray-500">Owner</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right"><a class="text-indigo-600 hover:text-indigo-900 font-medium leading-5">Edit</a></td>
                    </tr>
                    <tr class="border-b border-gray-200">
                    
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div class="ml-4">
                              <div class="text-sm leading-5 font-medium text-gray-900">John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                          </div>
                      </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div class="text-sm leading-5 text-gray-500">Web dev</div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap"><span class="text-green-900 bg-green-100 px-2 text-xs font-semibold inline-flex rounded-full">Active</span></td>
                      <td class="px-6 py-4 whitespace-no-wrap text-gray-500">Owner</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right"><a class="text-indigo-600 hover:text-indigo-900 font-medium leading-5">Edit</a></td>
                    </tr>

                    <tr class="border-b border-gray-200">
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div class="ml-4">
                              <div class="text-sm leading-5 font-medium text-gray-900">John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                          </div>
                      </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div class="text-sm leading-5 text-gray-500">Web dev</div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap"><span class="text-green-900 bg-green-100 px-2 text-xs font-semibold inline-flex rounded-full">Active</span></td>
                      <td class="px-6 py-4 whitespace-no-wrap text-gray-500">Owner</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right"><a class="text-indigo-600 hover:text-indigo-900 font-medium leading-5">Edit</a></td>
                    </tr>

                    <tr class="border-b border-gray-200">
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
                          </div>
                          <div class="ml-4">
                              <div class="text-sm leading-5 font-medium text-gray-900">John Doe
                              </div>
                              <div class="text-sm leading-5 text-gray-500">john@example.com</div>
                          </div>
                      </div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
                        <div class="text-sm leading-5 text-gray-500">Web dev</div>
                      </td>

                      <td class="px-6 py-4 whitespace-no-wrap"><span class="text-green-900 bg-green-100 px-2 text-xs font-semibold inline-flex rounded-full">Active</span></td>
                      <td class="px-6 py-4 whitespace-no-wrap text-gray-500">Owner</td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right"><a class="text-indigo-600 hover:text-indigo-900 font-medium leading-5">Edit</a></td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10"></div> 
      </div>
    </div>
  </div>

  <!-- footer -->
  <div class="bg-gray-800 text-center text-white py-3 px-4 fixed inset-x-0 bottom-0 z-40">
    This a Dashboard Template by Riya Tailor.
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