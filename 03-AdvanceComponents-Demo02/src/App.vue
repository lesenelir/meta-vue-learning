<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <p v-color="'red'">测试私有自定义指令</p>
    <button @click="color = 'green'">改变根组件标题的颜色值</button>

    <hr/>

    <Article>
      <template v-slot:title>
        <h3>一首歌</h3>
      </template>

      <!--   作用域插槽是接受到的值是对象形式   -->
      <template v-slot:content="obj">
        <div>
          <p>{{obj}}</p>
          <p>{{obj.msg}}</p>
          <p>雨淋湿了天空</p>
          <p>毁的很讲究</p>
        </div>
      </template>

      <template v-slot:author="{iUser}">    <!--  {iUser}使用的是对象的解构赋值   -->
        <div>作者：周杰伦</div>
        <p>{{iUser.name}}</p>
        <p>{{iUser.age}}</p>
      </template>

    </Article>


    <hr>
    <button @click="comName='Left'">展示Left</button>
    <button @click="comName='Right'">展示Right</button>

    <div class="box">


      <!-- 渲染 Left 组件和 Right 组件 -->

      <!--      <Left></Left>-->
      <!--      <Right></Right>-->


      <!--   一、动态组件    -->

      <!--  component代表： 组件的占位符  （动态组件）  -->
      <!--  is属性的值，代表要渲染组件的名字    -->
<!--      <component :is="comName"></component>-->

      <!--  keep-alive 可以把内部的组件进行缓存，而不是销毁组件    -->
      <!--  include属性 指定哪些组件可以被缓存 -->
      <!--  exclude属性 排除不被缓存的组件    exclude和include 不能同时使用 -->
      <keep-alive include="Left,Right">
        <component :is="comName"></component>
      </keep-alive>

      <!--   二、插槽    -->

      <Test>
        <!--  在组件内的html代码段会填充到组件的"插槽区域"  -->
        <!--  默认情况下，使用组件的时，提供的内容都会填充到名字为default的插槽中  -->
        <!--  v-slot指令可以把内容填充到指定名称的插槽中    -->
        <!--  v-slot:xxx  只能用在template模版中，不能直接用在元素身上  -->
        <!--  v-slot: 指令的简写形式是#    -->
        <template v-slot:default>
          <p>这是在Left组件的内容区域，声明的p标签</p>
        </template>
      </Test>

      <hr>

    </div>
  </div>
</template>

<script>
import Left from "./components/Left";
import Right from "./components/Right";
import Test from "./components/Test";
import Article from "./components/Article";

export default {
  data() {
    return {
      //
      comName: 'Left',
      color: 'blue'
    }
  },
  components: {
    Left,
    Right,
    Test,
    Article
  },
  // 定义 - 私有自定义指令结点
  directives: {
    // 定义名为color的指令，指向一个配置对象
    color: {
      // 当指令【第一次】被绑定到元素上的时候，会立即触发bind函数
      // 形参中的el表示当前指令所绑定的那个DOM对象
      // 形参中的binding ,会把数据 自定义指令中的"值"传递给binding
      // bind函数只调用一次， 即 指令第一次被绑定到元素时被调用
      bind(el, binding) {
        console.log(binding)
        el.style.color = binding.value
      },
      // 每次DOM更新时被调用
      update(el, binding) {
        el.style.color = binding.value
      }
    }
  }

}

</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}

.box {
  display: flex;
}
</style>
