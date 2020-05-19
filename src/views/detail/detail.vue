<template>
    <div id="detail"><childnavbar class="childnavbar" @itemclick="itemclick" ref="navref"></childnavbar>
    <scroll class="scrollclass" ref="sc" @sc1="detailscroll" :probeType='3'>
        <childswiper :topimage="topimagelist"></childswiper>
    <childbaseinfo :goods='goods'></childbaseinfo>
    <childshop :shop="shoplist"></childshop>
    <childgoodsinfo :detailInfo="goodsinfo" @imgload="imgload"></childgoodsinfo>
    <childgoodsparam :paramInfo="goodsparam" ref='paramref'></childgoodsparam>
    <childcomment :commentInfo="commentinfo" ref="commentref"></childcomment>
    <goodslist :goods="recommend" ref="listref"></goodslist>

    </scroll>
    <backtop @click.native="backtotop" v-if="isShow"></backtop>
    <childaddcart @addtocart="addtoshop"></childaddcart>
    </div>
    
    
</template>



<script>
import childnavbar from './childcomp/childnavbar'
import childswiper from './childcomp/childswiper'
import childbaseinfo from './childcomp/childbaseinfo'
import childshop from './childcomp/childshop'
import childgoodsinfo from './childcomp/childgoodsinfo'
import childgoodsparam from './childcomp/childgoodsparam'
import childcomment from './childcomp/childcomment'
import childaddcart from './childcomp/childaddcart'


import goodslist from '../../components/content/goods/goodslist'
import scroll from '../../components/common/scroll/scroll'
import backtop from '../../components/content/backTop/backTop'

import {debounce} from '../../common/utils'


import {getdetail,Goods,Shop,GoodsParam,getRecommend} from  '../../network/detail'
export default {
    name: 'detail',
    data(){
        return {
            iid:null,
            topimagelist: [],
            goods:{},
            shoplist:{},
            goodsinfo:{},
            goodsparam:{},
            commentinfo:{},
            recommend:[],
            offsetY:[],
            offsetYdebounce:null,
            currentindex:0,
            isShow:false
        }
    },
    created(){
        this.iid=this.$route.params.iid
        this.getDetail()
        // console.log(this.$route);
      
        
    },
    components:{
        childnavbar,
        childswiper,
        childbaseinfo,
        childshop,
        scroll,
        childgoodsinfo,
        childgoodsparam,
        childcomment,
        goodslist,
        childaddcart,
        backtop
        
    },
    methods: {
        getDetail(){
          getdetail(this.iid).then((res)=>{
            //   console.log(res);
              const data=res.result
                this.topimagelist=data.itemInfo.topImages
                this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
                this.shoplist=new Shop(data.shopInfo)
                // console.log(this.shop);
                this.goodsinfo=data.detailInfo
                this.goodsparam=new GoodsParam(data.itemParams.info, data.itemParams.rule)
                if(data.rate.cRate!==0) this.commentinfo=data.rate.list[0]

        //           this.$nextTick(()=>{
        //     this.offsetY=[]
        //     this.offsetY.push(0)
        //     this.offsetY.push(-this.$refs.paramref.$el.offsetTop)
        //     this.offsetY.push(-this.$refs.commentref.$el.offsetTop)
        //     this.offsetY.push(-this.$refs.listref.$el.offsetTop)
        //     console.log(this.offsetY);
            
        // })
                this.offsetYdebounce=debounce(()=>{
                     this.offsetY=[]
            this.offsetY.push(0)
            this.offsetY.push(this.$refs.paramref.$el.offsetTop-44)
            this.offsetY.push(this.$refs.commentref.$el.offsetTop-44)
            this.offsetY.push(this.$refs.listref.$el.offsetTop-44)
            // console.log(this.offsetY);
                })



          })
          getRecommend().then(res=>{
              this.recommend=res.data.list
          })
            
            
           
        },
        imgload(){
            this.$refs.sc.scroll.refresh()
            this.offsetYdebounce()
        },
        itemclick(index){
            // console.log(index);
            this.$refs.sc.scroll.scrollTo(0,-this.offsetY[index],200)
            

        },
        detailscroll(position){
            const length=this.offsetY.length
            const positionY=-position.y
           
            
            
           for(let i=0;i<length;i++){
               if(this.currentindex!==i&&((i<length-1&&positionY>this.offsetY[i]&&positionY<this.offsetY[i+1])||(i==length-1&&positionY>this.offsetY[i])))
            { this.currentindex=i 
            this.$refs.navref.currentIndex= this.currentindex} 
           
            
              
            this.isShow=positionY>1000
               
               
              
               
               
           }
            
        },
        backtotop(){
            this.$refs.sc.scroll.scrollTo(0,0,500)
        },
        addtoshop(){
           const product={}
           const oldproduct=null
           const productx= this.$store.state.productx
           product.image=this.topimagelist[0]
           product.title=this.goods.title
           product.desc=this.goods.desc
           product.price=this.goods.realPrice
           product.iid=this.iid 
            // this.$store.commit('addproduct',product)
            this.$store.dispatch('addproduct',product).then(res=>{
                console.log(res);
                

            })
        //    console.log( this.$store.state);
        //    console.log(this.$store);
           
        this.$toast.show('asdasda')
           
           
        }
        
    }
    
}
</script>


<style scoped>

#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}


.scrollclass{
    
    height: calc(100% - 44px - 58px);
    /* position: absolute;
    overflow: hidden;
    top: 44px;
    
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #fff; */
}
.childnavbar{
    position: relative;
    z-index: 9;
    background-color: #fff;
}




</style>