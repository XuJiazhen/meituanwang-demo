<template>
  <div class="index-container">
    <m-banner></m-banner>
  </div>
</template>

<script>
import MBanner from '../components/index/MBanner'
export default {
  name: 'Index',
  components: {
    MBanner
  }
}
</script>
<style lang="scss">
.index-container {
  width: 1190px;
  margin: 0 auto;
}
</style>
