<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <hr>

    <button @click="gotoAbout">通过push 跳转到关于页面</button>
    <button @click="gotoAbout2">通过replace 跳转到关于页面</button>

    <router-link to="/main">访问后台主页</router-link>


  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoAbout() {
      // 通过编程式导航API跳转到指定页面
      this.$router.push('/about')
    },
    gotoAbout2() {
      this.$router.replace('/about')   // 覆盖
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
