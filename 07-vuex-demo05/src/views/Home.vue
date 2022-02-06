<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { useStore } from 'vuex'
import { toRefs } from 'vue'

export default {
  name: 'Home',
  setup () {
    const store = useStore()
    const { name } = toRefs(store.state)
    return {
      name
    }
  }
}
</script>
