import VueRouter from 'vue-router'
//导入对应的路由组件
import Home from './components/tabbar/home.vue'
import Member from './components/tabbar/member.vue'
import Shopcar from './components/tabbar/shopcar.vue'
import Search from './components/tabbar/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import GoodsBuy from './components/goods/goodsBuy.vue'
import GoodsDetail from './components/goods/goodsDetail.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
//创建路由对象
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/shopcar',component:Shopcar},
        {path:'/search',component:Search},
        {path:'/home/newsList',component:NewsList},
        {path:'/home/newsInfo/:id',component:NewsInfo},
        {path:'/home/photoList',component:PhotoList},
        {path:"/home/goodsBuy",component:GoodsBuy},
        {path:"/home/goodsBuy/goodsDetail/:id",component:GoodsDetail},
        {path:'/home/photoInfo/:id',component:PhotoInfo}
    ],
    linkActiveClass:"mui-active"
})
//把路由对象暴露出去
export default router;