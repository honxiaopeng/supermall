<template>
    <div class="toastclass" v-show="isShow">{{message}}</div>
</template>




<script>
export default {
    data(){
    return {
        message:'',
        isShow:false
    }
    },
    methods:{
        show(message,duration=2000){
            this.message=message
            this.isShow=true
            setTimeout(()=>{
                this.isShow=false
                this.message=''

            },duration)

        }
    }
    
}
</script>


<style scoped>
.toastclass{
    background-color: rgb(0,0, 0,0.75);
    color: white;
    position: fixed;
    padding: 5px;
    /* border-radius: 7% 7%; */
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;

}
</style>