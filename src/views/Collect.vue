<template>
  <div class="collect">
    <van-nav-bar
      title="收钱"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="test"
    />

    <div class="cont">
      <div class="collect-wrap">
        <div class="title">支付宝扫一扫，向我付款</div>
        <van-notice-bar
          text="【立即升级收钱码】享受免费提现，收钱语音播报，火速领取！"
          mode="link"
          :left-icon="noticeUrl"
        />
        <div class="ewm">
          <img src="../assets/imgs/collect-ewm.jpg" alt="">
        </div>
        <div class="action">
          <span>设置金额</span>
          <span>设置金额</span>
        </div>
        <div class="link">
          <van-cell icon="pending-orders" title="收款记录" is-link />
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {NavBar, NoticeBar,Cell} from 'vant'

  export default {
    components: {
      [NavBar.name]: NavBar,
      [NoticeBar.name]: NoticeBar,
      [Cell.name]: Cell
    },
    name: "Collect",
    data(){
      return{
        noticeUrl:require('../assets/imgs/notic.png')
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push('/');
      },
      onClickRight() {
        alert('按钮');
      }
    }
  }
</script>

<style scoped lang="less">
  .van-cell{
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .collect{
    background-color: #2d8cf0;
    height: 100%;
  }
  .cont {
    padding-top: 10px;
    .collect-wrap {
      width: 95vw;
      margin: 0 auto;
      border-radius: 4px;
      background-color: #fff;
      .title {
        font-weight: normal;
        font-size: 14px;
        text-align: center;
        color: #333;
        padding: 3em 0 1em 0;
      }
      .ewm{
        width: 50vw;
        margin: 0 auto;
        >img{
          width: 100%;height: 100%;
        }
      }
      .action{
        padding: 1em 0;
        width: 90%;
        margin: 0 auto;
        position: relative;
        &:after{
          content: ' ';
          position: absolute;
          pointer-events: none;
          box-sizing: border-box;
          left: 0;
          right: 0;
          bottom: 0;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          border-bottom: 1px solid #eee;
        }
        span{
          display: inline-block;
          width: 50%;
          box-sizing: border-box;
          font-size: 14px;
          color: #2d8cf0;
          line-height: 1;
          position: relative;
          &:nth-child(1){
            text-align: right;
            padding-right: 1em;
            &:after{
              content: ' ';
              position: absolute;
              pointer-events: none;
              box-sizing: border-box;
              top:0;
              right: 0;
              bottom: 0;
              border-left: 1px solid #ddd;
            }
          }
          &:nth-child(2){
            padding-left: 1em;
          }
        }
      }
    }
  }

</style>
