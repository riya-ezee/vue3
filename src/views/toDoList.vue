<template>
<div class="min-h-screen flex flex-col items-center bg-gray-200 rounded ">
    <div class="font-bold mt-5">To do list</div>
    <div>
        <BaseButton class="border-2 rounded border-blue-500 px-2 m-2" @click="changeTab('All')"> All</BaseButton>
        <BaseButton class="border-2 rounded border-blue-500 px-2 m-2" @click="changeTab('Solved')" >Solved</BaseButton>
        <BaseButton class="border-2 rounded border-blue-500 px-2 m-2" @click="changeTab('Unsolved')">Unsolved</BAseButton>
    </div>
    <div>
      <BaseInputField type="text" v-model="newTask" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-1 px-4"  placeholder="Task" />
      <BaseButton @click="add" class="border-2 rounded-full border-blue-500 px-2 py-2  m-2">Add</BaseButton>
    </div>
    <div>
      <table>
        <tr v-for="(item,index) in filterData" :key="index">
          <td><BaseButton @click="item.status=!item.status" :class="item.status ? 'border-blue-500':'border-red-500'" class="border-2 rounded-full px-2 py-2  m-2">status</BaseButton></td>
          <td>{{item.title}}</td>
          <td><BaseButton @click="deleteTask(index)" class="border-2 rounded-full border-red-500 px-2 py-2  m-2">Delete</BaseButton></td>
        </tr>
      </table>
    </div>
</div>
</template>

<script setup>

import { computed, reactive, ref } from 'vue'
// export default {
//   setup () {
const tasks = reactive({
  task: [{
    title: 'Title1',
    status: false
  }]
})
const currentFilter = ref('All')
const newTask = ref('')
const filterData = computed(() => { return returnFilterData() })

function returnFilterData () {
  return tasks.task.filter((content) => {
    if (currentFilter.value === 'Solved') {
      return content.status === true
    } else if (currentFilter.value === 'Unsolved') {
      return content.status === false
    } else {
      return content
    }
  })
}

function add () {
  console.log(newTask)
  var task = newTask.value.trim()
  tasks.task.push({ title: task, status: false })
  newTask.value = ''
}
function deleteTask (index) {
  tasks.task.splice(index, 1)
}

function changeTab (val) {
  currentFilter.value = val
}
// return {
//   tasks,
//   newTask,
//   currentFilter,
//   add,
//   deleteTask,
//   changeTab,
//   filterData
// }
//   }
// }
</script>
