<template>
  <div class="hello">
        <div class="nav">
          <div class="left">电影热映</div>
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
              <!--<span v-if="item.rating.average===0">暂无评分</span>-->
              <span>{{item.rating.average}}</span>
            </p>
          </li>

        </ul>
    <mianfei></mianfei>
        <free></free>

    <find></find>

    <classify></classify>
  </div>
</template>

<script>
import free from './free.vue'
import classify from './classify.vue'
import find from './find.vue'
import mianfei from './mianfei.vue'
//  import qs from 'qs'
//  import Swiper from 'swiper';
  export default {
      data(){
         return{
            arr:''
         }
      },
      methods:{
          hot(id){
            this.$router.push({
              path:'/details',
              query:{
                id
              }
            })
          }
      },
      mounted(){
          this.$http({
              url:'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10',
                }).then((res)=>{
//                  console.log(res);
                  this.arr = res.data.subjects
                })
          },
      components:{
          free,
        classify,
        find,
        mianfei
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
