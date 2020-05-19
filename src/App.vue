<template>
  <div id="app">
   
   <keep-alive exclude="detail"><router-view></router-view></keep-alive>
    
   
   <MainTabBar></MainTabBar>
    
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar/MainTabBar'

export default {
 components:{
  MainTabBar
 },
 methods:{
   
  
 }
 
}
</script>

<style>
@import "./assets/css/base.css"

</style>
