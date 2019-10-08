<template>
  <div>
    <div class="r-header">
      <div>
        <a href="/" class="site-logo"></a>
        <span class="login-block">
          <span class="desc">已有美团账号？</span>
          <button class="login"><a href="/login">登录</a></button>
        </span>
      </div>
    </div>

    <nuxt />

    <div class="r-footer">
      <p class="copyright">
        <a href="/">©meituan.com</a> <a href="/">京ICP证070791号</a>
        京公网安备11010502025545号
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.r-header {
  border-bottom: 2px solid #d8d8d8;
  background: #fff;
  div {
    padding: 10px 0;
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
    color: #666;
    .site-logo {
      float: left;
      width: 128px;
      height: 35px;
      background: url('https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png')
        no-repeat;
      background-size: contain;
    }
    .login-block {
      float: right;
      line-height: 35px;
      font-weight: 400;
      display: block;
      .desc {
        display: inline-block;
        font-size: 12px;
      }
      .login {
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border: none;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        background-size: 100%;
        border-radius: 2px;
        display: inline-block;
        letter-spacing: 0.1em;
        padding: 5px 10px;
        cursor: pointer;
        a {
          color: #222;
        }
      }
    }
  }
}

.r-footer {
  border-top: 1px solid #d8d8d8;
  overflow: hidden;
  padding-top: 20px;
  text-align: center;
  .copyright {
    color: #999;
    font-size: 13px;
    a {
      color: #999;
    }
  }
}
</style>
