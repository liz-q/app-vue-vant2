<template>
  <div class="home">
    <div class="bg-blue">
      <van-row>
        <van-col span="6">
          <router-link class="link" to="/saoyisao">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-scan"></use>
            </svg>
            <br>扫一扫
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link class="link" to="/fuqian">
            <van-icon name="qr"/>
            <br>付钱
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link class="link" to="/collect">
            <van-icon name="balance-pay"></van-icon>
            <br>收钱
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link class="link" to="/disanfang">
            <van-icon name="tosend"></van-icon>
            <br>第三方
          </router-link>
        </van-col>
      </van-row>
    </div>
    <div class="bg-white">
      <van-row>
        <van-col span="6">
          <IconTextButton iconName="logistics" message="快递"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="cart" message="购物"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="location" message="定位"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="exchange" message="零钱"></IconTextButton>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">
          <IconTextButton iconName="shop" message="商店"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="point-gift" message="礼包"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="records" message="账单"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="tosend" message="钱包"></IconTextButton>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">
          <IconTextButton iconName="photo" message="图表"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="gold-coin" message="财富"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="clock" message="任务"></IconTextButton>
        </van-col>
        <van-col span="6">
          <IconTextButton iconName="more-o" message="更多"></IconTextButton>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {
    Row, Col
  } from 'vant'
  import IconTextButton from '@/components/IconTextButton'
  export default {
    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      IconTextButton
    },
    data(){
      return{

      }
    },
    methods: {
      chickIconBtn(e){
        console.log(e);
      }
    }
  }
</script>
<style lang="less">
  .bg-blue, .bg-white {
    text-align: center;
    .van-icon {
      font-size: 1.3em;
    }
    .icon {
      font-size: 1.3em;
    }
  }

  .bg-blue {
    background-color: #2d8cf0;

    color: #fff;
    .link{
      color: #fff;
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 15px 0 10px 0;
    }
  }

  .bg-white {
    background-color: #fff;
    margin-bottom: 5px;
  }
</style>
