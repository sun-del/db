<template>
  <div class="hello">
    <div class="foot">
      <div class="foot_logo">
        <img src="../assets/images/dou_03.gif" alt="">
        <div class="foot_txt">
          <p class="one">豆瓣</p>
          <p class="two">我们的精神角落</p>
        </div>
      </div>
      <p class="three">去 App Store 免费下载 iOS 客户端</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .foot{
    margin: .5rem 0 .3rem 0;
    padding-bottom: .2rem;
  }
  .foot_logo{
    width: 3.75rem;
    height: .6rem;
    margin-left: 30%;
  }
  .foot_txt{
    display: inline-block;
    vertical-align:middle;

    /*margin-left: ;*/
  }
  .foot img{
    vertical-align: middle;
  }
  .foot .one{
    font-size: .26rem;
  }
  .foot .two{
    font-size: .12rem;
  }
  .foot .three{
    text-align: center;
    font-size: .14rem;
    color: #01ff70;
  }
</style>
