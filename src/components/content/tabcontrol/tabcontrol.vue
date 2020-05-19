<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" @click="tabclick(index)" class="tabcontrolitem" :class="{active:index===currentIndex}">
            <span>{{item}}</span></div>
    </div>
</template>



<script>
export default {
    data(){
        return {
            currentIndex:0

        }
    },
    props:{
        titles:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    methods:{
        tabclick(index){
            this.currentIndex=index
            this.$emit('tabclick',index)

        }
    }
}
</script>


<style scoped>
.tabcontrol{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: #fff;

}
.tabcontrolitem{
    flex: 1;
}

.active{
    color: rgb(218, 74, 74);
    
}
.active span{
    border-bottom: rgb(218, 74, 74) solid 2px;
    padding-bottom: 3px;
}
</style>