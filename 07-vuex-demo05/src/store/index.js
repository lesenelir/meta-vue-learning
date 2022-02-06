import { createStore } from 'vuex'
// VueX 数据管理框架
// VueX 创建了一个全局唯一的仓库，用来存放全局的数据（共用的数据）
// 核心关键词： 【需要共用的数据】
// 注意点： 修改的数据后，全局共用的数据也一并被修改

export default createStore({
  state: { // 存放全局的数据，任何组件都可以使用这里的数据
    name: 'lesenelir'
  },
  // commit 和 mutations 关联
  mutations: { // mutation 只允许写同步代码，不允许写异步代码
    // 第四步，对应的 mutation 被执行
    change () {
      // 第五步，在 mutation 里面修改数据
      this.state.name = 'Lee'
    },
    changeName (state, str) {
      state.name = str
    }
  },
  // dispatch 与 actions 关联
  actions: { // dispatch通过派发action数据
    // action可以写异步操作
    // 第二步，store感知触发了一个叫做 change 的 action，执行 change 方法
    change () {
      // 第三步，提交一个 commit 触发一个mutation
      setTimeout(() => {
        this.commit('change')
      }, 2000)
    },
    getData (store) {
      setTimeout(() => {
        store.commit('changeName', 'Hello')
      }, 2000)
    }
  },
  modules: {
  }
})
