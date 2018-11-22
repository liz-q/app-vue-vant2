<template>
  <div class="general-panel">
    <div class="title">
      <span class="main-title">{{title}}</span>
      <span class="sub-title">{{subTitle || '副标题'}}</span>
    </div>

    <div class="items">
      <div class="item" v-for="d in data">
        <div class="item-right">
          <img :src="d.imgUrl" alt="">
        </div>
        <div class="item-left">
          <div>
            <span class="item-title">{{d.title}}</span><br>
            <span class="item-sub-title">{{d.abstract}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GeneralPanel",
    props: {
      title: {type: String, required: true},
      subTitle: {type: String},
      data:{type:Array,required: true}
    }
  }
</script>

<style scoped lang="less">
  @imgParentWidth:4rem; /* 图标的高度=图标的宽度=左侧文本内容的高度 */

  .title {
    font-size: 12px;
    color: #333;
    text-align: left;
    padding: 10px 1em;
    .main-title {
      border-left: 3px solid #2d8cf0;
      padding-left: 5px;
    }
    .sub-title {
      padding-left: 3px;
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
      padding: 16px 5px 16px 10px;
      box-sizing: border-box;
      .item-left{
        margin-right: @imgParentWidth;
        height: @imgParentWidth;
        display: flex;
        align-items: center;
        .item-title{
          font-weight: bold;font-size: 14px;color: #333;
        }
        .item-sub-title{
          color: #666;font-size: 10px;
        }
      }
      .item-right{
        float: right;
        width: @imgParentWidth;
        height: @imgParentWidth;
        img{
          width: 100%;height: 100%;
        }
      }

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
