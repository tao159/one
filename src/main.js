// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import VueResource from 'vue-resource'
import LazyLoad from 'vue-lazyload'
import store from '@/store/store'
import "@/common/stylus/iconfont.styl"
Vue.use(VueResource)
Vue.use(LazyLoad, {
    loading: require("common/img/lazyload.jpg")
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
