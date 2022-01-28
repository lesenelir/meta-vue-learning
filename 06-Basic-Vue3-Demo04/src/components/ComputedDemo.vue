<template>
  <h1>一个人的信息：</h1>
  姓：<input type="text" v-model="person.firstName">
  名：<input type="text" v-model="person.lastName">
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
import {reactive} from "vue";
import {computed} from "vue";

export default {
  name: "ComputedDemo",
  setup() {
    // 数据
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })
    // 计算属性
    // let fullName = computed(() => {         // 计算属性不规范写法
    //   return person.firstName + '-' + person.lastName
    // })

    // person.fullName = computed(() => {         // 计算属性简写形式（没有考虑修改情况，计算属性是可以修改的）
    //   return person.firstName + '-' + person.lastName
    // })

    //计算属性完整写法，考虑读和写
    person.fullName = computed({
      get(){
        return person.firstName + '-' + person.lastName
      },
      set(value){
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })

    return {
      person,
      // fullName
    }
  }
}
</script>

<style scoped>

</style>
