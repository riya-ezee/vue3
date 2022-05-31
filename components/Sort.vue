<template>
  <div>
    <div class="flex justify-center">
      Display Table Data
    </div>
    <div class="flex justify-center">
      <input v-model="lists.search" type="text" placeholder="search">
    </div>
    <div class="flex justify-center">
      <table class="border-2">
        <tr>
          <th
            v-for="keys in Object.keys(lists.list[0])"
            :key="keys"
            class="text-blue-600"
            @click="sort(keys)"
          >
            {{ keys }}
          </th>
        </tr>
        <tr v-for="(item, i) in searchData" :key="i">
          <td>{{ item.Name }}</td>
          <td>{{ item.Age }}</td>
          <td>{{ item.Address }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  computed
} from '@nuxtjs/composition-api'
import tableData from '~/data/list.json'

export default defineComponent({
  setup () {
    const lists = reactive({
      list: tableData,
      reverse: false,
      sortKey: 'Name',
      search: ''
    })

    const searchData = computed(() => {
      return lists.list.filter((content) => {
        return content.Name.toLowerCase().includes(lists.search) || content.Address.toLowerCase().includes(lists.search)
      })
    })

    function sort (sortKey) {
      lists.reverse = lists.sortKey === sortKey ? !lists.reverse : false
      lists.sortKey = sortKey
      if (lists.reverse === true) {
        return lists.list.reverse()
      }
      lists.list.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return -1
        }
        if (a[sortKey] > b[sortKey]) {
          return 1
        }
        return 0
      })
    }

    return {
      lists,
      searchData,
      sort
    }
  }
})
</script>
<style>
table,
th,
td {
  border: 1px solid black;
  padding: 10px;
  padding-left: 100px;
  padding-right: 100px;
}
</style>
