<!--免费榜，没有用的即将上映榜-->
<template>
  <div class="hello">
        <div class="nav">
          <div class="left">新片速递</div>
          <div class="right">更多</div>
        </div>
        <ul>
          <li v-for="(item,index) in arr" :key="index" v-if="index<8" @click="hot(item.id)">
            <div><img :src="item.images.large" alt=""></div>
            <p class="text">{{item.title}}</p>
            <p>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>{{item.rating.average}}</span>
            </p>
          </li>

        </ul>

  </div>
</template>

<script>

//  import qs from 'qs'
//  import Swiper from 'swiper';
  export default {
      data(){
         return{
            arr:''
         }
      },
      mounted(){

              this.$http({
          url:'https://douban.uieee.com/v2/movie/coming_soon',
        }).then((res)=>{
//          console.log(res);
          this.arr = res.data.subjects
        })
          }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../assets/css/index.css");
/*@import url("../assets/css/swiper.min.css");*/
ul {
  width: 3.48rem;
  height: 2.1rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space:nowrap;  /* ul中的内容不换行 */
  /*padding: 0px;*/
  padding: .08rem 0 .08rem .18rem;
}
ul li {
  display: inline-block;
  width: 1.07rem;
  height: 1.98rem;
  /*background: chartreuse;*/
  margin-right: .06rem;
}
ul li img{
  width: 1.07rem;
  height: 1.5rem;
}
ul li .text{
  /*font-size: .14rem;*/
  /*margin-top: .07rem;*/
  width: 1rem;
  text-align: center;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
