<template>
    <div class="container-box">
        <ul>
            <li v-for="(item,index) in goodsList" >
                <router-link :to="'/home/goodsBuy/goodsDetail/'+item.id">
                    <div class="imgcontent">
                        <img :src="item.img_url" alt="">
                        <p>{{item.title}}</p>
                    </div>
                    <div class="content">
                        <div class="m-b"><span class="red">￥{{item.sell_price}}</span><del>￥{{item.market_price}}</del></div>
                        <div><span>热卖中</span><span class="f-r">剩{{item.stock_quantity}}件</span></div>
                    </div>
                </router-link>
            </li>
        </ul>
        <mt-button size="large" type="danger" @click="addmore">加载更多</mt-button>
    </div>
</template>
<script>
    export default {
        name: "goodsBuy",
        data(){
            return {
                goodsList:[],
                pageIndex :1
            }
        },
        created(){
            this.getGoods();
        },
        methods:{
            getGoods(){
                this.$axios.get("api/getgoods?pageindex="+this.pageIndex)
                    .then(result =>{
                        console.log(result);
                        if(result.data.status === 0){
                            this.goodsList = this.goodsList.concat(result.data.message);
                        }
                    })
            },
            addmore(){
                this.pageIndex++;
                this.getGoods();
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../less/index.less';
    .container-box{
        background-color: #eeeeee;
    }
    mt-button{
        margin-top: 10rem/@baseFontSize;
    }
    a{
        display:block;
    }
    ul{
        padding:0;
        margin: 0;
        margin-bottom: 15rem/@baseFontSize;
        overflow: hidden;
    }
    li{
        list-style: none;
        width: 46%;
        margin:0 2%;
        float: left;
        box-shadow: 0 0 2rem/@baseFontSize 2rem/@baseFontSize #ccc;
        margin-top: 10rem/@baseFontSize;
        .imgcontent{
            background-color: #fff;
            padding-top: 20rem/@baseFontSize;
            text-align: center;
            img{
                width: 160rem/@baseFontSize;
                height: 160rem/@baseFontSize;
            }
            p{
                font-size: 16rem/@baseFontSize;
                font-weight: 600;
                color:black;
                height:100rem/@baseFontSize;
                text-align: initial;
                margin-top: 10rem/@baseFontSize;
            }
        }
        .content{
            background-color: rgb(238,238,238);
            color:grey;
            font-size: 14rem/@baseFontSize;
            padding:0 10rem/@baseFontSize;
            height: 70rem/@baseFontSize;
            padding-top: 10rem/@baseFontSize;
        }
        .m-b{
            margin-bottom: 9rem/@baseFontSize;
        }
        del{
            margin-left: 20rem/@baseFontSize;
        }
        .red{
            color:red;
            font-weight: 600;
        }
        .f-r{
            float: right;
        }
    }
</style>