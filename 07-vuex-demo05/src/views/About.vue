<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from 'vuex'
import { toRefs } from 'vue'

export default {
  name: 'About',
  // computed: {
  //   myName () {
  //     return this.$store.state.name
  //   }
  // },
  // methods: {
  //   handleClick () {
  //     // 修改vuex中的数据，第一步，派发一个action
  //     this.$store.dispatch('change')
  //   }
  // },
  setup () {
    const store = useStore()
    const { name } = toRefs(store.state)

    const handleClick = () => {
      store.dispatch('getData')
    }

    return {
      name,
      handleClick
    }
  }
}
</script>
