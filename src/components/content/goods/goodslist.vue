<template>
    <div class="goodslist">
        <goodsitem v-for="item in goods" :key="item.id" :item="item"></goodsitem>
    </div>
</template>



<script>
import goodsitem from './goodsitem'
export default {
    props:{
        goods:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    components:{
        goodsitem
    }
}
</script>





<style scoped>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.goodsitem{
    flex: 0.1;

}

</style>