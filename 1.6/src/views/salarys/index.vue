<template>
  <div>666szxczwadwad6666</div>
</template>

<script>
import { ref, reactive, toRefs, onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup(props, ctx) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const data = reactive({})
    return { ...toRefs(data) }
  }
}
</script>

<style lang="scss" scoped></style>
