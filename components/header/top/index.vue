<template>
  <div class="top-container">
    <top-userinfo class="top-userinfo"></top-userinfo>
    <top-navbar class="top-navbar"></top-navbar>
  </div>
</template>

<script>
import TopUserinfo from './top-userInfo'
import TopNavbar from './top-navbar'

export default {
  name: 'TopIndex',
  components: {
    TopUserinfo,
    TopNavbar
  }
}
</script>

<style lang="scss">
.top-container {
  font-size: 12px;
  color: #999;
  width: 1190px;
  margin: 0 auto;
  height: 40px;
  .top-userinfo {
    float: left;
    padding-top: 11px;
  }
  .top-navbar {
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
</style>
