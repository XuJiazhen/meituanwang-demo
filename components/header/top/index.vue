<template>
  <div class="top-container clearfix">
    <div class="top-inner">
      <m-info class="m-info"></m-info>
      <m-nav class="m-nav"></m-nav>
    </div>
  </div>
</template>

<script>
import MInfo from './MInfo'
import MNav from './MNav'

export default {
  name: 'TopIndex',
  components: {
    MInfo,
    MNav
  }
}
</script>

<style lang="scss">
.top-container {
  background-color: #f8f8f8;
  font-size: 12px;
  color: #999;
  .top-inner {
    width: 1190px;
    margin: 0 auto;
    height: 40px;
    .m-info {
      float: left;
      padding-top: 11px;
    }
    .m-nav {
      float: right;
    }
    a {
      color: #999;
    }
    a:hover {
      color: #fe8c00;
    }
    .active {
      color: #fe8c00;
    }
  }
}
</style>
