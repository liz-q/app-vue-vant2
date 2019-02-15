<template>
  <div>
    <input type="text" :value="value" @input="updateVal($event.target.value)">
  </div>
</template>

<script>
  export default {
    name: "Input",
    props:[
      'value'
    ],
    methods:{
      updateVal(val){
        console.log(val);
        this.$emit('input',val)
      }
    }
  }
</script>

<style scoped>

</style>
