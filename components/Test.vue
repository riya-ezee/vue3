<template>
  <div>
    <!-- <div>Hello World</div> -->
    <div v-html="fullname" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      a: 'World'
    }
  },
  computed: {
    fullname () {
      return `Hello <b>${this.a}</b>`
    }
  }
}
</script>
