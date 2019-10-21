<template>
  <div class="hello">
      <div class="heard">
        <img src="../assets/images/dou_03.gif" alt="">
        <div class="heard_txt">
          <p class="heard_txt_one">豆瓣App </p>
          <p class="heard_txt_two">记录你的书影音生活</p>
        </div>
        <p class="heard_txt_three">打开App</p>
      </div>
    <div class="title">
      <p class="title_one">同时入选IMDB250和豆瓣电影250的电影</p>
      <p class="title_two">东风快车</p>
      <p class="title_three">
       <span class="title_three_top"> 同时入选IMDB250和豆瓣电影250的电影 <br>018年11
         月29日更新 <br>...</span><span class="title_three_bottom">(展开)</span>
      </p>
    </div>
    <div class="frame">
      <div class="frame_left"><span class="frame_left_bac"></span> <span>221663</span></div>
      <div class="frame_right">...</div>
    </div>
    <film></film>
  </div>
</template>

<script>
  import film from './film.vue'
  export default {
    data () {
      return {
        msg: ''
      }
    },

    components:{
        film
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/list.css";
</style>
