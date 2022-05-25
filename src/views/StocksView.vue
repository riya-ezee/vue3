<template>
  <div class="flex justify-center mt-8 mx-9 flex-wrap" >
    <div class="flex m-2" v-for="(item, index) in stocks.lists" :key="index">
    <InfoBox v-if="item.isIncluded">
      <template v-slot:header>
        <InfoHeader>
          <template v-slot:title>{{item.name}}</template>
          <template v-slot:price>
            <span class="text-xs">Price:{{item.price}}</span>
          </template>
         
        </InfoHeader>
      </template>
      <template v-slot:body>
        <BaseInputField type="number" v-model="item.quantity"></BaseInputField>
        <BaseButton  :class="item.quantity > 0 ? 'bg-gray-700' : 'bg-gray-300'" :disabled="item.quantity > 0 ? false : true " @click="buyStocks(index)">Buy</BaseButton>
      </template>
    </InfoBox>
    </div>
  </div>
</template>

<script setup>
import { stocks,availableFunds } from "../composables/store"

function buyStocks(index) {

  const remainingFunds = availableFunds.value - stocks.lists[index].price * stocks.lists[index].quantity
  if(remainingFunds > 0){
    availableFunds.value = availableFunds.value - stocks.lists[index].price * stocks.lists[index].quantity
    stocks.lists[index].holding = stocks.lists[index].holding + parseInt(stocks.lists[index].quantity)
  } else {
    alert("Fund is not sufficient")
  }
  stocks.lists[index].quantity = 0
}
</script>