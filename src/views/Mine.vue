<template>
  <div>
    mine
    <Input v-model="inputValue" />
    <div>{{inputValue}}</div>
    <BottomBar />
  </div>
</template>

<script>
  import Input from '../components/Input'
  export default {
    name: "Mine",
    data(){
      return {
        inputValue:'2323'
      }
    },
    components:{
      Input,
    },
    methods:{
      inputKeyUp(){
        console.log(this.inputValue);
      }
    }
  }
</script>

<style scoped>

</style>
