<template>
    <div class="flex justify-center mt-8 mx-9 flex-wrap">
      <div class="flex m-2" v-for="(item, index) in stocks.lists" :key="index">
        <InfoBox v-if="item.holding">
          <template v-slot:header>
            <InfoHeader>
              <template v-slot:title>{{item.name}}</template>
              <template v-slot:price><span class="text-xs">Price: {{item.price}}</span></template>
              <template v-slot:qty><span class="text-xs"> | Quantity:{{item.holding}}</span></template>
            </InfoHeader>
          </template>
          <template v-slot:body>
            <BaseInputField v-model="item.quantity"></BaseInputField>
            <BaseButton :class="item.quantity >0 && item.holding >= item.quantity ? 'bg-gray-700' : 'bg-gray-300'" :disabled="item.quantity >0 && item.holding >= item.quantity ? false : true" @click="sellStocks(index)">Sell</BaseButton>
          </template>
        </InfoBox>
      </div>
  </div>
</template>

<script setup>
import { stocks,availableFunds } from "../composables/store"

function sellStocks(index) {
 
  availableFunds.value = availableFunds.value + stocks.lists[index].price * stocks.lists[index].quantity
  stocks.lists[index].holding = stocks.lists[index].holding - stocks.lists[index].quantity
   
  stocks.lists[index].quantity = 0
}
</script>