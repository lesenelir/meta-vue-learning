<template>
  <div class="father-container">
    <!--  3. 使用组件  -->
    <!--  父组件中使用子组件，需要先注册组件（或者子组件已全局注册） -->
    <!--  如果需要通过父组件向子组件传递数据，可以通过子组件的props自定义属性来完成  -->
    <Son :sonMessage="message" :sonInfo="userinfo"></Son>

    <hr>

    <!--  子组件向父组件传递数据用： 自定义事件  /  自定义事件是事件，使用时用@ 来绑定 -->
    <Son @numberchange="getNewCount"></Son>
    <p>父组件的countFromSon的值是 {{ countFromSon }} </p>

  </div>
</template>

<script>
// 1. 导入组件
import Son from "./Son";

export default {
  name: "Father",
  // 2.注册组件
  components: {
    Son
  },
  data() {
    return {
      userinfo: {
        username: 'lesenelir',
        age: 18
      },
      message: 'Hello 父组件向子组件传递数据用props 自定义属性',
      // 定义 countFromSon 来接收子组件传递过来的数据
      countFromSon: 0
    }
  },
  methods: {
    // val 存储子组件通过 $emit向父组件发射自定义事件的子组件中的数据
    getNewCount(val) {
      this.countFromSon = val
    }
  }
}
</script>

<style scoped>

</style>
