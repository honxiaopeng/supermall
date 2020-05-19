import vueRouter from 'vue-router'
import Vue  from 'vue'
// import home from '../views/home'
// import category from '../views/category'
const home =()=>import('../views/home/home.vue')
const category =()=>import('../views/category')
const shopcart =()=>import('../views/shopcart/shopcart')
const profile =()=>import('../views/profile')
const detail =()=>import('../views/detail/detail')

Vue.use(vueRouter)


const router=new vueRouter({
routes:[
    {path:'/',redirect:'./home'},
    {path:'/home',component:home},
    {path:'/category',component:category},
    {path:'/shopcart',component:shopcart},
    {path:'/profile',component:profile},
    {path:'/detail/:iid',component:detail}
    
]
})


export default router