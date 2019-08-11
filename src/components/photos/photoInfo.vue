<template>
    <div>
        <!--标题区域-->
        <div class="photoTitle">
            <h4>{{imgInfo.title}}</h4>
            <p><span>发表时间：{{imgInfo.add_time | dateFormat}}</span><span>点击：{{imgInfo.click}}次</span></p>
            <hr>
        </div>
        <!--缩略图区域-->
        <div class="thumbs">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        <!--内容区域-->
        <div class="photoContent" v-html="imgInfo.content">

        </div>
        <comment :cmtId="id"></comment>
    </div>
</template>

<script>
    import comment from '../common/comment.vue'
    export default {
        name: "photoInfo",

        data(){
            return {
                id:this.$route.params.id,
                slide1:[],
                imgInfo:{}
            }
        },
        components:{
            comment
        },
        created(){
            this.getThumbs();
            this.getPhotoInfo()
        },
        methods:{
            getThumbs(){
                this.$axios.get("/api/getthumimages/"+this.id)
                    .then(result =>{
                        console.log(result);
                        if(result.data.status === 0){
                            result.data.message.forEach(item =>{
                                item.msrc = item.src
                                item.w = 600;
                                item.h = 400;
                            })
                            this.slide1 = result.data.message
                        }
                    })
            },
            getPhotoInfo(){
                this.$axios.get("api/getimageInfo/"+this.id)
                    .then(result =>{
                        if(result.data.status === 0){
                            this.imgInfo = result.data.message[0];
                        }
                    })
            },
            handleClose () {
                console.log('close event')
            }
        }
    }
</script>

<style scoped>
    .photoTitle{
        color:#26a2ff;
        font-weight: 600;
    }
</style>