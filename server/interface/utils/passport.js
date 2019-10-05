/* eslint-disable prefer-const */
import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import User from '../../dbs/models/user'

passport.use(
  new LocalStrategy(async function(username, password, done) {
    let result = await User.findOne({
      username
    })

    if (result != null) {
      if (result.password === password) {
        return done(null, result)
      } else {
        return done(null, false, '密码错误')
      }
    } else {
      return done(null, false, '用户不存在')
    }
  })
)

// 将用户信息序列化到 session 对象中
passport.serializeUser(function(user, done) {
  done(null, user)
})
// 从 session 对象中反序列化出用户信息
passport.deserializeUser(function(user, done) {
  return done(null, user)
})

export default passport
