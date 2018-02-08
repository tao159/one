<template>
  <transition name="fade">
    <div class="readDetail">
      <h3 class="detailTitle">{{detailList.hp_title}}</h3>
      <hr class="line">
      <p class="text-author">文/{{detailList.hp_author}}</p>
      <div class="textDetail" v-html="detailList.hp_content"></div>
      <p class="editor">{{detailList.hp_author_introduce}} {{detailList.editor_email}}</p>
      <p class="editor">{{detailList.copyright}}</p>
      <div class="authorDetail">
        <p>作者</p>
        <hr class="line">
        <dl class="" v-for="item in detailList.author_list">
          <dt><img v-lazy="item.web_url"></dt>
          <dd class="author_name">{{item.user_name}}<span>{{item.wb_name}}</span></dd>
          <dd class="author_info">{{item.summary}}</dd>
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
      detailList:[]
    }
  },
  created(){
    setTimeout(()=>{
      this._getList(this.$route.query.id);
    },200)
  },
  methods:{
    _getList(id){
      this.$http.get('http://v3.wufazhuce.com:8000/api/essay/' +id +'?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((res)=>{
        console.log(res.body.res)
        if(res.body.res==0){
          this.detailList=res.body.data;
          console.log(this.detailList);
        }
      })
    },
    _gotoPrev(){
      this.$router.push({
        path:'readDetail',
        query:{
          id:this.detailList.previous_id
        }
      })
      this._getList(this.$route.query.id);
    },
    _gotoNext(){
      this.$router.push({
        path:'readDetail',
        query:{
          id:this.detailList.next_id
        }
      })
      this._getList(this.$route.query.id);
    },
    _goBack(){
      this.$router.push({
        path:'ready'
      })

    }
  },
  components:{
    footercustom
  }
}
</script>

<style lang="stylus" scoped>

.readDetail
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
    img
      display:block
      width:100%
    .detailTitle
        font-size:28px
        font-weight:bold
        line-height:1.3
        margin:50px 20px 0 20px
    .line
        border:2px solid #000
        margin:15px 20px
        width:70px
    .text-author
        margin:14px 0 20px 0
        font-size:13px
        padding:0 20px
        line-height:32px
    .textDetail
        padding:0 20px
        text-align:justify
        line-height:30px
        font-weight:300
        .one-img-container
          border:1px solid red
    .editor
        font-size:12px
        font-style:oblique
        margin:20px
        color:#808080
    .authorDetail
      padding-bottom:84px
      p
        font-size:15px
        margin:60px 20px 0 20px
        line-height:32px
      img
        width:45px
        height:45px
        border-radius:50%
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
