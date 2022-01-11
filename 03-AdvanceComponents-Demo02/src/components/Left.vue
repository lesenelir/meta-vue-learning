 <template>
  <div class="left-container">
    <h3>Left 组件 --- {{count}}</h3>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  created() {
    console.log('Left组件被创建了')
  },
  destroyed() {
    console.log('Left组件被销毁了')
  },
  // 以下两个函数都是 keep-alive的生命周期函数
  // 当组件第一次被创建的时候会执行 created、activated 生命周期函数
  // 当组件再次被激活时，只会activated 生命周期函数，不再触发created函数
  activated() {
    console.log('Left组件被激活了，activated')
  },
  deactivated() {
    console.log('Left组件被缓存了，deactivated')
  }


}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
