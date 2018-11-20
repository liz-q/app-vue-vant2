<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" to="/caifu" dot>财富</van-tabbar-item>
      <van-tabbar-item icon="records" to="/dingdan" info="5">订单</van-tabbar-item>
      <van-tabbar-item icon="contact" to="wode" info="20">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  import {
    Tabbar,
    TabbarItem,
  } from 'vant'

  export default {
    components:{
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    data() {
      return {
        active: 0
      }
    },
    methods: {
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
