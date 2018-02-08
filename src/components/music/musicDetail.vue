<template>
  <transition name="fade">
    <div class="detailW">
      <div class="music_imgW">
        <img :src="detailList.cover" alt="">
      </div>
      <p class="detailTitle">{{detailList.title}}</p>
      <p class="detailAlbum">{{detailList.album}}</p>
      <p class="user_name">{{story_author.user_name}}</p>
      <h4 class="story_title">{{detailList.story_title}}</h4>
      <p class="text_author">文/{{story_author.user_name}}</p>
      <div class="text-content" v-html='detailList.story'></div>
      <p class="text-editor">{{detailList.charge_edt}} {{detailList.editor_email}}</p>
      <p class="copyright">{{detailList.copyright}}</p>
      <div class="authorW">
        <p class="author">作者</p>
        <hr class="line">
        <dl class="">
          <dt><img v-lazy="story_author.web_url"></dt>
          <dd class="author_name">{{story_author.user_name}}</dd>
          <dd class="author_info">{{story_author.summary}}</dd>
        </dl>
      </div>
      <footercustom @gotoPrev='_gotoPrev' @gotoNext='_gotoNext' @goBack='_goBack'></footercustom>
    </div>
  </transition>
</template>

<script>
import footercustom from '@/base/footer/footer'

export default {
  data(){
    return{
      detailList:{},
      story_author:{}
    }
  },
  created(){
    setTimeout(()=>{
      this._getList(this.$route.query.id)
    })
  },
  methods:{
    _getList(id){
      this.loading=true
      this.$http.get('http://v3.wufazhuce.com:8000/api/music/detail/'+ id +'?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((res)=>{
        this.loading = false;
        if(res.status==200){
          this.detailList=res.body.data
          this.story_author=this.detailList.story_author
          console.log(this.story_author)
        }
      })
    },
    _gotoPrev(){
      this.$router.push({
        path:'musicDetail',
        query:{
          id:this.detailList.previous_id
        }
      })
      this._getList(this.$route.query.id);
    },
    _gotoNext(){
      this.$router.push({
        path:'musicDetail',
        query:{
          id:this.detailList.next_id
        }
      })
      this._getList(this.$route.query.id);
    },
    _goBack(){
      this.$router.push({
        path:'music'
      })

    }
  },
  components:{
    footercustom
  }
}
</script>

<style lang="stylus" scoped>
.detailW
  position:absolute
  top:44px
  left:0
  width:100%
  &.fade-enter-active, &.fade-leave-active
    transition: all 0.25s linear
    transform translate3d(0, 0, 0)
  &.fade-enter, &.fade-leave-active
    opacity: 0
    transform translate3d(100%, 0, 0)
  .music_imgW
    position:relative
    height:328px
    img
      width: 454px !important
      border-radius: 50%
      position: absolute
      left: -188px
      top: -168px
      border: 20px solid #fff
      box-shadow: 0 0 20px 5px rgba(230,230,230,0.7)
  .detailTitle,.detailAlbum,.user_name,.story_title,.text_author
    text-align:center
    line-height:20px
  .detailTitle
    margin-top:32px
  .story_title
    font-weight:bold
    font-size:28px
    margin:30px 20px 0 20px
    line-height:1.3
  .text_author
    margin:40px  0 30px 0
    text-align:center
  .text-content
    font-size:18px
    line-height:30px
    font-weight:300
    text-align:justify
    padding:0 20px
    .one-quote-warp
      display:none !important
  .text-editor,.copyright
    color: #808080
    font-style: oblique
    margin: 20px
    font-size: 12px
  .authorW
    margin-top:60px
    padding-bottom:84px
    .author
      font-size:15px
      padding:0 20px
    .line
      border:2px solid #000
      margin:15px 20px
      width:70px
    dl
      overflow:hidden
      padding:0 20px
      margin-top:-8px
    dt
      float:left
      width:45px
    dd
      padding-left:55px
    dd.author_name
      font-size:14px
      padding-top:5px
      span
        font-size:12px
        padding-left:10px
    dd.author_info
      padding-top:8px
      font-size:12px
      color:#808080
</style>
