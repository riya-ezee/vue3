<template>
  <div>
    <!-- <Tutorial/> -->
    <Test />
    <BaseInputField />
    <Sort />
    <nuxt-link to="/user" class="flex justify-center text-lg text-blue-500">
      User List
    </nuxt-link>
  </div>
</template>

<script>
// import Test from '@/components/Test.vue'
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import BaseInputField from '@/components/core/BaseInputField/BaseInputField.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    // Test,
    BaseInputField
  },
  setup () {
    const sampleData = reactive({
      count: 1
    })

    function add () {
      sampleData.count = sampleData.count + 1
    }
    return {
      sampleData,
      add
    }
  }
})
</script>
