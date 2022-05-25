<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="flex flex-col items-center ">
      <h1 class=" text-2xl font-bold">User Details</h1>
      <div class=""><span class="text-xl">Name: </span>{{ copyOfUserDetail.name}}</div>
      <div class=""><span class="text-xl">Age: </span>{{ copyOfUserDetail.age }}</div>
      <div class=""><span class="text-xl">Gender: </span>{{ copyOfUserDetail.gender }}</div>
    </div>
    <div class="h-11"></div>

    <div class="flex flex-col items-center">
      <div class="text-2xl font-bold">Add User Details</div>
      <BaseInputField type="text" class="placeholder-gray-500 mt-4 border border-gray-600 rounded-lg py-1 px-4 w-3/12"  placeholder="Name" v-model="userDetail.name"/>
      <BaseInputField type="text" class="placeholder-gray-500 my-4 border border-gray-600 rounded-lg py-1 px-4 w-3/12" placeholder="Age" v-model="userDetail.age"/>
      <div>
        <label class="text-left">Gender </label>
        <input  type="radio" name="gender" id="r1" class="mx-4" value="male" v-model="userDetail.gender"><label>Male</label>
        <input  type="radio" name="gender" id="r2" class="mx-4" value="female" v-model="userDetail.gender"><label>Female</label>
      </div>

      <button type="submit"  @click.prevent="saveData()" class="text-white font-bold py-2 px-4 mt-4 rounded w-3/12" :class="userData.isDisableSaveBtn ? 'bg-gray-500 ' : 'bg-blue-500' " :disabled="isDisableSaveBtn">Save</button>
    </div>

  </div>
</template>
<script>
import { reactive, watch } from 'vue'
export default {
  setup () {
    const userData = reactive({
      isDisableSaveBtn: true
    })
    const userDetail = reactive({
      name: 'Abc',
      age: 20,
      gender: 'male'
    })

    // let copyOfUserDetail = {}
    let copyOfUserDetail = Object.assign({}, userDetail)

    watch(userDetail, () => {
      userData.isDisableSaveBtn = false
    })

    function saveData () {
      // copyOfUserDetail = userDetail
      copyOfUserDetail = Object.assign(copyOfUserDetail, userDetail)
      userData.isDisableSaveBtn = true
    }
    return {
      userData,
      userDetail,
      saveData,
      copyOfUserDetail
    }
  }

}
</script>
