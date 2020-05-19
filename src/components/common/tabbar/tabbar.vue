<template>
    <div id="tabbar">
       <!-- <tabbaritem></tabbaritem>
       <tabbaritem></tabbaritem>
       <tabbaritem></tabbaritem>
       <tabbaritem></tabbaritem> -->
       <!-- <div class="tabbaritem">
           <img src="../../../assets/img/tabbar/home.svg" alt="">
           首页
       </div>
       <div class="tabbaritem">
           <img src="../../../assets/img/tabbar/home.svg" alt="">
           分类</div>
       <div class="tabbaritem">
           <img src="../../../assets/img/tabbar/home.svg" alt="">
           购物车</div>
       <div class="tabbaritem">
           <img src="../../../assets/img/tabbar/home.svg" alt="">
           我的</div>
    </div> -->
    <slot></slot>
    </div>
</template>



<script>
import tabbaritem from './tabbaritem.vue'
export default {
    components:{
        tabbaritem
    }
    
}
</script>




<style scoped>
#tabbar{
    display: flex;
    /* justify-content: space-evenly; */
    background-color: #f6f6f6;
    box-shadow:0 -2px 5px #ccc ;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}



</style>