<template>
  <!-- 模版字符串尽可能的简单，主体内容写在JS中 -->
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ salary }}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">增长薪水</button>
</template>

<script>
import {reactive, toRef} from "vue";
// import { toRefs} from "vue"

export default {
  name: "ToRefDemo",
  setup() {
    let person = reactive({
      name: 'lesenelir',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // const name1 = toRef(person, 'name')
    // console.log(name1)

    // const x1 = toRefs(person)   // 把person内的所有属性转换成ref
    // console.log(x1)

    return {
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary'),

      // refs只处理第一层结构
      // ... 是扩展运算符，相当于把对象中的每个部分都拿出来
      // ...toRefs(person)
    }
  }
}
</script>

<style scoped>

</style>
