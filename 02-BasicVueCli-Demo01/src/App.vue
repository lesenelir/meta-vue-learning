<!--
    使用组件三个步骤：
1. 使用import语法导入需要的组件
2. 使用components节点注册组件（注册的是私有子组件）
3. 以标签形式使用刚才注册的组件
-->
<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />

    <Test info="Hello"></Test>

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!--  3. 标签形式使用注册的组件  -->
      <Left></Left>
      <Right></Right>

      <!--  通常来说，APP.vue中只渲染父组件的内容，子组件的内容都在父亲组件渲染过程中显示在页面上  -->
      <Father></Father>

      <!--  兄弟结点传递数据演示    -->
      <BrotherSend></BrotherSend>
      <BrotherReceive></BrotherReceive>

      <!--  ref属性    -->
      <h1 ref="myH1">测试ref属性 ref直接获取DOM元素</h1>
      <button @click="refChange">点击打印切换样式</button>

    </div>
  </div>
</template>

<script>
// 1. 导入需要的组件
import Left from "@/components/Left";
import Right from "@/components/Right";
import Test from "./components/Test";
import Father from "./components/Father";
import BrotherSend from "./components/BrotherSend";
import BrotherReceive from "./components/BrotherReceive";

export default {
  // 2. components节点注册
  components: {
    'Left': Left,
    Right,
    Test,
    Father,
    BrotherSend,
    BrotherReceive
  },
  methods: {
    refChange() {
      // console.log(this.$refs.myH1)
      this.$refs.myH1.style.color = 'red'

    }
  }

}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
