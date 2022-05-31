<template>
  <div>
    <div class="flex justify-center">
      Display Table Data
    </div>
    <div class="flex justify-center">
      <table class="w-1/2 px-6 py-4 whitespace-no-wrap">
        <thead class="">
          <tr class="border-b border-gray-200 bg-gray-50 text-left uppercase ">
            <th>No</th>
            <th>Name</th>
            <th colspan="2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in userList.listData" :key="i" class="border-b border-gray-200">
            <td class="py-4 whitespace-no-wrap">
              {{ item.no }}
            </td>
            <td class="py-4 whitespace-no-wrap">
              {{ item.name }}
            </td>
            <td>
              <!-- <nuxt-link to="user/detail/1">
                Update
              </nuxt-link> -->
              <button type="button" class="inline-flex px-2 text-sm font-semibold text-red-700 bg-green-200 rounded-full" @click="updateUserById(item.no)">
                Update
              </button>
              <button type="button" class="inline-flex px-2 text-sm font-semibold text-red-700 bg-red-200 rounded-full" @click="deleteUserById(item.no)">
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, computed, watch, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup (_props, context) {
    const userList = reactive({
      listData: []
    })

    const { $axios } = useContext()
    computed(() => userList.listData)
    watch(() => userList.listData, () => {
      console.log('watch')
    })
    onMounted(async () => {
      await getUserData()
      // const response = await window.$nuxt.$axios.$get('http://localhost:3000/users/')
      // userList.listData = response.data
    })

    async function getUserData () {
      console.log((context))
      const response = await $axios.$get('users/')
      userList.listData = response.data
    }

    async function deleteUserById (id) {
      const response = await $axios.$delete('users/' + id)
      if (response) {
        getUserData()
      }
    }

    async function updateUserById (id) {
      const response = await $axios.$put('users/' + id, { name: 'ABC' })
      if (response) {
        getUserData()
      }
    }

    return {
      userList,
      getUserData,
      deleteUserById,
      updateUserById
      // userListData
    }
  }
})
</script>
