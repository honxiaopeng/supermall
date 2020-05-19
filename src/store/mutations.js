export default {
    addtoproduct(state,payload){
       payload.checked=true
       state.productx.push(payload)

    },
    addcount(state,payload){
        payload.count+=1

    },
    // changeproductx(state,payload){
    //     state.productx.

    // }

}