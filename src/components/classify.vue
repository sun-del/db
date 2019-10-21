<template>
  <div class="hello">
    <div class="nav">
      <div class="left">分类浏览</div>
    </div>
    <ul class="classify">
        <li class="classify_list" v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
    <foot></foot>
  </div>
</template>

<script>
  import foot from './foot.vue'
export default {

  data () {
    return {
      arr:['经典','冷门佳片','豆瓣高分','动作','喜剧','爱情','悬疑',
        '恐怖','科幻','治愈','文艺','成长','动画','话语','欧美','韩国','日本',]
    }
  },
  components:{
      foot,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../assets/css/index.css");
.nav{
  height: .3rem;
  margin: .04rem 0;
}
  .classify{
    width: 3.75rem;
    padding-left: .18rem;
    height: 3.78rem;
  }
  .classify_list{
    float: left;
    width: 1.5rem;
    height: .32rem;
    padding-right: .18rem;
    border-top: .1rem solid #eee;
    border-right: .1rem solid #eee;
    color: #01ff70;
    line-height: .42rem;
  }

</style>
