

<template>
  <div>
    {{ home }}
    <button @click="router.push('/other')">goOther</button>
    <button @click="router.push('/rocket')">goRocket</button>
  </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const home = ref('home')
</script>

<style scoped lang='scss'>

</style>
