import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局自定义指令
// Vue.directive('color', {
//   bind(el, binding) {
//     el.style.color = this.bindng.value
//   },
//   update(el, binding) {
//     el.style.color = this.bindng.value
//   }
// })

// 全局自定义指令
// 自定义指令一般都是定义为全局 ， 即在main.js中定义
Vue.directive('color', function (el, binding) {
  el.style.color = binding.value
})


new Vue({
  render: h => h(App),
}).$mount('#app')
