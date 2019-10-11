<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <d-crumbs :keyword="keyword" :type="type"></d-crumbs>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <d-card :meta="product"></d-card>
      </el-col>
    </el-row>
    <el-row class="d-title">
      <el-col :span="24">
        <h3>商家团购及优惠</h3>
      </el-col>
    </el-row>
    <el-row v-if="canOrder || !login">
      <el-col :span="24">
        <d-list v-if="login" :list="list"></d-list>
        <div v-else class="deal-need-login">
          <img
            src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png"
            alt="登录查看"
          />
          <span>请登录后查看详细团购优惠</span>
          <el-button type="primary" round>
            <a href="/login">立即登录</a>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DCrumbs from '../components/detail/DCrumbs'
import DCard from '../components/detail/DCard'
import DList from '../components/detail/DList'
export default {
  name: 'Detail',
  components: {
    DCrumbs,
    DCard,
    DList
  },
  computed: {
    // 是否可以购买需要后端返回对应的数据，此处没有数据，
    // 所以用判断this.list中的每条数据是否具有图片来模拟是否可以购买
    canOrder() {
      // 这条状态无法很好被模拟，线上数据的问题，没有图片，所以虽然登录成功但没有数据，
      // 逻辑正确
      return this.list.filter((item) => item.photos.length).length
    }
  },
  async asyncData(ctx) {
    const { keyword, type } = ctx.query
    const {
      status,
      data: { product, more: list, login }
    } = await ctx.$axios.get('/search/products', {
      params: {
        keyword,
        type,
        city: ctx.store.state.geo.position.city
      }
    })
    if (status === 200) {
      return {
        keyword,
        product,
        type,
        list,
        login
      }
    } else {
      return {
        keyword,
        product: {},
        type,
        list: [],
        login: false
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/detail/index.scss';
</style>
