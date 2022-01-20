<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <hr />

    <!-- 创建动态组件 -->
    <component :is="comName"></component>

<!--    <Home></Home>-->
<!--    <Movie></Movie>-->
<!--    <About></About>-->
  </div>
</template>

<script>
// 导入组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

export default {
  name: 'App',
  data() {
    return {
      // 动态组件的位置，要展示组件的名字，值必须是字符串
      comName: 'Home'
    }
  },
  created() {
    // 只要当前App组件一被创建，就立即监听 window 对象的onhashchange事件
    window.onhashchange = () => {
      // console.log(location.hash)
      switch (location.hash) {
        case '#/home':
          this.comName = 'Home'
          break
        case '#/movie':
          this.comName = 'Movie'
          break
        case '#/about':
          this.comName = 'About'
          break
      }
      // console.log(location.hash.slice(2).toUpperCase())
    }
  },
  // 注册组件
  components: {
    Home,
    Movie,
    About
  }
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
