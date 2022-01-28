<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <br>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
  <br>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪水：{{ person.job.j1.salary }}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪水</button>

</template>

<script>
import {reactive, ref, watch, watchEffect} from "vue";

export default {
  name: "WatchDemo",
  // Vue2中的watch配置属性
  // watch: {
  //   sum: {
  //     immediate: true,
  //     deep: true,
  //     handler(newValue, oldValue) {
  //       console.log('sum的值发生了变化', newValue, oldValue)
  //     }
  //   }
  // },
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref("Hello")
    let person = reactive({
      name: 'lesenelir',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // 情况一：监视ref所定义的一个响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log('sum的值发生了变化', newValue, oldValue)
    })

    // 情况二：监视ref所定义的多个响应式数据
    // watch 第一个参数是监视数据；第二个参数是毁掉函数；第三个参数是配置项（比如立即执行）
    watch([sum, msg], (newValue, oldValue) => {
      console.log('sum或msg变了', newValue, oldValue)
    }, {immediate: true})

    // 情况三、监视reactive所定义的一个响应式数据的全部属性
    /*
     Note: 注意：
      1. 【BUG】注意此处无法正确获得oldValue， 只有reactive确定的值才有效
      2.  强制开启了深度监视（deep配置无效）
     */
    watch(person, (newValue, oldValue) => {
      console.log('sum或msg变了', newValue, oldValue)
    }, {deep: false})  // 此处的deep配置无效

    // 情况四、监视reactive所定义的一个响应式数据中的某个属性
    watch(() => person.age, (newValue, oldValue) => {
      console.log('person中的age发生了变化', newValue, oldValue)
    })

    // 情况五、监视reactive所定义的一个响应式数据中的某些属性（情况二、情况四合集）
    watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log('person中的name或age发生了变化', newValue, oldValue)
    })

    // 情况六、特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('person中的job发生了变化', newValue, oldValue)
    }, {deep: true})   // 此处监视的是reactive定义对象中的某个"对象"属性，所以deep配置有效


    // watchEffect()函数 监视，但不指明监视哪个属性，直接写回调函数，
    // 回调函数中监视哪个属性就监视哪个属性
    watchEffect(() => {
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect配置的回调执行了, sum的值是', x1, ',salary的值是：', x2)
    })

    // 返回
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style scoped>

</style>
