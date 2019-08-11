<template>
    <div class="app_container">
        <!--header-->
        <mt-header fixed title="vue项目"></mt-header>


        <!--router-view-->
        <transition>
            <router-view></router-view>
        </transition>

        <!--tabbar-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="my-mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="my-mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="my-mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="my-mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        name: "app"
    }

</script>
<!--scoped : 用来限定范围的-->
<style scoped lang="less">
    @import './less/index.less';
    .app_container{
        padding-top: 40px;
        padding-bottom: 50px;
        overflow: hidden;
    }
    .v-enter{
        opacity:0;
        transform: translateX(100%);
    }
    .v-leave-to{
        position:absolute;
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 1s;
    }
    .mui-bar-tab .my-mui-tab-item
    {
        display: table-cell;
        overflow: hidden;

        width: 1%;
        height: 50px;

        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;

        color: #929292;
    }
    .mui-bar-tab .my-mui-tab-item.mui-active
    {
        color: #007aff;
    }
    .mui-bar-tab .my-mui-tab-item .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
        .mui-bar-tab .my-mui-tab-item .mui-icon ~ .mui-tab-label {
            font-size: 11px;

            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .mui-bar-tab .my-mui-tab-item .mui-icon:active {
            background: none;
        }
        //头部导航栏
        .mint-header.is-fixed {
            top: 0;
            right: 0;
            left: 0;
            position: fixed;
            z-index: 1;
            height: 40px;
        }
</style>