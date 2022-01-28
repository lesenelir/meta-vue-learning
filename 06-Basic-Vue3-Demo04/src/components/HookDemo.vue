<template>
  <h2>此时当前鼠标点击的位置:x: {{ point.x }} === y: {{ point.y }}</h2>
</template>

<script>
import usePoint from "../hooks/usePoint"

export default {
  name: "HookDemo",
  setup() {
    let point = usePoint()

    return {
      point
    }
  }
}
</script>

<style scoped>

</style>
