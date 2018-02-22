<template>
  <div id="app">
    <Mheader>
      <i class="icon iconfont icon-xitongcaidan" slot='iconW' @click='toogleMenu'></i>
    </Mheader>
   <LeftMenu :my-visible.sync = "visible"></LeftMenu>
   <router-view></router-view>
  </div>
</template>

<script>
import Mheader from '@/components/header/header'
import LeftMenu from '@/components/leftMenu/leftMenu'
export default {
  data(){
    return{
      visible:false
    }
  },
  name: 'app',
  components:{
    Mheader,
    LeftMenu
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
