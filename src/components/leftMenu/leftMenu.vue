<template>
  <div class="menuWrapper">
      <div class="link">
          <router-link to="/imgText">图文</router-link>
          <router-link to="/reading">阅读</router-link>
          <router-link to="/about">关于</router-link>
      </div>
      
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
    #app
        height:100%
    .menuWrapper
        width:188px
        height:100%
        box-shadow:5px 0 5px rgba(0,0,0,.15)
        position:fixed
        left:-288px
        top:0
        z-index:10
        background:#fff
        .link
            a
                display:block
                width:100%
                text-align:center
                padding:50px 0 0 0
                color:rgba(0,0,0,0.6)

</style>

