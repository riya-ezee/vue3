<template>
  <div class="relative min-h-screen md:flex">
    <!-- mobile menu bar -->
    <MobileMenuBar />

    <!-- sidebar -->
    <Sidebar />

    <!-- content -->
    <div class="flex-1 p-8">
      content goes here
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import MobileMenuBar from '../components/MobileMenuBar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  components: {
    MobileMenuBar,
    Sidebar
  }

}
</script>
