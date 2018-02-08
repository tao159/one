<template>
  <div class="header">
      <a href="javascript:;" class="left-menu-btn">
          <slot name='iconW'></slot>
      </a>
      {{this.$route.meta.title}}
  </div>
</template>

<script type="stext/ecmascript-6">
  export default {
    methods:{

    },
    mounted(){
      console.log(this.$route.meta.title)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .header
       height:44px
       width:100%
       position:fixed
       left:0
       top:0
       text-align:center
       line-height:44px
       font-size:16px
       font-family:"PingFangSC-Light",sans-serif
       color:#333
       z-index:9
       background:#fff
       a
           position:absolute;
        i
            font-size:22px
            padding:10px
            color:#333
        .left-menu-btn
            left:0px
        .search-wrapper
            right:0px
</style>
