<template>
  <div class="menuWrapper sideBar togglehide" ref='barPart'>
    <div class="test" @click='toggleMenu' ref='cover'></div>
    <p>{{message}}</p>
      <div class="link">
          <p @click='toggleMenu'><router-link to="/imgText">图文</router-link></p>
          <p @click='toggleMenu'><router-link to="/ready">阅读</router-link></p>
          <p @click='toggleMenu'><router-link to="/music">音乐</router-link></p>
          <p @click='toggleMenu'><router-link to="/movie">影视</router-link></p>
      </div>

  </div>
</template>

<script>
import Bus from '@/common/js/bus.js'
export default {
  props:{
    myVisible:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      message:''
    }
  },
  watch:{
    myVisible () {
      this.toggleShow()
    }
  },
  methods:{
    toggleMenu(){
      this.$emit('update:myVisible',!this.myVisible)
    },
    toggleShow () {
      let target = this.$refs.barPart
      let cover=this.$refs.cover
      let test = target.classList.contains('togglehide')
      if (!test) {
        target.classList.add('togglehide')
        this.$refs.barPart.style.left = -this.$refs.barPart.offsetWidth -20+'px'
        cover.classList.remove('menuCover')
      } else {
        target.removeAttribute('style')
        target.classList.remove('togglehide')
        this.$refs.barPart.style.left = 0 + 'px'
        cover.classList.add('menuCover')
      }
    }
  }
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
        transition: all ease .4s
        -webkit-transition:all ease .4s
        .test
          position:fixed
          top:0
          left:188px
          bottom:0
          right:0
          background:rgba(0,0,0,0)
          transition: all ease .4s .4s
          -webkit-transition:all ease .4s .4s
          display:none
        .menuCover
          display:block

        .link
            a
                display:block
                width:100%
                text-align:center
                padding:50px 0 0 0
                color:rgba(0,0,0,0.6)

</style>
