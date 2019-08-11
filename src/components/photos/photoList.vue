<template>
    <div>
        <div id="slider" class="mui-slider" data-slider="4">
            <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-scroll-wrapper">
                <div class="mui-scroll">
                    <a v-for="(item ,index) in photoList" href="#item1mobile" @click="getImages(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="imgbox" >
            <router-link :to="'/home/photoInfo/'+item.id" tag="li"  v-for="(item,index) in list" :key="item.id">
                <img v-lazy="item.img_url" alt="">
                <div class="content">
                    <p>{{item.seo_title}}</p>
                    <p>{{item.zhaiyao}}</p>
                </div>
            </router-link>

        </ul>
    </div>

</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        name: "photoList",
        data(){
            return {
                photoList:null,
                list:[]
            }
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll();
        },
        created(){
            this.getphotoList()
            this.getImages(0)
        },
        methods:{
            getphotoList(){
                this.$axios.get('api/getimgcategory')
                    .then(result =>{
                        console.log(result);
                        if(result.data.status === 0){
                            result.data.message.unshift({title:"全部",id:0})
                            this.photoList = result.data.message
                        }
                    })
            },
            getImages(imgid){
                this.$axios.get('api/getimages/'+imgid)
                    .then(result =>{
                        console.log(result);
                        if(result.data.status === 0){
                            this.list = result.data.message;
                        }
                    })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '../../less/index.less';
    ul{
        padding: 10rem/@baseFontSize;
        margin: 0;
    }
    .imgbox li{
        list-style: none;
        position:relative;
        margin-top: 10rem/@baseFontSize;
        img{
            display:block;
            width:100%;
        }
        img[lazy=loading] {
            width: 40rem/@baseFontSize;
            height: 300rem/@baseFontSize;
            margin: auto;
        }
        .content{
            position:absolute;
            bottom:0;
            left:0;
            background: rgba(0,0,0,0.4);
            p:nth-child(1){
                margin-bottom: 0;
                font-weight: 600;
                color:#fff;
            }
            p:nth-child(2){
                color:#fff;
            }
        }
    }
    .mui-scroll{
        a{
            color:black;
        }
    }
</style>