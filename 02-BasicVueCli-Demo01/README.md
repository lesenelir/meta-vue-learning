# BasicVueCli-Demo01

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

### props属性

- props是自定义组件，允许使用者通过自定义属性，为当前组件指定初始值
- props 的数据可以直接在模版结构中使用

---

### 父组件向子组件传递数据

​	父组件向子组件传递数据通过props属性：

- 父组件中注册子组件

- 父组件使用子组件模版的过程中，通过v-bind属性绑定子组件的props属性

  - ```HTML
    <Son :sonMessage="message" :sonInfo="userinfo"></Son>
    ```

- 传递给子组件的props属性内容可以直接读

  - ```HTML 
    <p>子组件sonMessage的值是 {{ sonMessage }}</p>
    <p>子组件sonInfo的值是 {{ sonInfo }}</p>
    ```

- 传递给子组件的props属性不可以进行修改，如果要进行修改则需要在子组件的data中定义变量存储props值

  - ```python
    data() {
      return {
        sMessage: this.sonMessage,
    		sInfo: this.userinfo
      }
    },
    ```

---

### 子组件向父组件传递数据

子组件向父组件传递数据通过“自定义事件” ---- 自定义是事件  ， 通过 @

- $emit() 触发自定义事件

  - 子组件（发射数据）

    - ```
      this.$emit('numberchange', this.count)
      ```

  - 父组件（接受数据）

    -

      ```vue
      methods: {
        // val 存储子组件通过 $emit向父组件发射自定义事件的子组件中的数据
        getNewCount(val) {
          this.countFromSon = val
        }
      }

      <Son @numberchange="getNewCount"></Son>
      ```

---

### 兄弟组件传递数据

兄弟组件在传递数据的时候分为：发送方和接收方

创建eventBus.js ， 创造Vue 实例，导出 new Vue()

- 发送方

  - bus.$emit()

  - ```HTML 
    methods: {
      sendMsg() {
        // share 是自定义事件 / this.str 是要发送的数据
        bus.$emit('share', this.str)
      }
    }

    <button @click="sendMsg">兄弟结点发送方，点击传送数据</button>
    ```

- 接收方

  - 接收方主要是在created函数中的编写，该阶段props/data/methods已创建好，可以操作数据

  - 通常在created阶段调用methods函数

  - bus.$on()

    ```HTML
    data() {
      return {
        msgFromBrotherSend: ''
      }
    },
    // 生命周期函数 created() 此阶段不能操作DOM 但是能获取到相关数据
    created() {
      bus.$on('share', val => {
        this.msgFromBrotherSend = val
      })
    }
    ```

---

### Vue生命周期

- beforeCreate()      创建阶段的第一个生命周期函数
  - 该阶段 props/data/methods尚未被创建，都处于不可用状态
- created()               创建阶段的第二个生命周期函数
  - 该阶段props/data/methods已创建，但组件的模版结构尚未生成
  - 该阶段通常调用methods方法，发起ajax请求拿数据，并把数据转存在data中，供template渲染使用
- beforeMount()      创建阶段的第三个生命周期函数
  - 该阶段浏览器还没有当前组件的DOM结构
- mounted()            创建阶段的第四个生命周期函数
  - 此时浏览器已有DOM结构
  - 操作浏览器的DOM元素，最早是mounted()
- beforeUpdate()       运行阶段的第一个生命周期函数
  - 数据改变会触发该函数
  - 该阶段还没有重新渲染页面
- updated()                运行阶段的第二个生命周期函数
  - 该阶段已经根据最新的数据，完成了组件的DOM结构的重新渲染
  - 数据发生变化后，如果要重新操作DOM结构，必须把代码写在updated()中
- beforeDestory()      销毁阶段的第一个生命周期函数
- destoryed()              销毁阶段的第二个生命周期函数
