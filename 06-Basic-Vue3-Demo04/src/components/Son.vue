<template>
  <div class="son">
    <h3>我是Son组件（孙子） ----- {{ car.carname }} --- {{ car.price }} </h3>
  </div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "Son",
  setup() {
    let car = inject('sonCar')    //   不经过逐层（父亲组件）传递，
    return {
      car
    }
  }
}
</script>

<style scoped>
.son {
  background-color: green;
  padding: 10px;
}
</style>
