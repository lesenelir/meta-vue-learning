<template>
  <div class="father-container">
    <h3>父级组件</h3>
    <Son :son-info="userinfo" :son-message="message"></Son>
  </div>
</template>

<script>
// 通过模块化系统局部注册组件
import Son from "./Son"
export default {
  name: "Father",
  data() {
    return {
      message: "Father's message",
      userinfo: {
        name: "lesenelir",
        age: 18
      }
    }
  },
  components: {
    Son
  }
}
</script>

<style scoped>

</style>
