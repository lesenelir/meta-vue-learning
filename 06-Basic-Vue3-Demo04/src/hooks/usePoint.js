// hook 是JS模块化，所以vue3可以把setup函数中使用的Composition API进行封装
import {onBeforeMount, onMounted, reactive} from "vue";

export default function () {
  let point = reactive({
    x: 0,
    y: 0
  })

  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
    // console.log(event.pageX, event.pageY)
  }

  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeMount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
