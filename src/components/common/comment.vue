<template>
    <div class="cmt_container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="10" v-model="textComments"></textarea>
        <mt-button type="primary" size="large" @click="addComments">发表评论</mt-button>

        <div class="cmt_list">
            <div class="cmt_item" v-for="(item,index) in comments">
                <div class="cmt_title">
                    第{{index+1}}楼 用户：{{item.user_name}}
                    发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt_body">
                    {{item.content}}
                </div>
            </div>
            <mt-button type="danger" size="large" @click="add">点击加载更多</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data(){
            return {
                comments:[],
                cmtIndex :1,
                textComments:""
            }
        },
        props:['cmtId'],
        created(){
            this.getComments();
        },
        methods:{
            getComments(){
                this.$axios.get('api/getcomments/'+this.cmtId+"?pageindex="+this.cmtIndex)
                    .then(result =>{
                        console.log(result);
                        if(result.data.status === 0){
                            this.comments = this.comments.concat(result.data.message)
                            console.log(this.comments);
                        }
                    })
            },
            add(){
                this.cmtIndex++;
                this.getComments()
            },
            addComments(){
                //非空校验
                if(!this.textComments){
                    return;
                }
                this.$axios.post('api/postcomment/'+this.cmtId,{content:this.textComments})
                    .then(result =>{
                        console.log(result);
                        if(result.data.status === 0){
                            //发送成功到调用
                            this.getComments();
                            this.textComments = "";
                        }
                    })
            }
        }
    }

</script>

<style lang="less" scoped>
    //导入less
    @import '../../less/index.less';
    .cmt_item{
       padding:10rem/@baseFontSize 0;
        background-color:rgb(204,204,204);
        margin:20rem/@baseFontSize 0;
        font-size:18rem/@baseFontSize;
        .cmt_title{
            margin-bottom: 10rem/@baseFontSize;
        }
        .cmt_body{
        }
    }
</style>