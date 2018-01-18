<template>
  <div id="app">
    <Mheader>
      <i class="icon iconfont icon-category" slot='iconW' @click='toogleMenu'></i>
    </Mheader>
   <LeftMenu :my-visible.sync = "visible"></LeftMenu>
   <!-- <testVuex></testVuex> -->
   <!-- <testbind></testbind>-->
   <!-- <firstChild></firstChild>
   <secondChild></secondChild> -->
   <router-view class="content"></router-view>
  </div>
</template>

<script>
import Mheader from '@/components/header/header'
import LeftMenu from '@/components/leftMenu/leftMenu'
import testVuex from '@/components/testVuex'
import testbind from '@/components/testbind'
import firstChild from '@/components/firstChild'
import secondChild from '@/components/secondChild'
export default {
  data(){
    return{
      visible:false
    }
  },
  name: 'app',
  components:{
    Mheader,
    LeftMenu,
    testVuex,
    testbind,
    firstChild,
    secondChild
  },
  methods:{
    toogleMenu(){
      this.visible=true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height:100%

</style>
