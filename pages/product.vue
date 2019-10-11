<template>
  <el-row class="page-product">
    <el-col :span="19">
      <p-crumbs :keyword="keyword"></p-crumbs>
      <p-category :types="types" :areas="areas"></p-category>
      <p-list :list="list"></p-list>
    </el-col>
    <el-col :span="5">
      <a-map
        v-if="point.length"
        :width="200"
        :heigh="200"
        :point="point"
      ></a-map>
    </el-col>
  </el-row>
</template>

<script>
/* eslint-disable no-console */
import PCrumbs from '../components/product/PCrumbs'
import PCategory from '../components/product/PCategory'
import PList from '../components/product/PList'
import AMap from '../components/public/map'
export default {
  name: 'Detail',
  layout: 'default',
  components: {
    PCrumbs,
    PCategory,
    PList,
    AMap
  },
  data() {
    return {
      keyword: '',
      types: [],
      areas: [],
      list: [],
      point: []
    }
  },
  // 从这里拿到第三方提供的线上数据，因为第三方数据结构和前端的数据结构完全不同，
  // 所以在本地多要做一层过滤filter再映射map成前端数据结构
  async asyncData(ctx) {
    const keyword = ctx.query.keyword
    const city = ctx.store.state.geo.position.city
    const {
      status,
      data: { count, pois }
    } = await ctx.$axios.get('/search/resultsByKeywords', {
      params: {
        keyword,
        city
      }
    })
    // 这一块儿线上数据types的内容似乎为空，所以不能返回正确的数据
    const {
      status: status2,
      data: { areas, types }
    } = await ctx.$axios.get('http://cp-tools.cn/categroy/crumbs', {
      params: {
        city
      }
    })
    if (status === 200 && count > 0 && status2 === 200) {
      return {
        list: pois
          .filter((item) => item.photos.length)
          .map((item) => {
            return {
              type: item.type,
              img: item.photos[0].url,
              name: item.name,
              comment: Math.floor(Math.random() * 10000),
              rate: Number(item.biz_ext.rating),
              price: Number(item.biz_ext.cost),
              scene: item.tag,
              tel: item.tel,
              status: '可订明日',
              location: item.location,
              module: item.type.split(';')[0]
            }
          }),
        // asyncData() 方法相当于是和当前组件的 data() 数据融合的，
        // 所以在这里可以直接使用变量，最后会融合到 data() 中
        keyword,
        areas: areas.filter((item) => item.type !== '').slice(0, 5),
        types: types.filter((item) => item.type !== '').slice(0, 5),
        point: (pois.find((item) => item.location).location || '').split(',')
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/product/index.scss';
</style>
