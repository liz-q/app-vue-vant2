<template>
  <div>
    <van-nav-bar
      title="收钱"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
  import {NavBar} from 'vant'
  export default {
    components:{
      [NavBar.name]:NavBar
    },
    name: "Collect",
    methods:{
      onClickLeft() {
        this.$router.push('/');
      },
      onClickRight() {
        alert('按钮');
      }
    }
  }
</script>

<style scoped>

</style>
