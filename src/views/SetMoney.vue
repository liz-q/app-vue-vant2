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
        ref="moneyInput"
        v-model="money"
        clearable
        label="金额"
        @focus="moneyInputFocus"
        @blur="show=false"
        @clear="clearMoney"
      />
      <van-field
        ref="reasonInput"
        v-model="reason"
        clearable
        label="理由"
        v-if="reasonShow"
      />
    </van-cell-group>
    <div class="rsn" v-if="!reasonShow">
      <span @click="handleReasonShow">添加收款理由</span>
    </div>
    <div class="btn">
      <van-button type="primary" :disabled="btnDisabled" size="large" @click="handleOk">确定</van-button>
    </div>
    <van-number-keyboard
      :show="show"
      extra-key="."
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script>
  import {
    NavBar,
    Field,
    CellGroup,
    Button,
    NumberKeyboard
  } from 'vant'

  export default {
    name: "SetMoney",
    components: {
      [NavBar.name]: NavBar,
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
      [Button.name]: Button,
      [NumberKeyboard.name]: NumberKeyboard
    },
    data() {
      return {
        money: '',
        reason: '',
        reasonShow: false,
        show: false, // 控制数字键盘显示
        btnDisabled:true, // 控制按钮禁用状态
        numConfig: {
          num: '', // 小数点前的数字
          dec: '', // 小数点后的数字
          step: 0, // 小数点后第几位
          point: false, // 是否点击小数点
        }
      }
    },
    mounted(){
      this.$refs.moneyInput.focus();
    },
    methods: {
      onClickLeft() {
        this.$router.push('/collect');
      },
      moneyInputFocus(e){
        e.preventDefault();
        this.show=true
      },
      onInput(value) {
        // 判断位数是否超过8位
        if (this.money.length > 8)
          return;

        this.controlValue(value);

        let temp = this.numConfig.num;
        if(this.numConfig.point)
          temp += `.${this.numConfig.dec}`;

        // 判断temp是否大于0，控制按钮禁用状态
        if(Number(temp) === 0){
          this.btnDisabled = true;
        }else{
          this.btnDisabled = false;
        }

        this.money = temp
      },
      onDelete() {
        this.money = ''
      },
      clearMoney(){
        this.numConfig.num='';
        this.numConfig.dec='';
        this.numConfig.step=0;
        this.numConfig.point=false;
      },
      controlValue(value) {
        if (value === '.') {
          this.numConfig.point = true;
          return;
        }
        if (this.numConfig.point) {
          // 点击点之后
          if(this.numConfig.step === 0){
            this.numConfig.dec += value;
            this.numConfig.step ++
          }else if(this.numConfig.step === 1){
            this.numConfig.dec += value;
            this.numConfig.step ++;
          }
        } else {
          // 点击点之前
          this.numConfig.num = this.numConfig.num + value;
        }

      },
      formatMoney(){
        console.log(this.numConfig)
        let mid = parseInt(this.numConfig.num).toString();
        if(this.numConfig.point){
          let _dec = this.numConfig.dec;
          while (_dec.length < 2) {
            _dec += '0'
          }
          mid += `.${_dec}`
        }else{
          mid += '.00'
        }
        return mid;
      },
      handleReasonShow(){
        this.reasonShow=true;
      },
      handleOk() {
        this.$router.push({
          path: '/collect',
          query: {
            money: this.formatMoney(),
            reason: this.reason
          }
        })
      }
    },
    updated(){
      this.reasonShow && this.$refs.reasonInput.focus();
    }
    // directives:{
    //   focus:{
    //     inserted:function (el) {
    //       el.focus();
    //     }
    //   }
    // },
  }
</script>

<style scoped lang="less">
  .van-cell-group {
    margin-top: 10px;
  }

  .btn {
    padding: 16px 10px;
  }

  .rsn {
    text-align: right;
    padding: 10px;
    > span {
      color: #2d8cf0;
      font-size: 14px;
    }
  }
</style>
