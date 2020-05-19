<template>
    <div class="bottombar">
        <div class="checkdiv"><checkbutton class="button" :isActive="isallcheck" @click.native="allclick"></checkbutton>
           <span>全选</span>
        </div>
        <div class='numprice'>
            合计:{{pricetotal}}
        </div>
        <div class="calcute">
            去计算({{calcute}})
        </div>


    </div>
</template>


<script>
import checkbutton from '../../../components/content/checkbutton/checkbutton'
export default {
    components:{
        checkbutton
    },
    computed:{
        pricetotal(){
            
           return '￥'+ this.$store.state.productx.filter((item)=>{
                return item.checked

            }).reduce((total,item)=>{
                return  total + item.price * item.count

            },0).toFixed(2)
          
        },
        calcute(){
            return this.$store.state.productx.filter(item=>{
                return item.checked
            }).length
        },
        isallcheck(){
            if(this.$store.state.productx.length===0) return false
            return !this.$store.state.productx.find(item=>{
               return !item.checked
            })
        },
       
    },
    methods:{
        allclick(){
           
            
            if(this.isallcheck){
                this.$store.state.productx.forEach(item=>{
                     item.checked=false
                    
                })
            }else{
                this.$store.state.productx.forEach(item=>{
                    item.checked=true
                     
                })
            }


        }
    }
    
}
</script>



<style scoped>
.bottombar{
    display: flex;
    background-color:#eee;
    height: 44px;
    position: fixed;
    bottom: 44px;
    left: 0;
    right: 0;
    line-height: 44px;
    font-size: 13px;

}
.checkdiv{
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 2px;
    

}

.button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
    margin-bottom: 3px;
}

.numprice{
    margin-left: 40px;
    
    
}

.calcute{
    background-color: rgb(245, 85, 11);
    color: white;
    position: absolute;
    right: 0;
    width: 90px;
    text-align: center;
}


</style>