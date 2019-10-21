<template>
  <div class="hello">
      <div class="heard">
        <span @click="close">关闭</span>
        <input type="text"  @change="changeInput()" v-model="val">
      </div>
    <ul class="find_box">
      <li class="find">
        <a href="#"><string class="col0">电影</string><span>影院热映</span></a>
        <a href="#"><string class="col1">同城</string><span>正在热播</span></a>
        <a href="#"><string class="col2">阅读</string><span>畅销排行</span></a>
        <a href="#"><string class="col3">东西</string><span>周末活动</span></a>
      </li>
      <li class="find">
        <a href="#"><string class="col4">电视</string><span>志趣相投</span></a>
        <a href="#"><string class="col5">小组</string><span>新碟榜</span></a>
        <a href="#"><string class="col6">游戏</string><span>电子书</span></a>
        <a href="#"><string class="col7">FM</string><span>虚拟世界</span></a>
      </li>
      <li class="find">
        <a href="#"><string class="col8">图书</string><span>玩手机</span></a>
        <a href="#"><string class="col9">应用</string><span>心爱之物</span></a>
        <a href="#"><string class="col10">音乐</string><span>红心歌单</span></a>
        <a href="#"><string class="col11">市集</string><span>购买原创</span></a>
      </li>
    </ul>
    <div class="login">
      <a href="#">注册账号</a>
      <a href="#">登录豆瓣</a>
    </div>
    <div class="login">
      <a href="#">使用桌面版</a>
      <a href="#">使用豆瓣App</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      active_search:true,
      val:"",
    }
  },
  methods:{
    close(){
      this.$router.push('/index')
    }
  },
  watch:{
    //每次变化，input获取焦点
//    active_search:function(a,b){
//      if(b == true){
//        this.$refs.myInput.focus();
//      }
//    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/search.css";
.col0{
  color: rgb(35, 132, 232)
}
.col1{
  color: rgb(122, 106, 219)
}
.col2{
  color: rgb(159, 120, 96)
}
.col3{
  color: rgb(230, 70, 126)
}
.col4{
  color: rgb(42, 184, 204)
}
.col5{
  color: rgb(244, 143, 46)
}
.col6{
  color: rgb(225, 100, 77)
}
.col7{
  color: rgb(35, 32, 232)
}
.col8{
  color: rgb(125, 132, 232)
}
.col9{
  color: rgb(35, 132, 42)
}
.col10{
  color: rgb(135, 12, 232)
}
.col11{
  color: rgb(225, 13, 22)
}
.col12{
  color: rgb(35, 132, 232)
}
</style>
