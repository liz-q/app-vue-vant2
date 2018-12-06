<template>
  <div class="ch">
    <div class="table">
      <div class="tableCell">
        <div class="text1"> MERRY CHRISTMAS</div>
        <div class="text2">
          圣诞节到了，李征祝愿您身体像圣诞老人一样健康，事业像雪橇车一样没有阻力，钞票像圣诞老人包袱里的礼物一样，永远都用不完。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import $ from 'jquery'
  export default {
    name: "Christmas",
    mounted(){
      $('.text1').funnyText({
        speed: 700,
        activeColor: '#fff',
        color: 'black',
        fontSize: '10em'
      });

      $('.text2').funnyText({
        speed: 700,
        fontSize: '7em',
        color: '#191919',
        activeColor: '#fff',
        borderColor: 'black'
      });
    }
  }
</script>

<style scoped lang="less">
  .ch{
    height: 100vh;
    background-color: #00AEEF;
    padding: 20px;
    .tableCell{
      .text1{
        padding-bottom: 1em;
      }
    }
  }
</style>
