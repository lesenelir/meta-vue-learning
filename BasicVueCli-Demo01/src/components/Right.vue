<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr>
    <!-- 使用Vue模版的时候才是真正创建该模版的实例   -->
    <MyCount :init="6"></MyCount>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
