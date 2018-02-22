<template lang="html">
  <div class="firstChild">
    <h2>firstChild组件</h2>
    <button type="button" name="button" @click="sendMessage">向组件传值</button>
  </div>
</template>

<script>
import bus from '@/assets/eventBus.js'
export default {
  methods:{
    test(){
      alert("ssssss")
    },
    sendMessage(){
      bus.$emit('userDefinedEvent','来自兄弟组件')
    }
  }
}
</script>

<style>
</style>
