import Vue from 'vue'
// import App from './App.vue'

// 项目中看到是APP2组件
import App from "./App2.vue";

// 导入路由模块
// 模块化导入的时候，如果只导入文件夹，没有导入文件，则默认导入index.js文件夹
import router from "./router"

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // Vue中，要把路由用起来，必须把路由实例对象进行挂载：
  // router: 路由的实例对象
  // router: router
  router
}).$mount('#app')
