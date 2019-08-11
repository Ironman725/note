<template>
    <div class="box_container">
        <mt-swipe :auto="5000">
            <mt-swipe-item  v-for="item in imgBox"><img :src="item.src" alt=""></mt-swipe-item>
        </mt-swipe>
            <div class="title" v-for="item in content">{{item.title}}</div>
            <div class="buydetail" v-for="item in content">
                <p>
                    <span>市场价：<del>{{item.market_price}}</del></span><span>销售价：<span class="red">{{item.sell_price}}</span></span>
                </p>
                <p>购买数量</p>
                <div class="numcontrol">
                    <a href="javascript:;"class="jian">－</a><a href="javascript:;" class="value">1</a><a href="javascript:;" class="jia">+</a>
                </div>
                <div class="options">
                    <a class="buynow">立即购买</a><a href="javascript:;" class="joincar">加入购物车</a>
                </div>
            </div>
            <div class="goodsParams">
                <div class="title">商品参数</div>
                <div class="information" v-for="item in content">
                    <p>商品货号：{{item.goods_no}}</p>
                    <p>库存情况：{{item.stock_quantity}}</p>
                    <p>上架时间：{{item.add_time | dateFormat}}</p>
                </div>
                <div class="nextbutton">
                    <div class="a">图文介绍</div>
                    <div class="b">商品评论</div>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        name: "goodsDetail",
        data(){
            return {
                id:this.$route.params.id,
                imgBox:null,
                content:null
            }
        },
        created(){
            this.getGoodsImg();
            this.getGoodsInfo();
        },
        methods:{
            getGoodsImg(){
                this.$axios.get("api/getthumimages/"+this.id)
                    .then(result =>{
                        if(result.data.status === 0){
                            this.imgBox = result.data.message;
                        }
                    })
            },
            getGoodsInfo(){
                this.$axios.get("api/goods/getinfo/"+this.id)
                    .then(result =>{
                        if(result.data.status === 0){
                            this.content = result.data.message;
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../less/index.less';
    img{
        width: 300rem/@baseFontSize;
        height:300rem/@baseFontSize;
    }
    .box_container{
        padding:15rem/@baseFontSize;
        background-color: #cccccc;
    }
    .mint-swipe{
        width: 100%;
        height: 320rem/@baseFontSize;
        text-align: center;
        background-color: #fff;
    }
    .title{
        padding:10rem/@baseFontSize;
        color:black;
        font-size:16rem/@baseFontSize;
        border-bottom: 1px solid #cccccc;
        background-color: #fff;
        margin-top: 10rem/@baseFontSize;
    }
    .buydetail{
        padding:15rem/@baseFontSize;
        font-size:14rem/@baseFontSize;
        color:#ccc;
        background-color: #fff;
        .red{
            color:red;
            font-size:20rem/@baseFontSize;
            font-weight:600;
        }
        .numcontrol{
            height: 35rem/@baseFontSize;
            a{
                display:block;
                float: left;
                text-decoration: none;
                width: 30rem/@baseFontSize;
                height: 30rem/@baseFontSize;
                line-height: 30rem/@baseFontSize;
                text-align: center;
                margin-bottom: 0;
            }
            a.jian{
                border:1px solid #ccc;
                border-right:none;
                background-color: rgb(245,245,247);

            }
            a.jia{
                border:1px solid #ccc;
                border-left:none;
                background-color: rgb(245,245,247);
            }
            a.value{
                border:1px solid #ccc;
                color:black;
            }
        }
        .options{
            overflow: hidden;
            margin-top: 10rem/@baseFontSize;
        }
        .buynow{
            background-color: #26a2ff;
            text-align: center;
            color:#fff;
            padding:0 10rem/@baseFontSize;
            height: 40rem/@baseFontSize;
            border-radius: 5rem/@baseFontSize;
            display:block;
            float: left;
            line-height: 40rem/@baseFontSize;
            margin-right: 10px;
            font-size: 16rem/@baseFontSize;
        }
        .joincar{
            background-color: red;
            line-height: 40rem/@baseFontSize;
            text-align: center;
            color:#fff;
            padding:0 10rem/@baseFontSize;
            height: 40rem/@baseFontSize;
            border-radius: 5rem/@baseFontSize;
            display:block;
            float: left;
            font-size: 16rem/@baseFontSize;
        }
    }
    //商品参数
    .goodsParams{
        background-color: #fff;
        .information{
            padding:15rem/@baseFontSize;
            font-size: 14rem/@baseFontSize;
            color:#ccc;
            border-bottom: 1px solid #cccccc;
            p:nth-child(3){
                margin-bottom: 0;
            }
        }
        .nextbutton{
            padding:25rem/@baseFontSize 15rem/@baseFontSize;
            width: 100%;
            .a{
                border:1px solid  #26a2ff;
                color:#26a2ff;
                text-align: center;
                height: 45rem/@baseFontSize;
                line-height: 45rem/@baseFontSize;
                border-radius:4rem/@baseFontSize;
            }
            .b{
                border:1px solid  red;
                color:red;
                text-align: center;
                height: 45rem/@baseFontSize;
                line-height: 45rem/@baseFontSize;
                margin-top: 10px;
                border-radius: 4rem/@baseFontSize;
            }


        }
    }
</style>