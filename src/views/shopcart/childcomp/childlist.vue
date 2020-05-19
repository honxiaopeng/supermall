<template>
    <div class="childlist">
        
        <scroll class="scrollclass" >
            <!-- <li v-for="item in cartlist" :key="item.iid">
          {{item}}
        </li> -->
        <childlistitem v-for="(item,index) in cartlist" :key="index" :item-info="item"></childlistitem>

        </scroll>
    </div>
</template>



<script>
import {mapGetters} from 'vuex'

import scroll from '../../../components/common/scroll/scroll'
import childlistitem from './childlistitem'
export default {
    computed:{
        ...mapGetters(['cartlist'])

    },
    components:{
        scroll,
        childlistitem
    }
}
</script>



<style scoped>
.childlist {
    height: 100vh;
}

.scrollclass{
    
   height: calc(100% - 44px - 49px - 44px);
   overflow: hidden;
}
</style>