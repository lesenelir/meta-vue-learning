<template>
  <!-- Vue3中的模版文件可以没有div根标签 -->
  <h1>一个人的信息：</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <h4>动物名字：{{ obj.animal }}</h4>
  <h4>动物类型：{{ obj.type }}</h4>
  <h4>爱好：{{ hobby }}</h4>
  <button @click="sayHello">说话</button>
  <br>
  <br>
  <button @click="sayWelcome">vue3项目中调用Vue2的老版methods方法</button>
  <br>
  <br>
  <button @click="test1">测试vue2中methods方法能不能调用setup配置项中的内容</button>
  <br>
  <br>
  <button @click="test2">测试setup配置项能不能访问data、methods（不能访问）</button>
  <br>
  <br>
  <button @click="changeInfo">更改人物数据（ref）</button>
  <br>
  <br>
  <button @click="changeAnimal">更改数据（reactive）</button>

  <hr>
  <!-- vue3中的计算属性使用法则 -->
  <ComputedDemo></ComputedDemo>

  <hr>
  <!-- vue3中的监视属性watch -->
  <WatchDemo></WatchDemo>

  <hr>
  <HookDemo v-if="isShowDemo"></HookDemo>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>

  <hr>
  <ToRefDemo></ToRefDemo>

  <hr>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>

  <hr>
  <!-- 测试Vue3中祖父和孙子之间的数据通信 -->
  <div class="grandFather">
    <h3>我是祖父组件（祖先） ----- {{ carname }} -- {{ price }} </h3>
    <Father></Father>
  </div>


</template>

<script>
// 引入的 除了组件 还有各种组合式API(Composition API)
import {ref, reactive, customRef, toRefs, provide} from "vue"
import ComputedDemo from "./components/ComputedDemo"
import WatchDemo from "./components/WatchDemo"
import HookDemo from "./components/HookDemo"
import ToRefDemo from "./components/ToRefDemo"
import Father from "./components/Father"

export default {
  name: 'App',
  components: {
    ComputedDemo,
    WatchDemo,
    HookDemo,
    ToRefDemo,
    Father
  },
  // vue3中新的配置项， 数据、方法可以写在其中
  data() {
    return {
      sex: "man"
    }
  },
  methods: {
    sayWelcome() {
      alert('Welcome to vue')
    },
    test1() {
      // Vue
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
      console.log(this.sayWelcome)
    }
  },
  setup() {
    // 数据  【数据劫持才是响应式的根基】
    // ref函数把基本数据包装成了ReflImpl，包装对象就存在value中，用的时候，直接在对象的value值中取
    let name = ref('lesenelir')   // ref将数据变为"引用实现的实例对象"，其中有value方法
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '20K'
    })

    let obj = reactive({    // reactive函数
      animal: "猫",
      type: '布偶'
    })

    let hobby = reactive(["抽烟", "喝酒", "烫头"])

    // 显示 / 隐藏
    let isShowDemo = ref(true)

    // 方法
    function sayHello() {
      alert(`我叫${name.value}, 我${age.value}岁`)
    }

    function test2() {
      console.log(name)
      console.log(age)
      console.log(sayHello)
      // 测试Vue3中setup配置项能不能获得data、methods内容
      // Note：setup中不能访问data、methods，因为：执行setup时，还没有执行beforeCreate，数据还没有初始化，拿不到数据
      console.log(this.sex)
      console.log(this.sayWelcome)
    }

    function changeInfo() {   // ref指代对象
      name.value = '李四'
      age.value = 48
      job.value.type = "UI设计师"   // ref处理对象
      job.value.salary = "10K"
    }

    function changeAnimal() {  // reactive指代动物
      obj.animal = "狗"
      obj.type = "警犬"
      hobby[0] = "学习"
    }


    // -----------------------------------------------------------------------------------
    // 自定义Ref
    function MyRef(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            // 从MyRef容器中读取数据
            track()   // 通知Vue追踪一下keyword数据的改变
            return value
          },
          set(newValue) {
            // 从MyRef容器中修改数据
            value = newValue
            trigger() // 通知Vue重新更改模版
          }
        }
      })
    }

    let keyWord = MyRef('hello')

    // -----------------------------------------------------------------------------------
    // 祖先和孙子之间进行 通信

    let car = reactive({
      carname: '奔驰',
      price: '40W'
    })
    provide('sonCar', car)   // 注入， 给自己的后代组件传入数据

    // setup配置项可以返回一个对象，则对象的属性、方法，在模版中均可以直接使用
    return {
      name: name,
      age,
      job,
      obj,
      hobby,
      keyWord,
      ...toRefs(car),
      isShowDemo,
      sayHello,
      test2,
      changeInfo,
      changeAnimal
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.grandFather {
  background-color: gray;
  padding: 10px;
}
</style>
