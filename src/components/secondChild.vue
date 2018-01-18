<template>
  <div class="secondChild">
    <h2>second组件</h2>
    <p>从firstChild组件传递过来的数据:{{msg}}</p>
  </div>
</template>

<script>
import bus from '@/assets/eventBus'
export default {
  data(){
    return{
      msg:'默认值'
    }
  },
  mounted(){
    var _this=this;
    bus.$on('userDefinedEvent',function(msg){
      _this.msg=msg
      console.log(msg)
    })
  }
}
</script>

<style lang="css">
</style>
