import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import toast from './components/common/toast/index'
import vuelazyload from 'vue-lazyload'
Vue.use(vuelazyload)

Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
// 其中h是一个回调函数的，传入一个模板进行渲染
new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
