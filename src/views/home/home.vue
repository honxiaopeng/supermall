<template>
    <div id="home">

        <navbar class="navclass">
            <div slot="center">购物街</div>
        </navbar>
        <tabcontrol :titles="['流行','新款','精选']" ref="tabcontrolref1" @tabclick="tabchange" class="tab-control" v-show="isFixed"></tabcontrol>
        <scroll class="content"  ref="sc" :probeType='3' @sc1="scrollYchange" @sc2="getmoregoods" :pullUpLoad='true'>
        <homeswiper :banner="banners" @swiperload="swipercalute"></homeswiper>
        <recommendview :recommends="recommends"></recommendview>
        <featureview ></featureview>
        <tabcontrol :titles="['流行','新款','精选']" ref="tabcontrolref2" @tabclick="tabchange"></tabcontrol>
        <goodslist :goods="goods[type].list"></goodslist>
        </scroll>
        <backTop @click.native="backclick" v-show="isShow"></backTop>
        
      
        
    </div>
</template>


<script>
import navbar from '../../components/common/navbar/navbar'
import homeswiper from './childComp/homeswiper'
import recommendview from './childComp/recommendview'
import featureview from './childComp/featureview'



import tabcontrol from '../../components/content/tabcontrol/tabcontrol'
import goodslist from '../../components/content/goods/goodslist'
import scroll from '../../components/common/scroll/scroll'
import backTop from '../../components/content/backTop/backTop'

import {debounce} from '../../common/utils'







import {getHomeMultidata,gethomegoods} from '../../network/home'
export default {
    data:function(){
        return {
            banners:[],
            recommends:[],
            goods:{
                pop:{
                    page:0,list:[]
                },
                sell:{
                    page:0,list:[]
                },
                new:{
                    page:0,list:[]
                }


            },
            type:'pop',
            isShow:false,
            offsetTop:0,
            isFixed:false,
            saveY:0
        

        }
    },
    components: {
        navbar,
        homeswiper,
        recommendview,
        featureview,
        tabcontrol,
        goodslist,
        scroll,
        backTop
    },
    created(){
        this.GetHomeMultidata()
        this.Gethomegoods('pop')
        this.Gethomegoods('sell')
        this.Gethomegoods('new')
       
       
    },
    mounted(){
        const refresh=this.scfresh()
       
         this.$bus.$on('refresh',()=>{
            
            
             debounce(refresh,500)
        })
    },
    activated(){
        this.$refs.sc.scroll.scrollTo(0,this.saveY)
        this.$refs.sc.scroll.refresh()

    },
    deactivated(){
        this.saveY=this.$refs.sc.scroll.y
        // console.log(this.$refs.sc.scroll.y);
        

    
    },
    methods:{ 
      
        backclick(){
            this.$refs.sc.scroll&&this.$refs.sc.scroll.scrollTo(0,0,500)
          
           
            
            
            
            

        },
        scfresh(){
            // console.log('1111');
            
            this.$refs.sc.scroll&&this.$refs.sc.scroll.refresh()

        },
        finishpullup(){
            this.$refs.sc.scroll.finishPullUp()

        },
        scrollYchange(position){
            this.isShow=-position.y>1000
            this.isFixed=-position.y>this.offsetTop
            
            

        },
        getmoregoods(){
            this.Gethomegoods(this.type)
            
           
            
        },
        swipercalute(){
            this.offsetTop=this.$refs.tabcontrolref2.$el.offsetTop

        },
   


        // 网络请求的相关方法
        GetHomeMultidata(){
            getHomeMultidata().then(res=>{
            
            this.banners =res.data.banner.list
            this.recommends=res.data.recommend.list
         
            
            
            
        })

        },
        Gethomegoods(type){
           const page = this.goods[type].page+1
             gethomegoods(type,page).then(res=>{
            // res.data.list.forEach(item => {
            //     this.goods[type].list.push(item)
            // });
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1
            this.finishpullup()
            
            
            
        })

        },
        // tabchange(){
        //              if(this.$refs.tabcontrolref.currentIndex===0){
        //         return this.type='pop'
        //     }
        //     else if(this.$refs.tabcontrolref.currentIndex===1){
        //         return this.type='new'
        //     }
        //     else {
        //         return this.type='sell'
        //     }
        
        // }
        tabchange(index){
                          if(index===0){
                //  this.Gethomegoods('pop')
                 this.type="pop"
            }
            else if(index===1){
                //  this.Gethomegoods('new')
                 this.type="new"
            }
            else {
                //  this.Gethomegoods('sell')
                 this.type="sell"
            }
            this.$refs.tabcontrolref1.currentIndex =index
            this.$refs.tabcontrolref2.currentIndex =index
            

        }
    },
    // computed:{
    //     type(){
        //     if(this.$refs.tabcontrolref.currentIndex===0){
        //         return 'pop'
        //     }
        //     else if(this.$refs.tabcontrolref.currentIndex===1){
        //         return 'new'
        //     }
        //     else {
        //         return 'sell'
        //     }
        // }
    // }
}
</script>





<style scoped>
.navclass{
    background-color: #ff5777;
    color: white;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
    /* padding-bottom: 44px; */
   
}
.tab-control{
    position: relative;
    z-index: 9;
}

#home{
    /* padding-top: 44px; */
    position: relative;
    height: 100vh;
}
/* .tabcontrol{
    position: sticky;
    top: 44px;
    z-index: 9;
    
} */
.content {
    
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
}

</style>