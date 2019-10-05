<template>
  <div>
    <header>
      <div class="header">
        <a href="/" class="site-logo"></a>
        <span class="login-block">
          已有美团账号？
          <button class="login">登录</button>
        </span>
      </div>
    </header>
    <nuxt />
    <footer>
      <div class="footer">
        <p class="copyright">
          <a href="/">©meituan.com</a> <a href="/">京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
header {
  border-bottom: 2px solid #d8d8d8;
  background: #fff;
  .header {
    padding: 10px 0;
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
    color: #666;
    .site-logo {
      float: left;
      width: 128px;
      height: 36px;
      background: url('https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png')
        no-repeat;
      background-size: contain;
    }
    .login-block {
      float: right;
      line-height: 36px;
      font-weight: 400;
      display: block;
      .login {
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border: none;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        background-size: 100%;
        padding: 3px 10px;
        line-height: 1.5;
        letter-spacing: 0.1em;
        border-radius: 2px;
        padding: 3px 10px;
      }
    }
  }
}
footer {
  border-top: 1px solid #d8d8d8;
  .footer {
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
}
</style>
