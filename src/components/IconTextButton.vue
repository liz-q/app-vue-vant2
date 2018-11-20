<template>
  <div>
    <a class="icon-btn" :class="{iconBtnBg:icClick}" @click="clickIconTextBtn">
      <van-icon :name="iconName"/>
      <br>{{message}}
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
        icClick: false,
        timer: null
      }
    },
    mounted() {
      // console.log(this.timer);
    },
    methods: {
      clickIconTextBtn() {
        console.log(this.message);
        this.icClick = true;
        this._setTimeOut(100)
      },
      _setTimeOut(delayTime) {
        this.timer = setTimeout(() => {
          this.icClick = false
        }, delayTime)
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
</script>

<style scoped>

</style>
