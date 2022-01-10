import Vue from 'vue'
import App from './App.vue'
import Count from "./components/Count"


// 全局组件，
// 对于常用的需要嵌套使用的组件可以创建全局组件来使用
Vue.component('MyCount', Count)  // 注册常用的全局组件


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 注册全局组件
// Vue.component()


// 组件的使用需要关注：  组件的封装者、组件的使用者
