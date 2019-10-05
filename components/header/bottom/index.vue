<template>
  <div class="btom-container clearfix">
    <div class="btom-inner clearfix">
      <m-title class="m-title"></m-title>
      <m-search class="m-search"></m-search>
    </div>
  </div>
</template>

<script>
import MSearch from './MSearch'
import MTitle from './MTitle'
export default {
  name: 'BottomIndex',
  components: {
    MTitle,
    MSearch
  }
}
</script>

<style scoped lang="scss">
.btom-container {
  position: relative;
  font-size: 12px;
  padding-bottom: 35px;
  .btom-inner {
    width: 1190px;
    margin: 0 auto;
    .m-title,
    .m-search {
      float: left;
      padding-top: 28px;
      z-index: 999;
    }
    .m-title {
      padding-right: 60px;
      padding-bottom: 40px;
      height: 54px;
      min-width: 220px;
    }
    .m-search {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
</style>
