<template>
    <div>
        <mt-swipe :auto="5000">
            <mt-swipe-item  v-for="item in picdata"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newsList">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photoList">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodsBuy">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return {
             picdata:null,
            }
        },
        created(){
            this.getBanner()
        },
        methods:{
            getBanner(){
                this.$axios.get('http://www.liulongbin.top:3005/api/getlunbo')
                    .then(result => {
                        if(result.data.status === 0){
                            this.picdata = result.data.message;
                            console.log(result);
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../less/index.less';
    .mint-swipe{
        height:200rem/@baseFontSize;
    }
    .mint-swipe-items-wrap img{
        width: 100%;
        height: 100%;
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 img{
        width: 60rem/@baseFontSize;
        height: 60rem/@baseFontSize;
    }
    .mui-media-body{
        font-size: 13rem/@baseFontSize;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;
    }
    //九宫格
    .mui-content>.mui-table-view:first-child {
        margin-top: 0;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
        font-size: 15rem/@baseFontSize;
        line-height: 15px;
        display: block;
        width: 100%;
        height: 15px;
        margin-top: 8rem/@baseFontSize;
        text-overflow: ellipsis;
        color: #333;
    }
</style>