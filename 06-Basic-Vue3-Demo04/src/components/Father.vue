<template>
  <div class="father">
    <h3>我是父亲组件(父亲) </h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from "./Son"

export default {
  name: "Father",
  components: {
    Son
  }
}
</script>

<style scoped>
.father {
  background-color: skyblue;
  padding: 10px;
}
</style>
