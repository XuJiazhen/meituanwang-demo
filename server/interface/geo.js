import Router from 'koa-router'
// import Province from '../dbs/models/province'
import axios from './utils/axios'

const router = new Router({
  prefix: '/geo'
})

// 从 http://cp-tools.cn 获取当前城市接口
router.get('/getPosition', async (ctx) => {
  const {
    status,
    data: { province, city }
  } = await axios.get('http://cp-tools.cn/geo/getPosition')

  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

// 从本地数据库或 http://cp-tools.cn 获取菜单数据，由于之前我把这块数据写死了，所以获取但是不用
router.get('/menu', async (ctx) => {
  // 获取本地数据库数据，需要导入，参考 province.js
  // const result = await Menu.finOne()
  // ctx.body = {
  //   menu: result.menu
  // }

  // 获取线上数据
  const {
    status,
    data: { menu }
  } = await axios.get('http://cp-tools.cn/geo/menu')
  if (status === 200) {
    ctx.body = {
      menu
    }
  } else {
    ctx.body = {
      menu: []
    }
  }
})

// 从本地数据库或 http://cp-tools.cn 获取省份数据
router.get('/province', async (ctx) => {
  // const result = await Province.find()
  // ctx.body = {
  //   province: result.map((item) => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  const {
    status,
    data: { province }
  } = await axios.get('http://cp-tools.cn/geo/province')
  if (status === 200) {
    ctx.body = {
      province
    }
  } else {
    ctx.body = {
      province: []
    }
  }
  // 另一种写法
  // ctx.body = {
  //   province: status === 200 ? province : []
  // }
})
export default router
