<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <hr />

    <!--  当安装配置了vue-router后，就可以使用 router-link 来替代普通的a链接了  -->

    <!--    <a href="#/home">首页</a>-->
    <router-link to="/home">首页</router-link>
<!--    <a href="#/movie">电影</a>-->
    <router-link to="/movie">电影</router-link>
<!--    <a href="#/about">关于</a>-->
    <router-link to="/about">关于</router-link>

    <hr />
    <!--  只要在项目中安装配置了 vue-router，就可以使用 router-view 这个组件了  -->
    <!--  作用：占位符 (出口) -->
    <router-view></router-view>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
