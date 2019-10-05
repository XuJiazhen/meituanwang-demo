/* eslint-disable prefer-const */
// ctx 是服务器的响应内容
// 失败，则 code:-1，成功，则 code:0，其它，则 code:1
// ctx.login() 和 ctx.logout() 是 passport 封装的 API 接口
import Router from 'koa-router'
import Redis from 'koa-redis'
import nodemailer from 'nodemailer' // 使用 nodemailer 进行邮件发送
import User from '../dbs/models/user' // 导入用户模块（可以理解为数据库表）
import Email from '../dbs/config'
import Passport from './utils/passport' // 使用 passport 进行登录验证
import axios from './utils/axios'

// eslint-disable-next-line import/no-mutable-exports
let router = new Router({
  prefix: '/user'
})

let Store = new Redis().client

// 用户注册接口逻辑
router.post('/signup', async (ctx) => {
  let { username, password, email, code } = ctx.request.body

  // 注册验证第一步：用户注册时验证码验证
  // 如果验证码存在，则判断当前验证码与数据库中所存储的验证码是否相同，否则进行拦截，并返回消息“请填写验证码”
  // 如果相同，则判断验证码是否到期，否则返回消息“请填写正确的验证码”
  // 如果到期，则返回消息“验证码已经过期，请重新尝试”，并失败
  if (code) {
    // 获取 Redis 数据库中所存储的验证码与有效时间
    let saveCode = await Store.hget(`nodemail:${username}`, 'code')
    let saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已经过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }

  // 注册验证第二步：验证用户名
  // 通过 username 查找 MongoDB数据库中对应的用户信息
  // 查找数据库中是否已有对应的用户名，是则返回消息“用户名已被注册”，否则开始把用户信息写入数据库
  let user = await User.find({
    username
  })

  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '用户名已被注册'
    }
  }

  // 开始把用户信息写入数据库
  let newuser = await User.create({
    username,
    password,
    email
  })
  // 验证是否写入成功，是则进行登录尝试，否则返回消息”注册失败“
  if (newuser) {
    let res = await axios.post('/users/signin', {
      username,
      password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'Error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})

// 用户登录接口逻辑
// 如果有错误，则返回错误信息，否侧判断 user 是否存在
// 是则返回消息“登录成功“并尝试登录，否则返回对应信息
// eslint-disable-next-line require-await
router.post('/signin', async (ctx, next) => {
  return Passport.authenticate('local', function(err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else if (user) {
      ctx.body = {
        code: 0,
        msg: '登录成功',
        user
      }
      return ctx.login(user)
    } else {
      ctx.body = {
        code: 1,
        msg: info
      }
    }
  })(ctx, next)
})

// 用户登录时验证码验证逻辑
// 如果未到过期时间多次请求，进行拦截并返回消息“请求过于频繁，请一分钟后再尝试”，并失败
router.post('/verify', async (ctx, next) => {
  let username = ctx.request.body.username
  let saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '请求过于频繁，请一分钟后再尝试'
    }
    return false
  }
  // 邮件发送方信息
  let transporter = nodemailer.createTransport({
    // host: Email.smtp.host,
    // port: 587,
    // secure: false,
    service: 'qq',
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  // 邮件接收方信息
  let reciver = {
    // code: Email.smtp.code(),
    code: Math.random()
      .toString(16)
      .slice(2, 6)
      .toUpperCase(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  // 邮件主体
  let mailOptions = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: reciver.email,
    subject: '《慕课网高仿美团网全栈实战》注册码',
    html: `您在《慕课网高仿美团网全栈实战》课程中注册，您的邀请码是${reciver.code}`
  }

  // 发送邮件，如果出错则给出警报（此处只是简单返回一个字符串）
  // 否则就将用户信息（session）写入 Redis 数据库中
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return window.console.log('Error')
    } else {
      Store.hmset(
        `nodemail:${reciver.user}`,
        'code',
        reciver.code,
        'expire',
        reciver.expire,
        'email',
        reciver.email
      )
    }
  })
  // 给出响应
  ctx.body = {
    code: 0,
    msg: '验证码已发送，可能会有延时，有效期一分钟'
  }
})

// 用户退出接口逻辑
router.get('exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

// 获取用户信息
// 如果用户已经登录，则返回用户名和邮箱，否则返回空
router.get('getUser', (ctx, next) => {
  if (ctx.isAuthenticated()) {
    const { username, email } = ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  } else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})

export default router
