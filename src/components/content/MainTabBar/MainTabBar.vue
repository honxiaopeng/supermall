<template>
    <div>
         <tabbar>
      <tabbaritem :path="'/home'" :Color='"red"'>
      <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="" >
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="" >

      <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem :path="'/category'"  :Color="'red'">
          <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">

      <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem :path="'/shopcart'"  :Color="'red'">
          <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem :path="'/profile'">
          <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
      </tabbaritem>

    </tabbar>
    </div>
</template>


<script>

import tabbar from '../../common/tabbar/tabbar'
import tabbaritem from '../../common/tabbar/tabbaritem'
export default {
    components:{
        tabbar,
        tabbaritem
    }
}
</script>