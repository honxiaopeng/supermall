import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import actions from  './actions'
import getters from './getters'
Vue.use(Vuex)
const state ={
        productx:[]

        

    }
const store =new Vuex.Store({
    state:state,
    mutations:mutations,
    actions:actions,
    getters:getters

})

export  default  store