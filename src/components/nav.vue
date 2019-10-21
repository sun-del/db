<template>
  <div class="hello">
    <div class="heard">
      <img src="../assets/images/logo_03.gif" alt="" class="one">
      <img src="../assets/images/find_03.gif" alt="" class="two" @click="find">
      <ul>
        <!--<li class="heard_text" v-for="(item,index) in arr" :key="index">{{item}}</li>-->
        <li class="heard_text"><router-link to="group" class="s1">小组</router-link></li>
        <li class="heard_text"><router-link to="broadcast" class="s2">广播</router-link></li>
        <li class="heard_text"><router-link to="book" class="s3">图书</router-link></li>
        <li class="heard_text"><router-link to="index" class="s4">电影</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
//  import hot from './index.vue'
  export default {
    data () {
      return {
//        arr: ['电影','图书','广播','小组']
      }
    },
    methods:{
        find(){
          this.$router.push({
            path:'/search',
          })
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/nav.css";

.s1{
  color: rgb(42, 184, 204);
}
.s2{
  color: rgb(228, 168, 19);
}
.s3{
  color: rgb(159, 120, 96);
}
.s4{
  color:rgb(35, 132, 232);
}
</style>
