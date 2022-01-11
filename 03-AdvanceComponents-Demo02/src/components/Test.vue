<template>
  <div class="test-container">
    <h3>Test 插槽使用 组件</h3>
    <hr>
    <!--  声明一个插槽区  -->
    <!--  vue规定： 每一个slot插槽，都要有一个name名称，如果忽略了slot的属性，则默认name="default" -->
    <slot name="default">这是default的插槽的默认内容，如果插槽有指定内容，这段内容会被覆盖</slot>
  </div>
</template>

<script>
// 插槽的使用

export default {}
</script>

<style lang="less">
.test-container {
  padding: 0 20px 20px;
  background-color: cadetblue;
  min-height: 250px;
  flex: 1;
}
</style>
