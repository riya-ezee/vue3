<template>
  <div class="">
    <!-- <Tutorial /> -->
    <div class="flex justify-center">
      <div>Filter</div>
      <div>
        <button @click="add()">
          Add
        </button>
      </div>
    </div>
    {{ sampleData.count }}
    {{ sampleData.selectedField }}
    <div v-for="i in sampleData.count" :key="i" class="flex justify-center">
      <select v-model="sampleData.selectedField[i-1]">
        <option>Select</option>
        <option v-for="keys in Object.keys(sampleData.lists[0])" :key="keys">
          {{ keys }}
        </option>
      </select>
      <input type="text" placeholder="search">
      <input type="submit" value="Clear">
    </div>

    <div class="flex justify-center">
      <table class="border">
        <tr>
          <th v-for="keys in Object.keys(sampleData.lists[0])" :key="keys">
            {{ keys }}
          </th>
        </tr>
        <tr v-for="(item ,i) in sampleData.lists" :key="i">
          <td>{{ item.Name }}</td>
          <td>{{ item.Age }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import list from '~/data/list.json'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const sampleData = reactive({
      lists: list,
      count: 1,
      selectedField: []
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
