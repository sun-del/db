<template>
  <div class="hello">
    <ul class="film">
      <li class="film_list" v-for="(item,index) in msg" :key="index">
        <div class="film_list_box">
          <img :src="item.images.large" alt="">
          <div class="film_right">
            <p>{{item.title}}</p>
            <div class="brief_left">
              <span class="brief_one"></span><span class="brief_one"></span>
              <span class="brief_one"></span><span class="brief_one"></span>
              <span class="brief_two"></span><span class="brief_txt">{{item.rating.average}}</span>
            </div>
            <div class="brief_bottom">彼得·塞勒斯/乔治·C·斯科特/斯特林·海登/美国/喜剧/1964-01-29(美国)</div>
          </div>
        </div>
        <div class="film_hua">评语：<span class="film_bottom" v-for="(i,index) in item.genres">{{i}} </span></div>
      </li>
    </ul>
    <div class="film_bean">
      <p>查看更多豆列</p>
      <ul>
        <li>
          <a href="#">电影</a>
        </li>
        <li>
          <a href="#">纪录片</a>
        </li>
        <li>
          <a href="#">奥斯卡</a>
        </li>
        <li>
          <a href="#">影人</a>
        </li>
        <li>
          <a href="#">电影截图</a>
        </li>
      </ul>
    </div>
    <div class="number">
      <span class="number_num"> ·&nbsp;1&nbsp;·</span>
      <div class="but_prev">上一页</div>
      <div class="but_next">下一页</div>
    </div>
    <div class="foot">
      <div class="foot_top">
        <img src="../assets/images/dou_03.gif" alt="">
        <span>豆瓣</span>
      </div>
      <p>去 App Store 免费下载 iOS 客户端</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    },
    mounted(){
      this.$http({
        url:'https://douban.uieee.com/v2/movie/top250?start=0&count=10'
      }).then((res)=>{
        console.log(res.data.subjects);
        this.msg = res.data.subjects
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/film.css";
</style>
