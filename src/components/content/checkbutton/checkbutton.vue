<template>
    <div class="checkbutton" :class="{'activeclass':isActive}">
        <img src="../../../assets/img/cart/tick.svg" alt="" >
    </div>
</template>


<script>

export default {
    props:{
        isActive:{
            type:Boolean,
            default:true
        }
    }
    
}
</script>


<style scoped>
.checkbutton{
    
    border: 2px solid gray;
    border-radius: 50%;
}
.activeclass{
    background-color: red;
    border: 2px solid red;
}

</style>