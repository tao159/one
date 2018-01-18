<template>
  <div class="imgTextWrapper">

    <!-- <scroll class="scrollContent" :data="imgText" ref="scroll" :refresh="refresh"> -->
      <ul class="imgTextDetail">
        <li v-for="item in imgText" class="imgTextItem border-1px">
          <p class="date">{{item.hp_makettime.split(' ')[0]}}</p>
          <p class="issue-no">{{item.hp_title}}</p>
          <router-link to="" class="imgWrapper">
            <img v-lazy="item.hp_img_url" alt="">
          </router-link>
          <p class="picture-author">{{item.hp_author}} | {{item.image_authors}}</p>
          <p class="text-detail">{{item.hp_content}}</p>
          <p class="author">{{item.text_authors}}</p>
          <span>{{message}}</span>
        </li>
      </ul>
      <div class="loadingContent">
        <loading v-show="!imgText.length"></loading>
      </div>
    <!-- </scroll> -->
  </div>
</template>

<script>
  // import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  const ERR_OK=0
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  export default {
    props:{
      message:{
        type:String

      }
    },
    data(){
      return{
        imgText:[]
      }
    },
    created(){
      setTimeout(()=>{
        this._getImgTextList()
      },20)
    },
    components:{
      // Scroll,
      Loading
    },
    methods:{
      _getImgTextList:function(){
        this.$http.get('http://v3.wufazhuce.com:8000/api/hp/bymonth/' + year + '-' + month + '-' + day + '%2000:00:00?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((res)=>{
          var res=res.body;
          if(res.res===ERR_OK){
            this.imgText=res.data;
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/base'
    .imgTextDetail
      padding-top:44px
      height:auto
      background:#f6f6f6

      .imgTextItem
        margin-bottom:10px
        background:#fff
        padding-bottom:30px
        border-1px(rgba(230,230,230,1))
        &:last-child
          border:none !important
          margin-bottom:0
        p
        text-align:center
      .date
        font-family:'Courier New'
        color:rgba(0,0,0,0.5)
        font-size:20px
        line-height:22px
        padding-top:16px
        letter-spacing:2px
      .issue-no
        font-size:10px
        color:#808080
        line-height:14px
        margin-top:4px
      .imgWrapper
        display:block
        img
          display:block
          width:100%
          margin:15px 0
      .picture-author
        font-size:10px
        line-height:14px
        color:#808080
      .text-detail
        font-size:14px
        color:rgba(0,0,0,0.8)
        line-height:26px
        margin:20px 20px 18px 20px
        text-align:left
        font-weight:300
      .author
        color:#808080
        line-height:14px
        font-size:10px
        font-weight:300
    .loadingContent
      width:100%
      display:flex

</style>
