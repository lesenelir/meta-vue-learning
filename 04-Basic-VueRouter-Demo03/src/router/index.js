// src/router/index.js 是当前项目的路由模块

// 导入需要的组件
import Home from "../components/Home"
import Movie from "../components/Movie"
import About from "../components/About"
import Tab1 from "../components/tabs/Tab1"
import Tab2 from "../components/tabs/Tab2"
import Movie1 from "../components/movies/Movie1"
import Movie2 from "../components/movies/Movie2"
import Movie3 from "../components/movies/Movie3"
import Login from "../components/Login"
import Main from "../components/Main"

// 1. 导包
import Vue from "vue"
import VueRouter from "vue-router"

// 2. 调用Vue.use()函数，把VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter({
  // 作用： 定义"Hash地址"与"组件之间"的对应关系
  routes: [
    // 路由规则：
    // 路由重定向 通过 redirect 属性进行跳转
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {
      path: '/movie',
      component: Movie,
      children: [
        // 动态路由参数
        // todo: 动态路由参数 此处有一个小bug，即通过动态路由参数的id值，在嵌套路由中进行组件的渲染
        // {path: '/movie/:id', component: Movie},
        // {path: 'movie/:id', component: }
        // 没有动态路由参数写法
        {path: '1', component: Movie1},
        {path: '2', component: Movie2},
        {path: '3', component: Movie3}
      ]
    },
    {
      path: '/about',
      component: About,
      // redirect: '/about/tab1',
      children: [
        // 子路由规则
        // 默认子路由（子路由中的重定向）。如果children数组中，某个路由规则的path值为空字符串，则这条路由规则，叫做"默认子路由"
        {path: '', component: Tab1},
        {path: 'tab2', component: Tab2}
      ]
    },
    {path: '/Login', component: Login},
    {path: '/Main', component: Main}
  ]
})

// 为router实例对象，声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发beforeEach的回调函数
// 【全局前置导航守卫】
router.beforeEach(function (to, from, next) {
  // next()函数表示放行的意思
  if (to.path === '/main') { // 证明需要登陆之后，才可以访问成功
    // 访问后台是否有token
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()  // 访问的不是后台，直接放行
  }
})



// 4. 向外共享路由的实例对象
export default router
