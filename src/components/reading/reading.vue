<template>
  <div class="reading">
    <ul class="readContent">
      <li v-for="item in readList" class="item" @click='_go(item.item_id)'>
        <p v-if="item.tag_list[0]" class="type">- {{item.tag_list[0].title}} -</p>
        <p v-else="item.tag_list[0]" class="type">- 阅读 -</p>
        <p class="title">{{item.title}}</p>
        <p class="author">文 / {{item.author.user_name}}</p>
        <img v-lazy="item.img_url" alt="" class="itemImg" />
        <p class="forward">{{item.forward}}</p>
        <p class="time">{{item.post_date.split(' ')[0]}}</p>
      </li>
    </ul>
    <Loading v-show='!readList.length'></Loading>
  </div>
</template>

<script>
let ERR_OK=0
import readingDetail from './readingDetail'
import Loading from 'base/loading/loading'
export default {
  data(){
    return {
      readList:[]
    }
  },
  created(){
   setTimeout(()=>{
     this._getReadList()
   },20)
  },
  methods:{
    _getReadList:function(){

      this.$http.get('http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((res)=>{
        var body=res.data
        if(body.res===ERR_OK){
          this.readList=body.data
          console.log(this.readList)
        }
      })
    },
    _go(id){
      this.$router.push({
        path:'readDetail',
        query:{
          id:id
        }
      });
    }
  },
  components:{
    Loading,
    readingDetail
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/base'
  .reading
    padding-top:44px

    .readContent
      background:#f6f6f6
      font-family:"PingFangSC-Light",sans-serif
      .item
        padding:0 22px
        margin-top:10px
        background:#fff
        border-1px(rgba(230,230,230,1))
        .type
          color:rgba(0,0,0,0.6)
          text-align:center
          padding:15px 0 25px 0
        .title
          font-size:20px
        .author
          color:rgba(0,0,0,0.6)
          font-size:16px
          padding:15px 0
        .itemImg
          display:block
          width:100%
        .forward
          color:rgba(0,0,0,0.6)
          font-size:15px
          line-height:28px
          padding-top:10px
        .time
          color:#808080
          font-size:12px
          padding:20px 0 30px 0
</style>
