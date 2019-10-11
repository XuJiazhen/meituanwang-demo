import Router from 'koa-router'
import axios from './utils/axios'

// 这里的categroy是线上数据的接口拼写错误，为了不至混乱，
// 所以文件名和此处使用的地方皆和线上接口保持一致
// 这里的接口失效了，项目中直接使用了线上接口
const router = new Router({
  prefix: '/category'
})

router.get('/crumbs', async (ctx) => {
  // let result = await Categroy.findOne({city: ctx.query.city.replace('市', '') || '北京'})
  // if (result) {
  //   ctx.body = {
  //     areas: result.areas,
  //     types: result.types
  //   }
  // } else {
  //   ctx.body = {
  //     areas: [],
  //     types: []
  //   }
  // }

  const {
    status,
    data: { areas, types }
  } = await axios.get('http://cp-tools.cn/categroy/crumbs', {
    params: {
      city: ctx.query.city.replace('市', '') || '北京'
    }
  })
  ctx.body = {
    areas: status === 200 ? areas : [],
    types: status === 200 ? types : []
  }
})

export default router
