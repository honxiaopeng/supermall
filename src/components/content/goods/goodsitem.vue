<template>
    <div class="item" @click="itemclick">
        <img v-lazy="showimage" alt="" @load="imgrefresh">
        <div class='iteminfo'>
            <p>{{item.title}}</p>
            <span class="price">￥{{item.price}}</span>
            <span class="collect">{{item.cfav}}</span>
        </div>
    </div>
</template>



<script>

export default {
    props:{
        item:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    methods:{
        imgrefresh(){
            this.$bus.$emit('refresh')
        },
        itemclick(){
            this.$router.push('/detail/'+this.item.iid)
        }
    },
    computed:{
        showimage(){
            return this.item.image || this.item.show.img
        }
    }
}
</script>



<style scoped>
.item{
    position: relative;
    padding-bottom: 40px;
    width: 48%;

}
.item img{
    width: 100%;
    border-radius: 5px;
}

.iteminfo{
    font-size: 13px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;

}
.iteminfo p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    left: 0px;
    top: 0px;
}
.iteminfo .price{
    color:  #ff5777;
    margin-right: 20px;

}

/* .iteminfo .collect::before{
    content: '';
    position: absolute;
    top: -1px;
    left: -15px;
    width: 14px;
    height: 14px;
    background:url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
    } */
.iteminfo .collect{
    position: relative;
}    
.iteminfo .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>