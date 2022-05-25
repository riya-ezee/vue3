<template>
  <div class="flex justify-center w-full mt-8">
    <div class="flex items-center justify-between w-10/12 bg-gray-100 border-2 rounded p-4">
      <div>
        <RouterLink to="/" class="p-5" active-class="bg-gray-300"
          >Stock Trader</RouterLink
        >
        <RouterLink to="/PortfolioView" class="p-5" active-class="bg-gray-300"
          >Portfolio</RouterLink
        >
        <RouterLink to="/StocksView" class="p-5" active-class="bg-gray-300"
          >Stocks</RouterLink
        >
        <span class="absolute">
          <li class="group">
            <span class="firstlevel">Stocks</span>
            <ul class="absolute left-0 top-0 mt-6 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
              <li v-for="(company, index) in stocks.lists" :key="index" class="p-1 whitespace-no-wrap rounded text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100 w-28">
                <input type="checkbox" id="checkbox" v-model="company.isIncluded" class="mr-2" />
                <label for="checkbox" class="font-light text-gray-400">{{company.name}}</label>
              </li>
            </ul>
          </li>
        </span>
      </div>

      <div>Funds: {{ availableFunds }}</div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { stocks, availableFunds } from "../composables/store";

</script>