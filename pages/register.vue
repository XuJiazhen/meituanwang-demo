<template>
  <div class="content">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="昵称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item class="nopadding">
        <el-button size="mini" class="sendCode" type="primary" @click="sendCode"
          >免费获取邮箱动态码</el-button
        >
        <span class="status">{{ statusMsg }}</span>
      </el-form-item>
      <el-form-item label="邮箱动态码" prop="code">
        <el-input v-model="ruleForm.code" maxlength="4"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="ruleForm.pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="rpwd">
        <el-input v-model="ruleForm.rpwd" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="register" @click="register"
          >同意以下协议并注册</el-button
        >
        <div class="error">{{ error }}</div>
      </el-form-item>
      <a
        class="protocol"
        href="http://www.meituan.com/about/terms"
        target="_blank"
        >《美团网用户协议》</a
      >
    </el-form>
  </div>
</template>

<script>
import cryptoJS from 'crypto-js'
export default {
  layout: 'register-layout',
  name: 'Register',
  data() {
    return {
      statusMsg: '',
      error: '',
      ruleForm: {
        name: '',
        email: '',
        pwd: '',
        rpwd: '',
        code: ''
      },
      rules: {
        name: [
          {
            required: true,
            type: 'string',
            message: '请输入昵称',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            type: 'email',
            message: '请输入邮箱',
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ],
        rpwd: [
          {
            required: true,
            message: '确认密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error('两次输入的密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        code: [{ required: true, message: '请输入动态码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 邮箱验证码验证逻辑
    // 需要获取表单的 name 和 email 字段是否通过验证，是则用 namePass 和 emailPass 进行存储
    // 如果昵称和邮箱通过验证，则向 /user/verify 接口发起post请求，并传递参数昵称和邮箱
    // 请求成功后使用 .then() 拿到响应体，响应体对应 user 接口 /verify，
    // 也可以使用 async 和 await 的方式（暂时不知道怎样写）
    // 使用解构赋值的方式拿到响应体中 status 和 data 变量
    // 需要判断 status 是否等于 200 以及 data 是否存在，以及 data.code 是否等于 0
    // 都为是，则表示请求成功，如果成功就要开始 expire 倒计时，我设置的是 60 秒的过期时间
    // 否则在消息框给出服务端也就是 /user/verify 接口给出的响应消息
    sendCode() {
      const self = this
      let namePass
      let emailPass
      if (self.timerid) {
        this.$refs.ruleForm.validateField('name', (valid) => {
          namePass = valid
        })
      }
      self.statusMsg = ''
      if (namePass) {
        return false
      }
      this.$refs.ruleForm.validateField('email', (valid) => {
        emailPass = valid
      })
      // 当昵称和邮箱通过验证后执行后面的操作，这里之所以取反，
      // 是因为 validateField() 的回调函数中参数 valid 有值会返回 false，没值才返回 true
      if (!namePass && !emailPass) {
        self.$axios
          .post('/user/verify', {
            username: encodeURIComponent(self.ruleForm.name),
            email: self.ruleForm.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60
              self.statusMsg = `验证码已发送，剩余${count--}秒`
              self.timerid = setInterval(function() {
                self.statusMsg = `验证码已发送，剩余${count--}秒`
                if (count === 0) {
                  clearInterval(self.timerid)
                }
              }, 1000)
            } else {
              self.statusMsg = data.msg
            }
          })
      }
    },
    // 注册验证逻辑
    // 判断当前表单是否通过验证，是则向 /user/singuo 发起 post 请求并传递用户信息
    // 请求后使用 then() 拿到服务端的响应体，判断 status 是否等于200，
    // 是则验证 data 是否存在，data.code 是否等于0，
    // 否则给出状态码，或跳转到错误页面
    // 都为是则跳转到登录接口，此处还可以直接跳转到登录状态，都为否则给出响应信息
    register() {
      const self = this
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$axios
            .post('/user/signup', {
              username: window.encodeURIComponent(self.ruleForm.name),
              // 使用 MD5 验证后会得到一个数组，所以需要转换为字符串
              password: cryptoJS.MD5(self.ruleForm.pwd).toString(),
              email: self.ruleForm.email,
              code: self.ruleForm.code
            })
            .then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  location.href = '/login'
                } else {
                  self.error = data.msg
                }
              } else {
                self.error = `服务器出错，错误码：${status}`
              }
              // 添加定时器清空 error 中信息，否则用户再次操作，此处仍会有错误信息误导
              setTimeout(function() {
                self.error = ''
              }, 1000)
            })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  margin: 0 auto 30px;
  padding-top: 30px;
  width: 980px;
  min-height: 300px;
  .nopadding {
    padding: 0;
  }
  .sendCode {
    display: inline-block;
    color: #333 !important;
    background-color: #dedede;
    border: 1px solid #e3e3e3;
    border-bottom: 1px solid #aaa;
    padding: 3px 8px;
    font-size: 12px;
    background-size: 100%;
    background-image: linear-gradient(to bottom, #f7f7f7, #dedede);
    line-height: normal;
    font-weight: 400;
  }
  .sendCode:hover {
    color: #333;
    background-color: #e9e9e9;
    border: 1px solid #e5e5e5;
    border-bottom: 1px solid #b3b3b3;
    background-size: 100%;
    background-image: linear-gradient(to bottom, #fff, #e9e9e9);
  }
  .register {
    color: #222;
    background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
    border-width: 0;
    box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
    background-size: 100%;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
    user-select: none;
    cursor: pointer;
  }
  .protocol {
    color: #fe8c00;
    font-size: 13px;
    padding: 3px 10px 3px 100px;
  }
  .status {
    color: #f76120;
    font-size: 13px;
  }
}
</style>
