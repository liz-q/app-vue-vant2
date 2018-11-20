<template>
  <div class="general-panel">
    <div class="title">
      <span class="main-title">{{title}}</span>
      <span class="sub-title">{{subTitle || '副标题'}}</span>
    </div>
    <div class="items">
      <div class="item">1</div>
      <div class="item">1</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GeneralPanel",
    props: {
      title: {type: String, required: true},
      subTitle: {type: String}
    }
  }
</script>

<style scoped lang="less">
  .title {
    font-size: 14px;
    color: #333;
    text-align: left;
    padding: 10px 1em;
    .main-title {
      border-left: 3px solid #2d8cf0;
      padding-left: 10px;
    }
    .sub-title {
      padding-left: 10px;
      color: #888;
    }
  }

  .items {
    overflow: hidden;
    text-align: left;
    .item {
      width: 50%;
      float: left;
      position: relative;
      padding-top: 30px;
      padding-bottom: 30px;
      &:before{
        content: ' ';
        position: absolute;
        pointer-events: none;
        box-sizing: border-box;
        left: 0;
        right: 0;
        top: 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        border-bottom: 1px solid #eee;
      }
      &:nth-child(odd){
        &:after{
          content: ' ';
          position: absolute;
          pointer-events: none;
          box-sizing: border-box;
          right: 0;
          top: 0;
          bottom: 0;
          -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
          border-left: 1px solid #eee;
        }
      }
    }
  }
</style>
