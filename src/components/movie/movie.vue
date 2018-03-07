<template>
  <div class="movieW">
    <div class="movieList" v-for="item in mList">
      <h4 class='listTag'>- 影视 -</h4>
      <p class='listTitle'>{{item.title}}</p>
      <p class='author'>文/{{item.author.user_name}}</p>
      <div class="movieBg">
        <img v-lazy="item.img_url" alt="">
      </div>
      <p class="text-content-short">{{item.forward}}</p>
      <p class="text-movie-subtitle">——关于《{{item.subtitle}}》</p>
      <p class="text-time">{{item.post_date.substr(0,10)}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mList:[]
    }
  },
  created(){
    this._getMovieList()
  },
  methods:{
    _getMovieList(){
      this.$http.get('http://v3.wufazhuce.com:8000/api/channel/movie/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=ios')
      .then((res)=>{
        this.mList=res.body.data
        console.log(this.mList)
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
.movieW
  margin-top:44px

  .movieList
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
    .movieBg
      height:278px
      padding:0 20px
      background:url('../../common/img/movie-list-background.png') no-repeat center center
      background-size:auto 100%
      img
        width:100%
        height:200px
        margin-top:38px
        border-radius: 4px
    .text-content-short
        font-size:14px
        margin:15px 20px
        color:rgba(0, 0, 0, 0.6)
        line-height:25px
    .text-movie-subtitle
        font-size: 0.875em
        line-height: 1.857em
        color: rgba(0, 0, 0, 0.6)
        text-align: right
        padding-right:20px
    .text-time
        padding:20px
        font-size:0.4rem
        color:#808080
        border-bottom:1px solid rgba(230, 230, 230, 0.5)
</style>
