<template>
  <div class="article-container">
    <h3 v-color="'red'">Article组件</h3>

    <!-- 1. 文章的标题   -->
    <div class="header-box">
      <!--  slot标签只有name属性，叫做：具名插槽  -->
      <slot name="title"></slot>
    </div>

    <!-- 2. 文章的内容   -->
    <div class="content-box">
      <!-- 在封装组件的时，为预留<slot>提供属性对应的值，这种用法，叫做："作用域插槽"  这个值可以在template模版中使用 -->
      <slot name="content" msg="<给我一首歌的时间>"></slot>
    </div>

    <!-- 3. 文章的作者   -->
    <div class="footer-box">
      <slot name="author" :iUser="userInfo"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      userInfo: {
        name: 'Jay',
        age: 18
      }
    }
  }
}
</script>

<style scoped lang="less">

.article-container {
  > div {
    min-height: 150px;
  }

  .header-box {
    background-color: palevioletred;
  }

  .content-box {
    background-color: lightcyan;
  }

  .footer-box {
    background-color: lightseagreen;
  }
}

</style>
