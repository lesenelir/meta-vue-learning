# router-demo1

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).



---

### 前端路由

>  Hash地址和组件之间的对应关系



**前端路由工作方式：**

1. 用户点击了页面上的路由链接
2. 导致了URL地址栏中的Hash值发生了变化
3. 前端路由监听到了Hash地址的变化
4. 前端路由把当前的Hash地址对应的组件渲染到浏览器中

>   前端Hash地址(URL)都是以'#'开始的



---

### vue-router

> vue-router可以轻松的管理单页面（SPA）项目中的组件切换



**vue-router的安装和配置**

1. 创建路由模块（router/index.js）
   - src/router/index.js 就是当前项目的路由模块
2. 导入并挂载路由模块
   - 挂载路由模块的意思是router/index.js和main.js进行关联
   - main.js 中 通过 router属性，挂载路由实例
3. 声明路由链接和占位符



**嵌套路由：**

> <router-view> 内添加 一级<router-link> 和 <router-view>

- 定义：

  -  模版内容中有子级路由链接<router-link>
  -  点击子级路由链接显示子级模版内容

- children属性声明子路由规则：

- 方法：

  - 组件中：

    - ```vue
          <!-- 子级路由链接   -->
          <!--  空字符串，默认子路由  -->
          <router-link to="/about">tab1</router-link>
          <router-link to="/about/tab2">tab2</router-link>

          <hr>

          <!-- 子级路由占位符   -->
          <router-view></router-view>

      ```

  - Index.js中：

    - ```javascript
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
       }
      ```





**动态路由匹配：**

- 定义：
  - Hash地址中可变的部分定义为参数项，从而提高路由规则的复用性
- 方法：
  - 在vue-router中使用英文的冒号（:）来定义路由的参数项

```javascript
// 路由中的动态参数模拟，以：进行声明，冒号后面是动态参数的名字
{path: '/movie/:id', component: Movie}

// 可以将以下的两个路由规则进行合并为一个，提高了路由规则的复用性
{path: '/movie/2', component: Movie}
{path: '/movie/3', component: Movie}
```



**声明式导航 & 编程式导航：**

- 声明式导航：
  - 点击链接实现导航的方式
  - <a>.   <router-link> 等跳转链接



- 编程式导航：
  - 调用API方法实现导航的方式
  - 普通网页调用`location.href`跳转到新页面的方式



**vue-router中的编程导航的API：**

1. this.$router.push('hash 地址')
   - 跳转到指定hash地址，并增加一条历史记录

2. this.$router.replace('hash 地址')
   - 跳转到指定hash地址，并替换掉当前的历史记录 （覆盖）

3. this.$router.go(数值 n)



**导航守卫：**

> 导航守卫可以控制路由的访问权限



```
router.beforeEach(function (to, from, next) {
  // next()函数表示放行的意思
  next()
})
```



next()函数三种调用方式：

- 当用户拥有后台主页的访问权限，直接放行： next()
- 当用户没有后台主页的访问权限，强制跳转到登陆页面：next('/login')
- 当用户没有后台主页的访问权限，不允许跳转到后台主页，停留在当前页面：next(false)
