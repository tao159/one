<template lang="html">
  <div class="">
    <p>{{msg}}</p>
    <p>{{$store.state.count}}</p>
    <button @click='$store.commit("add")'>+</button>
    <button @click='$store.commit("reduce")'>-</button>
  </div>
</template>

<script>
import store from '@/store/store.js'
export default {
  data(){
    return{
      msg:'hello vuex'
    }
  },
  store
}
</script>

<style>
</style>
