<template>
  <div class="son-container">
    <p>子组件sonMessage的值是 {{ sonMessage }}</p>
    <p>子组件sonInfo的值是 {{ sonInfo }}</p>
    <p>子组件Count的值是： {{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  // 子组件的props属性获得父组件的数据
  // 父组件传递给子组件的值是通过props传递，当需要修改的时候，要用data属性的变量接受，不能直接修改props的值
  props: ['sonInfo', 'sonMessage'],
  data() {
    return {
      // 子组件的值count， 传递给父组件
      count: 0
    }
  },
  methods: {
    add() {
      this.count++
      // 修改数据时， 通过 $emit() 触发自定义事件
      // 向父组件发射"numberchange"的自定义事件，父组件拿到的值是子组件的count
      this.$emit('numberchange', this.count)
    }
  }
}
</script>

<style scoped>

</style>
