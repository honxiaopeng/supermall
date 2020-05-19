<template>
    <div class="navchild">
        <navbar>
            
                 <div class="back" @click="back" slot="left"> <img src="../../../assets/img/common/back.svg" alt=""></div>
            
            
            <div slot="center" class="title"> 
               
               
                <div v-for="(item,index) in titles" :key='index'  class="item" :class="{active:index===currentIndex}" @click="itemclick(index)">
                    {{item}}</div>
            </div>
        </navbar>
    </div>
</template>



<script>

import navbar from '../../../components/common/navbar/navbar'
export default {
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0

        }

    },
    components:{
        navbar
    },
    methods:{
        itemclick(index){
            this.currentIndex=index
            this.$emit('itemclick',index)
        },
        back(){
            this.$router.back()
        }
    }
    
}
</script>




<style scoped>
.title{
    display: flex;
    font-size: 13px;
}
.item{
    flex: 1;
}
.back{
    margin-top: 6px;
    margin-left: 20px;

}
.active{
    color:  #ff5777;
}
.navchild {
    box-shadow:0 2px 5px #ccc ;
}
</style>