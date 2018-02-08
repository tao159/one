<template>
  <div class="footerW">
    <button class="left" @click="goPrev">上一篇</button>
    <button class="back" @click='goBack'><i class="icon iconfont icon-fanhui"></i></button>
    <button class="right" @click="goNext">下一篇</button>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    goPrev(){
      this.$emit('gotoPrev');
    },
    goNext(){
      this.$emit('gotoNext');
    },
    goBack(){
      this.$emit('goBack')
    }
  }
}
</script>

<style lang="stylus" scoped>
.footerW
  height:48px
  width:100%
  position:fixed
  bottom:0
  left:0
  box-shadow:0px 2px 4px rgba(0, 0, 0, 0.5)
  background:rgba(255,255,255,0.95)
  button
    font-size:16px
    color:#333
    font-weight:normal
    height:100%
    line-height:48px
    padding:0
    font-family: "PingFangSC-Light", sans-serif;
  .left
    position:absolute
    left:20px
    bottom:0
    width:70px
    text-align:left
  .right
    position:absolute
    right:20px
    bottom:0
    width:70px
    text-align:right
  .back
    margin:0 auto
    display:block
</style>
