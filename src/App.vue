<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

// import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/Test.vue'
// import Challenges from './components/Challenges.vue'
import LandingPage from './components/LandingPage.vue'
import Dashboard from './components/Dashboard.vue'
import Dashboard2 from './components/Dashboard2.vue'
</script>

<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <!-- <Test />
    <Challenges /> -->
    
    <LandingPage />
    <Dashboard />
    <Dashboard2 />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
