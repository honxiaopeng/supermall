<template>
    <div>
        <Swiper>
            <SwiperItem v-for="item in banner" :key="item.id">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="swiperImgload">
                    
                </a>

            </SwiperItem>
        </Swiper>
    </div>
</template>



<script>
// import Swiper from '../../../components/common/swiper/Swiper'
// import SwiperItem from '../../../components/common/swiper/SwiperItem'
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
    data(){
       return {
           isonce:true
       } 
    },
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banner:{
            type:Array,
            default:function(){
                return []
            }
        }

    },
    methods:{
        swiperImgload(){
            if(this.isonce===true) this.$emit('swiperload')
            this.isonce=false
        }
    }
    
}
</script>