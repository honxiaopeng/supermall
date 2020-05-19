<template>
 <div class="tabbaritem" @click="activeChange" >
         <!-- <img src="../../../assets/img/tabbar/home.svg" alt=""><div>首页</div> -->
           <slot name="item-icon" v-if="isActive"></slot>
           <slot name="item-icon-active" v-else></slot>
           <div  :style="activeColor"><slot name="item-text" ></slot></div>
           

<!-- :class="{'activeClass':isActive}" -->

    </div>
   
</template>



<script>
// import axiosf from '../../../network/request'
export default {
    props:{
        path:{
            type:String,
            
            default:'/home'
        },
        Color:{
            type:String,
            default:'red'
        }

    },
    data(){
        return {
            // isActive:true
        }
    },
    methods:{
        activeChange(){
            
            this.$router.push(this.path)
            // axiosf()
            
            
            
            
            
            
        },
        
    },
    computed:{
        isActive(){
        //   if( this.$router.currentRoute.path==this.path){
        //       return true
        //   }
          return this.$route.path.indexOf(this.path)===-1
 
        },
        activeColor(){
           const res= this.$route.path.indexOf(this.path)!==-1? {'color':this.Color}:{}
           return res

        }
    }
    
}
</script>



<style scoped>
.tabbaritem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

}
.tabbaritem img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
    
   
    
}
/* .activeClass{
    color: red;
} */

</style>