export default {
    addproduct(context,payload){
          // console.log(p2); 
        //   console.log(context);
    //  console.log(this.$store);
    return new Promise((reslove,reject)=>{
      let oldproduct=null
        
          for(let item of context.state.productx){
             if(item.iid===payload.iid)
             oldproduct=item
          }
          if(oldproduct){
            //   oldproduct.count+=1
            context.commit('addcount',oldproduct)
            reslove('商品数量加1')
          }else{
              // oldproduct=payload
              payload.count=1
            //   state.productx.push(payload)
            context.commit('addtoproduct',payload)
            reslove('商品加入购物车成功')
          }
          
    })
          
    
     
          
    },
    // changeallcheck(context,payload){
    //  p2 = payload.map(item=>{
    //    item.check=!item.check 
    //     return item
    //   })
    //   context.commit('changeproductx',p2)
    // }


}
