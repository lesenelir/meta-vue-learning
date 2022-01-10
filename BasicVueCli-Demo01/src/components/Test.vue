<template>
  <div class="test-container">
    <h3 id="myh3">Test vue 组件</h3>
    <p>总共有{{books.length}}本书</p>
    <p id="myP">message 的值是：{{message}}</p>
    <button @click="message += '~'">修改message的值</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ['info'],
  data() {
    return {
      message: 'helllo vue.js',
      // 定义books数组，存储所有图书的列表数据，默认为空数组
      books: []
    }
  },
  methods: {
    show() {
      console.log('调用Test组件的show 方法')
    },
    // 使用Ajax请求图书列表的数据
    initBookList() {
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('load',  () => {
        const result = JSON.parse(xhr.responseText)
        console.log(result)
        this.books = result.data
      })
      xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
      xhr.send()
    }
  },
  // Vue 生命周期函数列举
  // 1. beforeCreate() 创建阶段的第一个生命周期函数   beforeCreate() 组件的props/data/methods尚未被创建，都处于不可用状态
  beforeCreate() {
    // console.log(this.info)
    console.log(this.message)
    // this.show()
  },
  // 2. created() 创建阶段的第二个生命周期函数      created() 组件的props/data/methods已创建好，都处于可用状态，但组件的模版结构尚未生成
  // created() 阶段不能操作DOM
  // created() 阶段很重要   --- 通常通过调用methods方法，发起ajax请求拿数据，并且把请求的数据转存到data中，供template渲染使用
  created() {
    console.log(this.info)
    console.log(this.message)
    this.show()
    // 调用Ajax
    this.initBookList()
  },
  // 3. beforeMount()   创建阶段的第三个生命周期函数    把内存中编译好的HTML结构渲染到浏览器中，此时浏览器中还没有当前组件的DOM结构
  beforeMount() {

  },
  // 4. mounted()  创建阶段的第四个生命周期函数   此时浏览器中已经包含了当前组件的DOM结构
  // 操作浏览器的DOM元素，最早是mounted()阶段
  mounted() {
    const dom = document.querySelector('#myh3')
    console.log(dom)
  },
  // 5. beforeUpdate()  运行阶段的第一个生命周期函数   数据改变时会触发该函数
  // 将要根据变化过后、最新的数据，重新渲染组件的模版结构
  // beforeUpdate() 阶段还没有重新渲染页面
  beforeUpdate() {
    console.log('when data change, beforeUpdate ... ')
    console.log(this.message)
    const dom = document.querySelector('#myP')
    console.log(dom.innerHTML)
  },
  // 6. updated() 运行阶段的第二个生命周期函数      已经根据最新的数据，完成了组件DOM结构的重新渲染
  // 编写代码： 当数据发生变化后，如果要重新操作DOM结构，必须把代码写在updated生命周期阶段
  updated() {
    console.log('when data change, beforeUpdate ... ')
    console.log(this.message)
    const dom = document.querySelector('#myP')
    console.log(dom.innerHTML)
  },
  // 7. beforeDestory()  销毁阶段的第一个生命周期函数      将要销毁此组件，此时尚未销毁，组件还处于正常工作状态
  beforeDestroy() {
  },
  // 8. destoryed()   销毁阶段的第二个生命周期函数       销毁当前组件的数据侦听器、子组件、事件监听
  destroyed() {
  }

}
</script>

<style scoped lang="less">
  .test-container {
    background-color: palevioletred;
    height: 200px;
  }
</style>
