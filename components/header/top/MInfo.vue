<template>
  <div>
    <div class="city">
      <span class="el-icon-location"></span>
      <span>{{ $store.state.geo.position.city }}</span>
      <a href="/" class="changeCity">切换城市</a>
      <div class="near-city">
        [
        <a href="/" class="city-guess active">新津县</a>
        <a href="/" class="city-guess">崇州</a>
        <a href="/" class="city-guess">彭州</a>
        ]
      </div>
    </div>
    <div class="user">
      <template v-if="user">
        欢迎您，<nuxt-link to="/" style="margin-left: 0; margin-right: 5px;">{{
          user
        }}</nuxt-link>
        [<nuxt-link to="/exit" style="margin-left: 0;">退出</nuxt-link>]
      </template>
      <template v-else>
        <nuxt-link
          to="/login"
          class="active"
          style="margin-left: 0; margin-right: 5px;"
          >立即登录</nuxt-link
        >
        <nuxt-link to="/register">注册</nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MInfo',
  data() {
    return {
      user: ''
    }
  },
  async mounted() {
    const {
      status,
      data: { user }
    } = await this.$axios.get('/user/getUser')
    if (status === 200) {
      this.user = user
    }
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  align-items: center;
  color: #666;
  .city {
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
    .near-city {
      a {
        margin: 0 4px;
      }
    }
  }
  .user {
    margin-left: 15px;
    a {
      margin-left: 10px;
    }
  }
}
</style>
