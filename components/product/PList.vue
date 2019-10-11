<template>
  <!-- 导航和商品列表部分 -->
  <div class="p-list">
    <dl>
      <!-- 注意下面 :class 的写法 -->
      <dd
        v-for="item in nav"
        :key="item.name"
        :class="[item.name, item.acitve ? 'nav-active' : '']"
        @click="navSelect"
      >
        {{ item.txt }}
      </dd>
    </dl>
    <ul>
      <p-item v-for="(item, idx) in list" :key="idx" :meta="item"></p-item>
    </ul>
  </div>
</template>

<script>
import PItem from './PItem'
export default {
  name: 'PList',
  components: {
    PItem
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      nav: [
        {
          name: 's-default',
          txt: '智能排序',
          acitve: true
        },
        {
          name: 's-price',
          txt: '价格排序',
          active: false
        },
        {
          name: 's-visit',
          txt: '人气最高',
          active: false
        },
        {
          name: 's-comment',
          txt: '评价最高',
          active: false
        }
      ]
    }
  },
  // 暂时没有 /searchList 接口
  // async asyncData({ app }) {
  //   const { data } = await app.$axios.get('/searchList')
  //   return { items: data.list }
  // },
  methods: {
    navSelect() {}
  }
}
</script>
