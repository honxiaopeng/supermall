<template>
    <div id="cart">
        <navbar class="navbarclass"><div slot='center'>购物车{{count}}</div></navbar>
        <childlist class="cartlist"></childlist>
        <childbottombar></childbottombar>
    </div>
</template>


<script>
import navbar from '../../components/common/navbar/navbar'

import childlist from './childcomp/childlist'
import childbottombar from './childcomp/childbottombar'

import {mapGetters} from 'vuex'
export default {
    data(){
        return {}

    },
    methods:{

    },
    components:{
        navbar,
        childlist,
        childbottombar
    },
    computed:{
        // count(){
        //     return '('+this.$store.state.productx.length+')'
        // }
        ...mapGetters({count:'getcount'})
    }

    
}
</script>




<style scoped>



.navbarclass{
    background-color: #ff5777;
    color: white;
    /* font-weight: 700; */
    
}

</style>