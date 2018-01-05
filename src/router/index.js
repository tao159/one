import Vue from 'vue'
import Router from 'vue-router'
import ImgText from 'components/imgText/imgText'
import Reading from 'components/reading/reading'
import About from 'components/about/about'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        redirect: '/imgText'
    }, {
        path: '/imgText',
        name: 'imgText',
        component: ImgText
    }, {
        path: '/ready',
        name: 'ready',
        component: Reading
    }, {
        path: '/about',
        name: 'about',
        component: About
    }]
})