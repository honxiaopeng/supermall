<template>
    <div class="recommendview" >
        <div v-for="item in recommends" :key="item.id" class="recommenditem">
            <div> <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
                 </a>
            </div>
            
      
       
        </div>
        
    </div>
</template>


<script>
export default {
    props:{
        recommends:{
            type:Array,
            default:function(){
                return []
            }
        }
    }
    
}
</script>





<style scoped>
.recommendview{
display: flex;
/* justify-content: space-evenly; */
font-size: 12px;
padding:10px 0 20px ;
border-bottom: solid 8px #eee;

}

.recommenditem{
   text-align: center;
flex: 1;

}
.recommenditem img{
    width: 65px;
    height: 65px;
   margin-bottom: 10px;
}
</style>