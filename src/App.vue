<template>
  <div id="app">
    <Mheader ref="test"></Mheader>
   <LeftMenu></LeftMenu>
   <router-view class="content" @click="menuToggle"></router-view>
  </div>
</template>

<script>
import Mheader from '@/components/header/header'
import LeftMenu from '@/components/leftMenu/leftMenu'
export default {
  name: 'app',
  components:{
    Mheader,
    LeftMenu
  },
  methods:{
    menuToggle:function(){
      alert("test")
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height:100%
    
</style>
