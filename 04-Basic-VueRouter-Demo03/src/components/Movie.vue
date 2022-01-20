<template>
  <div class="movie-container">
    <h3>Movie 组件</h3>

    <hr>

    <!--  动态路由 + 路由嵌套  -->

    <!-- note1: 在hash地址中， / 后面的参数项，叫做"路径参数"。。可以通过 this.$route.params来访问路径参数   -->
    <!-- note2: 在hash地址中， ? 后面的参数项，叫做"查询参数"。。可以通过 this.$route.query来访问查询参数   -->
    <!-- note3: 在this.$route 中，path只是路径部分，fullPath 是完整路径的地址  -->

    <router-link to="/movie/1">钢铁侠 </router-link>
    <router-link to="/movie/2">蜘蛛侠 </router-link>
    <router-link to="/movie/3">蝙蝠侠 </router-link>

    <!-- 子级占位符   -->
    <router-view></router-view>

    <hr>

  </div>
</template>

<script>
export default {
  name: 'Movie'
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
