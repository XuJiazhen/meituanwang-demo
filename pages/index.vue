<template>
  <div class="main">
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
@import '../assets/css/index.scss';
</style>
