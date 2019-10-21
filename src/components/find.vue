<template>
  <div class="hello">
        <div class="nav">
          <div class="left">发现好电影</div>
          <div class="right">更多</div>
        </div>
        <ul>
          <li @click="two_five"  class="color1">
            同时入选IMDB250和豆瓣电影250的电影
          </li>
          <li class="color2">
            带你进入不正常的世界
          </li>
          <li class="color3">
            用电【影】来祭奠逝去的岁月
          </li>
          <li class="color1">
            女孩们的故事【电影】
          </li>
          <br>
          <li class="color2">
            科幻是未来的钥匙——科幻启示录【科幻题材】
          </li>
          <li class="color3">
            美国生活面面观
          </li>
          <li class="color1">
            2015终极期待
          </li>
          <li class="color2">
            经典韩国电影——收集100部
          </li>
        </ul>
  </div>
</template>

<script>
import free from './free.vue'
import classify from './classify.vue'
//  import qs from 'qs'
//  import Swiper from 'swiper';
  export default {
      data(){
         return{

         }
      },
      methods:{
        two_five(){
            this.$router.push('/list')
        }
      },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../assets/css/index.css");
  .nav{
    height: .3rem;
  }
  ul {
    /*width: 494.39px;*/
    height: 1.37rem;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space:nowrap;  /* ul中的内容不换行 */
    /*padding: .3rem 0;*/
  }
  ul li {
    display: inline-block;
    margin: 0 0 .08rem 0.16rem;
    border: .01rem solid #ffac2d;
    border-radius: .04rem;
    vertical-align: middle;
    height: .5rem;
    font-size: .16rem;
    padding: 0 .24rem;
    line-height: .5rem;
  }
  .color1{
    color: rgb(35, 132, 232);
  }
  .color2{
    color: rgb(255, 64, 85);
  }
  .color3{
    color: rgb(59, 169, 77);
  }
</style>
