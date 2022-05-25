<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const DefaultLayout = 'DashboardLayout'
export default {
  computed: {
    layout () {
      return this.$route.meta.layout || DefaultLayout
    }
  }
}
</script>
