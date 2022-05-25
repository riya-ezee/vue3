<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ username}}

    <BaseInputField  placeholder="username" v-model="username" />
<button disabled @click="a()" class="bg-blue-500 text-white font-bold py-2 px-4 rounded ">  Button
</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    a () {
      console.log('jgdhej')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
