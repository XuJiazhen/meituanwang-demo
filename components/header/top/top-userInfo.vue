<template>
  <div class="userinfo-container">
    <div class="city-container">
      <span class="el-icon-location"></span>
      <span>{{ city }}</span>
      <a href="/" class="changeCity">切换城市</a>
      <div class="near-city">
        [
        <a href="/" class="city-guess active">新津县</a>
        <a href="/" class="city-guess">崇州</a>
        <a href="/" class="city-guess">彭州</a>
        ]
      </div>
    </div>
    <div class="user-container">
      <template v-if="user">
        欢迎您，<nuxt-link to="/">{{ user }}</nuxt-link>
      </template>
      <template v-else>
        <nuxt-link to="/" class="active">立即登录</nuxt-link>
        <nuxt-link to="/">注册</nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCity',
  data() {
    return {
      city: '成都',
      user: 'AAA'
    }
  }
}
</script>

<style scoped lang="scss">
.userinfo-container {
  display: flex;
  align-items: center;
  color: #666;
  .city-container {
    display: flex;
    align-items: center;
    color: #666;
    .changeCity {
      background-color: #f4f4f4;
      color: #666;
      border: 1px solid #e5e5e5;
      border-radius: 2px;
      margin: 0 4px;
      padding: 0 2px;
    }
  }
  .user-container {
    margin-left: 15px;
  }
}
</style>
