import Vue from 'vue'
import Router from 'vue-router'
import ImgText from 'components/imgText/imgText'
import Reading from 'components/reading/reading'
import Music from 'components/music/music'
import Movie from 'components/movie/movie'
import ReadDetail from 'components/reading/readingDetail'
import musicDetail from 'components/music/musicDetail'
Vue.use(Router)

export default new Router({
    scrollBehavior (to, from, savedPosition) {
      console.log(savedPosition)
      if (savedPosition) {

        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    mode: "history",
    routes: [{
        path: '/',
        redirect: '/imgText'
    }, {
        path: '/imgText',
        name: 'imgText',
        component: ImgText,
        meta:{isNeedAuth:false,title:'一个图文'}
    }, {
        path: '/ready',
        name: 'ready',
        component: Reading,
        meta:{isNeedAuth:false,title:'一个阅读'}
    }, {
        path: '/music',
        name: 'music',
        component: Music,
        meta:{isNeedAuth:false,title:'一个音乐'}
    }, {
        path: '/movie',
        name: 'movie',
        component: Movie,
        meta:{isNeedAuth:false,title:'一个影视'}
    },{
      path:'/readDetail/',
      name:'readDetail',
      component:ReadDetail,
      meta:{isNeedAuth:false,title:'一个阅读'}
    },{
      path:'/musicDetail/',
      name:'musicDetail',
      component:musicDetail,
      meta:{isNeedAuth:false,title:'一个音乐'}
    }]
})
