<template>
  <div class="index-container">
    <m-banner class="m-banner clearfix"></m-banner>
    <m-scenes class="m-scenes"></m-scenes>
  </div>
</template>

<script>
import MBanner from '../components/index/MBanner'
import MScenes from '../components/index/MScenes'

export default {
  name: 'Index',
  components: {
    MBanner,
    MScenes
  }
}
</script>
<style lang="scss">
.index-container {
  width: 1190px;
  margin: 0 auto;
  .m-banner {
    position: relative;
  }
  .m-scenes {
    margin: 40px auto;
  }
}
</style>
