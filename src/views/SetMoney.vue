<template>
  <div>
    <van-nav-bar
      title="设置金额"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />

    <van-cell-group>
      <van-field
        v-model="money"
        clearable
        label="金额"
      />
      <van-field
        v-model="reason"
        clearable
        label="理由"
        v-if="reasonShow"
      />
    </van-cell-group>
    <div class="rsn" v-if="!reasonShow">
      <span @click="reasonShow=true">添加收款理由</span>
    </div>
    <div class="btn">
      <van-button type="primary" size="large" @click="handleOk">确定</van-button>
    </div>

  </div>
</template>

<script>
  import {NavBar,Field,CellGroup,Button } from 'vant'
  export default {
    components:{
      [NavBar.name]: NavBar,
      [Field .name]: Field,
      [CellGroup .name]: CellGroup,
      [Button .name]: Button,
    },
    name: "SetMoney",
    data(){
      return{
        money:'',
        reason:'',
        reasonShow:false
      }
    },
    methods:{
      onClickLeft() {
        this.$router.push('/collect');
      },
      handleOk(){
        this.$router.push({
          path:'/collect',
          query:{
            money: this.money,
            reason:this.reason
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .van-cell-group{margin-top: 10px;}
  .btn{
    padding: 16px 10px;
  }
  .rsn{
    text-align: right;
    padding:10px;
    >span{
      color: #2d8cf0;
      font-size: 14px;
    }
  }
</style>
