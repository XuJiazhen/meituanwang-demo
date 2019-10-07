<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo" />
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form clearfix">
        <h4 v-if="error" class="tips">{{ error }}</h4>
        <div class="content">
          <p>
            <span style="font-weight: 400; color: #666;">账号登录</span>
          </p>
          <el-input
            v-model="username"
            prefix-icon="profile"
            placeholder="用户名"
          />
          <el-input
            v-model="password"
            prefix-icon="password"
            type="password"
            placeholder="密码"
          />
          <div class="foot">
            <!-- <el-checkbox v-model="checked">7天内自动登录</el-checkbox> -->
            <span>忘记密码？</span>
          </div>
          <el-button class="btn-login" type="success" size="mini" @click="login"
            >登录</el-button
          >
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="site-info">
        <ul>
          <li class="first"><a href="/">关于美团</a></li>
          <li><a href="/">加入我们</a></li>
          <li><a href="/">商家入驻</a></li>
          <li><a href="/">帮助中心</a></li>
          <li class="last"><a href="/">美团手机版</a></li>
        </ul>
      </div>
      <div class="copyright">
        <p>
          ©️<span>2019</span> <a href="/">美团团购</a> meituan.com
          <a href="/">京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import cryptoJS from 'crypto-js'
export default {
  layout: 'login-layout',
  name: 'Login',
  data: () => {
    return {
      // checked: '',
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      const self = this
      this.$axios
        .post('/user/signin', {
          username: window.decodeURIComponent(self.username),
          password: cryptoJS.MD5(self.password).toString()
        })
        .then(({ status, data }) => {
          if (status === 200) {
            if (data && data.code === 0) {
              location.href = '/'
            } else {
              self.error = data.msg
            }
          } else {
            self.error = '服务器出错'
          }
        })
    }
  }
}
</script>

<style lang="scss">
.page-login {
  .login-header,
  .login-footer {
    position: relative;
    width: 980px;
    height: auto;
    margin: 40px auto 30px;
    .logo {
      background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png);
      display: block;
      background-position: 0 !important;
      background-size: contain !important;
      width: 130px;
      height: 47px;
    }
  }
  .login-panel {
    margin: 0 auto;
    width: 980px;
    display: flex;
    .banner {
      margin-right: 115px;
    }
    .form {
      width: 270px;
      position: relative;
      .tips {
        box-sizing: border-box;
        padding: 10px 0;
        border: 1px solid #f5d8a7;
        border-radius: 2px;
        background: #fff6db;
        font-size: 12px;
        position: absolute;
        width: 100%;
        text-align: center;
      }
      .content {
        margin-top: 37px;
      }
    }
    .el-input {
      box-sizing: border-box;
      margin: 8px 0;
      width: 100%;
      .el-input__inner {
        width: 233px;
      }
    }
    .foot {
      margin-top: 10px;
      font-size: 12px;
      span {
        float: right;
        color: #fe8c00;
      }
    }
    .el-input__icon {
      &.profile {
        &:after {
          font-family: 'iconfont-login';
          content: '\e613';
          font-style: normal;
          top: -1px;
          left: 5px;
          position: absolute;
          font-size: 18px;
        }
      }
      &.password {
        &:after {
          font-family: 'iconfont-login';
          content: '\e6bc';
          font-style: normal;
          top: -2px;
          left: 5px;
          position: absolute;
          font-size: 18px;
        }
      }
    }
    .btn-login {
      margin-top: 10px;
      border: none;
      padding: 12px 15px;
      width: 270px;
      color: #222;
      background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      border-width: 0;
      box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
      background-size: 100%;
      font-size: 14px;
      font-weight: 700;
      border-radius: 0;
    }
  }
  .login-footer {
    .site-info {
      margin-bottom: 20px;
      padding: 12px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      overflow: hidden;
      ul {
        float: left;
        width: 594px;
        color: #eee;
        .first {
          padding-left: 0;
        }
        .right {
          border-right: none;
        }
        li {
          float: left;
          margin: 5px 0;
          padding: 0 16px;
          line-height: 14px;
          border-right: 1px solid #eee;
          a {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
    .copyright {
      text-align: left;
      clear: both;
      font-size: 12px;
      font-family: initial;
      color: #999;
      a {
        color: #999;
      }
    }
  }
}
</style>
