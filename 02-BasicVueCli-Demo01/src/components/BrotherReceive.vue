<template>
  <div class="brotherReceive-container">
    <p>兄弟接收方数据：{{ msgFromBrotherSend }}</p>
  </div>
</template>

<script>
import bus from "./eventBus";

export default {
  name: "BrotherReceive",
  data() {
    return {
      msgFromBrotherSend: ''
    }
  },
  // 生命周期函数 created() 此阶段不能操作DOM 但是能获取到相关数据
  created() {
    bus.$on('share', val => {
      this.msgFromBrotherSend = val
    })
  }
}
</script>

<style scoped>
.brotherReceive-container {
  background-color: #3e8f3e;
}

</style>
