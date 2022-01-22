<template>
  <div class="son-container">
    <h3>子组件</h3>
    <hr>

    <p>父组件向子组件传递数据通过props</p>
    <p> {{sonMessage}} , {{sonInfo}}</p>

  </div>
</template>

<script>
export default {
  name: "Son",
  props: ["sonMessage",  "sonInfo"]
}
</script>

<style scoped>

</style>
