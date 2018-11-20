<template>
  <div>
    <a class="icon-btn" :class="{iconBtnBg:isClick}" @click="clickIconTextBtn">
      <van-icon :name="iconName"/>
      <br><span class="text">{{message}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "IconTextButton",
    props: {
      iconName: {type: String, required: true},
      message: {type: String, required: true}
    },
    data() {
      return {
        isClick: false,
        timer: null
      }
    },
    mounted() {
      // console.log(this.timer);
    },
    methods: {
      clickIconTextBtn() {
        console.log(this.message);
        this.isClick = true;
        this._setTimeOut(100)
      },
      _setTimeOut(delayTime) {
        this.timer = setTimeout(() => {
          this.isClick = false
        }, delayTime)
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
</script>

<style scoped lang="less">
  .text{font-size: 12px;}
</style>
