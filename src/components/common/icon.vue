

<template>
  <svg class="icon"
       aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang='ts' setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  }
})

const iconName = computed(() => {
  return `#icon-${props.name}`
})

</script>

<style scoped lang='stylus'>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

svg {
  font-size: v-bind(size)
}

use {
  color: v-bind(color)
}
</style>
