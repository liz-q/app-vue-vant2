<template>
  <div>
    <van-nav-bar
      title="设置金额"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
  import {NavBar} from 'vant'
  export default {
    components:{
      [NavBar.name]: NavBar,
    },
    name: "SetMoney",
    methods:{
      onClickLeft() {
        this.$router.push('/collect?money=10');
      }
    }
  }
</script>

<style scoped>

</style>
