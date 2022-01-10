<template>
  <div class="brotherSend-container">
    <button @click="sendMsg">兄弟结点发送方，点击传送数据</button>
  </div>
</template>

<script>
import bus from './eventBus'

export default {
  name: "BrotherSend",
  data() {
    return {
      str: '兄弟结点间传递数据'
    }
  },
  methods: {
    sendMsg() {
      // share 是自定义事件 / this.str 是要发送的数据
      bus.$emit('share', this.str)
    }
  }
}
</script>

<style scoped>
.brotherSend-container {
  background-color: #a6e1ec;
}
</style>
