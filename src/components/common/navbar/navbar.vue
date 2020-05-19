<template>
    <div class="navcss">
        <div class="leftnav"><slot name="left"></slot></div>
        <div class="centernav"><slot name="center"></slot></div>
        <div class="rightnav"><slot name="right"></slot></div>

      
        
        


    </div>
</template>


<script>
export default {
    
}
</script>




<style scoped>
.navcss{
    height: 44px;
    display: flex;
    line-height: 44px;
    
    
}

.leftnav{
    width: 60px;
    /* background-color: yellow; */
}

.centernav{
    flex: 1;
    text-align: center;
}
.rightnav{
    width: 60px;
    /* background-color: yellow; */
}

</style>