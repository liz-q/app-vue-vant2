<template>
  <div class="collect">
    <van-nav-bar
      title="收钱"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="cont">
      <div class="collect-wrap">
        <div class="title">支付宝扫一扫，向我付款</div>
        <van-notice-bar
          text="【立即升级收钱码】享受免费提现，收钱语音播报，火速领取！"
          mode="link"
          :left-icon="noticeUrl"
        />
        <div>
          <!--<img :src="ewmUrl" alt="">-->
          <vue-qr
            class="ewm"
            :text="qrConfig.value"
            :logoSrc="qrConfig.logo"
            :size="180"
            :margin="0"
          ></vue-qr>
        </div>
        <p class="amt" v-if="amt!==''">
          {{getAmt}}
        </p>
        <div class="action">
          <span v-if="amt===''" @click="setMoney">设置金额</span>
          <span v-else @click="clearMoney">清除金额</span>
          <span>保存图片</span>
        </div>
        <div class="link">
          <van-cell icon="pending-orders" title="收款记录" is-link/>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import VueQr from 'vue-qr'
  import {NavBar, NoticeBar, Cell} from 'vant'

  export default {
    components: {
      VueQr,
      [NavBar.name]: NavBar,
      [NoticeBar.name]: NoticeBar,
      [Cell.name]: Cell
    },
    name: "Collect",
    data() {
      return {
        noticeUrl: require('../assets/imgs/notic.png'),
        amt: '',
        qrConfig: {
          value: '',
          logo: require('../assets/logo.png')
        }
      }
    },
    mounted() {
      const {money,reason} = this.$route.query;
      this.setQrConfigValue(money);
    },
    computed: {
      getAmt() {
        return this.amt !== '' ? `￥${this.amt}` : '';
      },
    },
    methods: {
      onClickLeft() {
        this.$router.push('/');
      },
      setQrConfigValue(money=''){
        if(!money){
          this.amt = '';
          this.qrConfig.value = 'www.baidu.com'
        }else{
          this.amt = money;
          this.qrConfig.value = `www.baidu.com?amt=${money}`;
        }
      },
      setMoney() {
        this.$router.push('/set-money');
      },
      clearMoney(){
        this.amt='';
        this.setQrConfigValue();
      }
    }
  }
</script>

<style scoped lang="less">
  .van-cell {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .collect {
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
      .amt {
        text-align: center;
        font-size: 2em;
        margin-bottom: 0;
      }
      .title {
        font-weight: normal;
        font-size: 14px;
        text-align: center;
        color: #333;
        padding: 3em 0 1em 0;
      }
      .ewm {
        padding-top: 1em;
        text-align: center;
        > img {
          border: 1px solid blue;
          width: 100%;
          height: 100%;
        }
      }
      .action {
        padding: 1em 0;
        width: 90%;
        margin: 0 auto;
        position: relative;
        &:after {
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
        span {
          display: inline-block;
          width: 50%;
          box-sizing: border-box;
          font-size: 14px;
          color: #2d8cf0;
          line-height: 1;
          position: relative;
          &:nth-child(1) {
            text-align: right;
            padding-right: 1em;
            &:after {
              content: ' ';
              position: absolute;
              pointer-events: none;
              box-sizing: border-box;
              top: 0;
              right: 0;
              bottom: 0;
              border-left: 1px solid #ddd;
            }
          }
          &:nth-child(2) {
            padding-left: 1em;
          }
        }
      }
    }
  }

</style>
