export default {
    getcount(state,getters){
        return '('+state.productx.length+')'
    },
    cartlist(state,getters){
        return state.productx


    }
}