<template>
  <div>
    <top-index></top-index>
    <bottom-index></bottom-index>
  </div>
</template>

<script>
import TopIndex from './top/index'
import BottomIndex from './bottom/index'

export default {
  name: 'CustomHeader',
  components: {
    TopIndex,
    BottomIndex
  }
}
</script>

<style lang="scss"></style>
