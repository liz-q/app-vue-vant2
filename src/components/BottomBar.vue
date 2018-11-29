<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" to="/wealth" dot>财富</van-tabbar-item>
      <van-tabbar-item icon="records" to="/order" info="5">订单</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mine" info="20">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {
    Tabbar,
    TabbarItem,
  } from 'vant'

  export default {
    name: "BottomBar",
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    data() {
      return {
        active: 0
      }
    },
    mounted() {
      this.changeBar(this.$route.name);
    },
    methods: {
      changeBar(tab) {
        switch (tab) {
          case 'wealth':
            this.active = 1;
            break;
          case 'order':
            this.active = 2;
            break;
          case 'mine':
            this.active = 3;
            break;
          default:
            this.active = 0;
            break;
        }
      }
    }
  }
</script>

<style scoped>

</style>
