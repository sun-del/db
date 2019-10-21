<!--详情-->
<template>
  <div class="hello">
      <div class="imm">
        <img src="../assets/images/promotion_bg.b7abee9.jpg" alt="">
        <div class="feel">
          <span class="feel_txt">聊聊你的观影感受</span>
          <span class="feel_green">极速下载</span>
          <span class="feel_open">打开</span>
        </div>
      </div>
    <div class="brief">
        <h2>我和我的祖国</h2>
        <div class="brief_box">
          <div class="brief_left">
            <span class="brief_one"></span><span class="brief_one"></span>
            <span class="brief_one"></span><span class="brief_one"></span>
            <span class="brief_two"></span><span class="brief_txt">{{fen}}</span>
            <span>{{human}}人评价</span>
            <!--<div class="brief_three">-->
              <p  class="brief_three"><span>{{data.year}}</span> / <span v-for="im in data.genres">{{im}}</span> / <span v-for="item in data.directors">{{item.name}} / </span><span>{{countries}}</span></p>
            <!--</div>-->
            <a href="#">用App查看影人资料</a>
          </div>
          <div class="brief_right">
            <img :src="img" alt="">
          </div>
        </div>
      <div class="like">
        <span class="like_left">想看</span>
        <span>看过</span>
      </div>
      <div class="text_text">
        <h2>{{title}}的简介</h2>
        <p>{{data.summary}} ……<span @click="unfold" v-if="bool">(展开)</span>
        </p>
      </div>
      <div class="classify">
          <p>查看更多相关分类</p>
        <a href="#" v-for="item in data.genres">{{item}}</a>
      </div>
      <div class="pic">
          <p>{{title}}的图片</p>
        <ul>
          <li v-for="item in data.photos">
            <img :src="item.image" alt="">
          </li>
        </ul>
      </div>
      <div class="comment_txt">
          <p>{{title}}的短评</p>
      </div>
    </div>
    <!--评论-->
    <div class="comment" v-for="(item,index) in data.popular_comments" :key="index">
        <div class="comment_heard">
          <img :src="item.author.avatar" alt="">
          <div class="comment_heard_right">
            <h2>{{item.author.name}}</h2>
            <p>{{item.created_at}}</p>
          </div>

        </div>
        <p class="comment_content">{{item.content}}</p>
        <div class="comment_foot">
          <span class="comment_foot_left">{{item.useful_count}}</span>
          <span class="comment_foot_right">...</span>
        </div>
    </div>
    <p class="more">显示更多评论</p>
    <img src="http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658" alt="" class="ad">

    <find></find>
    <foot></foot>
  </div>

</template>

<script>
  import find from './find.vue'
  import foot from './foot.vue'
export default {

  data () {
    return {
        bool:true,
        arr:'',
        id:'',
        title:'',
        fen:'',
        img:'',
        human:'',
        data:{},
        countries:'',
    }
  },
  methods:{
    unfold(){
        this.bool = false
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.$http({
      url:'https://douban.uieee.com/v2/movie/subject/'+this.id
    }).then((res) => {
      console.log(res.data);
      this.data = res.data;
      this.fen = res.data.rating.average;
      this.img = res.data.images.large;
      this.title = res.data.title;
      this.human = res.data.comments_count;
      this.countries = res.data.countries[0];
    })
  },
  components:{
      find,
    foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/detail.css";
ul {
  /*width: 3.75rem;*/
  height: 1.21rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space:nowrap;  /* ul中的内容不换行 */
  padding: 0px;
  margin-bottom: .3rem;
}
ul li {
  display: inline-block;
  width: 1.8rem;
  height: 1.2rem;
  /*background: chartreuse;*/
  margin-right: -.14rem;
}
ul li img{
  width: 1.62rem;
  height: 1.08rem;

}
</style>
