module.exports = {
  // 配置 MongoDB 数据库地址
  dbs: 'mongodb://127.0.0.1:27017/meituan',
  // 配置 Redis 数据库地址，使用函数则不能修改，只读
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return '6379'
    }
  },
  // 配置 SMTP 协议
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1165289303@qq.com'
    },
    get pass() {
      return 'ojrnsyuhtqcdgffd'
    },
    // 获取验证码
    get code() {
      return () => {
        Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase()
      }
    },
    // 验证码过期时间，1分钟
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 1000
      }
    }
  }
}
