<template>
    <div>
        <Swiper class="swiperclass">
            <SwiperItem v-for="item in topimage" :key="item.id">
                <img :src="item" alt="">
            </SwiperItem>
        </Swiper>


    </div>
</template>



<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index.js'

export default {
    props: {
        topimage: {
            type: Array,
            default: function(){
                return {}
            }
        },
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>



<style scoped>
.swiperclass{
    overflow: hidden;
    height: 300px;

}
</style>