//1.导入项目框架
import Vue from 'Vue'
import App from './app.vue'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI)
//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//导入图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入公共样式
import './app.css'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
//导入axios
import axios from 'axios'

import "./less/index.css"
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$axios = axios;
import moment from 'moment'
Vue.filter('dateFormat',function (dataStr,parten="YYYY-MM-DD HH:MM:SS") {
    return moment(dataStr).format(parten)
})
new Vue({
    el:"#app",
    render:c => c(App),
    router
})