# AdvanceComponents

## 动态组件 & 插槽 & 自定义指令

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



----

### 动态组件

动态组件决定哪些组件显示，哪些组件不显示

```HTML
<keep-alive include="Left,Right">
  <component :is="comName"></component>
</keep-alive>
```

- include属性 指定哪些组件可以被缓存
-  exclude属性 排除不被缓存的组件    exclude和include 不能同时使用

---

### 插槽

可以在组件的tempplate模块内声明一个插槽区 <slot></slot>

- 插槽有指定内容会覆盖插槽的默认内容

- ```HTML
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
  ```

- 作用域插槽：

  - ```HTML
    <div class="content-box">
      <!-- 在封装组件的时，为预留<slot>提供属性对应的值，这种用法，叫做："作用域插槽"  这个值可以在template模版中使用 -->
      <slot name="content" msg="<给我一首歌的时间>"></slot>
    </div>
    ```

  - ```HTML
    <!--   作用域插槽是接受到的值是对象形式   -->
    <template v-slot:content="obj">
      <div>
        <p>{{obj}}</p>
        <p>{{obj.msg}}</p>
        <p>雨淋湿了天空</p>
        <p>毁的很讲究</p>
      </div>
    </template>
    ```

  - 作用域插槽接受到的是对象形式

