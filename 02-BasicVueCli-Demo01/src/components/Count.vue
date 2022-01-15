<template>
  <div>
    <h5>Count组件</h5>
    <p>count的值是{{ count }}</p>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  // props是自定义组件，允许使用者通过自定义属性，为当前组件指定初始值
  // 合理使用props可以提高组件的复用性
  // props 的数据可以直接在模版结构中使用
  // 注意： props的值是"只读"的，程序员不能直接修改props的值
  // props: ['init'],

  // props声明为对象形式可以更多的进行操作（可以定义默认值）
  props: {
    // 自定义属性A
    // 自定义属性B
    init: {
      // default默认值，如果外界使用Count组件的时候，没有传递init属性，则默认值生效
      default: 0,
      // type 定义绑定属性的类型
      type: Number,
      // required 必填项校验
      required: false
    }
  },
  data() {
    return {
      // 如果要修改props的值，只需要把props的值转存到data变量中
      // 由于props的值是只读的，不能修改，所以用一个变量参数去存储该值
      count: this.init
    }
  },
}
</script>

<style scoped lang="less">

</style>
