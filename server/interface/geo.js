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

// 在 changeCity 的选择框中利用省份的 id 查询对应城市
router.get('/province/:id', async (ctx) => {
  // let city = await City.findOne({id: ctx.params.id})
  //
  // ctx.body = {
  //   code: 0,
  //   city: city.value.map(item => {
  //     return {province: item.province, id: item.id, name: item.name}
  //   })
  // }
  const {
    status,
    data: { city }
  } = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}`)
  if (status === 200) {
    ctx.body = {
      city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

// changeCity 远程搜索数据源
router.get('/city', async (ctx) => {
  // let city = []
  // let result = await City.find()
  // result.forEach(item => {
  //   city = city.concat(item.value)
  // })
  // ctx.body = {
  //   code: 0,
  //   city: city.map(item => {
  //     return {
  //       province: item.province,
  //       id: item.id,
  //       name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
  //         ? item.province
  //         : item.name
  //     }
  //   })
  // }
  const {
    status,
    data: { city }
  } = await axios.get(`http://cp-tools.cn/geo/city`)
  if (status === 200) {
    ctx.body = {
      city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

// changeCity 热门推荐数据
router.get('/hotCity', async (ctx) => {
  // let list = [
  //   '北京市',
  //   '上海市',
  //   '广州市',
  //   '深圳市',
  //   '天津市',
  //   '西安市',
  //   '杭州市',
  //   '南京市',
  //   '武汉市',
  //   '成都市'
  // ]
  // let result = await City.find()
  // let nList = []
  // result.forEach(item => {
  //   nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
  // })
  // ctx.body = {
  //   hots: nList
  // }
  const {
    status,
    data: { hots }
  } = await axios.get(`http://cp-tools.cn/geo/hotCity`)
  if (status === 200) {
    ctx.body = {
      hots
    }
  } else {
    ctx.body = {
      hots: []
    }
  }
})
export default router
