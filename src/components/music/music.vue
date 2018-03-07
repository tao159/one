<template>
  <div class="musicW">
    <div class="listW" v-for='item in mList'>
      <h4 class='listTag'>- 音乐 -</h4>
      <p class='listTitle'>{{item.title}}</p>
      <p class='author'>文/{{item.author.user_name}}</p>
      <div class="music_p">
        <div class="music_cover"></div>
        <div class="music-cover-img" @click="_goDetail(item.item_id)">
          <img v-lazy="item.img_url" alt="">
        </div>
      </div>
      <p class="text-music-author">{{item.music_name}} · {{item.audio_author}} | {{item.audio_album}}</p>
      <p class="text-content-short">{{item.forward}}</p>
      <p class="text-time">{{item.post_date.substr(0,10)}}</p>
    </div>
  </div>
</template>

<script>
const ERR_NUM=200
export default {
  data(){
    return{
      mList:[]
    }
  },
  created(){
    setTimeout(()=>{
      this._getMusicList()
    },200)
  },
  methods:{
    _getMusicList(){
      this.$http.get('http://v3.wufazhuce.com:8000/api/channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios').then((res)=>{
        this.mList=res.data.data
        console.log(this.mList.item_id)
      })
    },
    _goDetail(id){
      this.$router.push({
        path:'musicDetail',
        query:{
          id:id
        }
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.musicW
  margin-top:44px

  .listW
    border-bottom:10px solid #f6f6f6
    &:last-child
       border:none
    .listTag
      text-align:center
      color:rgba(0,0,0,0.6)
      font-size:13px
      padding:20px 0 14.4px 0
   .listTitle
      padding:0 20px
      font-size:21px
      line-height:29px
   .author
      font-size:14.5px
      color:rgba(0,0,0,0.6)
      padding:5px 20px 0;
      line-height:28.8px
   .music_p
      height:232.3px
      width:100%
      background:url('../../common/img/music-list-right.png') no-repeat center right
      background-size:auto 100%
      margin:9.6px 0
      position:relative
      .music_cover
        width:287px;
        height:100%;
        position:absolute
        left:0
        top:0
        box-shadow:0 0 10px 5px rgba(233,233,233,0.5)
        border-radius:0 143.5px 143.5px 0
      .music-cover-img
        width:216.95px
        height:216.95px
        position:absolute
        left:62px
        top:6.5px
        img
          display:block
          width:100%
          height:100%
          border-radius:50%
          border:1px solid rgba(51,51,51,0.7)
    .text-music-author
        font-size:12px
        color:#808080
        line-height:20px
        margin:0 20px
    .text-content-short
        font-size:14px
        margin:10px 20px
        color:rgba(0, 0, 0, 0.6)
    .text-time
        padding:20px
        font-size:0.4rem
        color:#808080
        border-bottom:1px solid rgba(230, 230, 230, 0.5)
</style>
