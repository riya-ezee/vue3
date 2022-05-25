<template>
  <div class="flex flex-col h-screen">
    <HeaderView />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'
</script>

