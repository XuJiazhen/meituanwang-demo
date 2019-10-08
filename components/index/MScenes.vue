<template>
  <div>
    <dl class="scenes-nav clearfix" @mouseover="over">
      <dt class="nav-item title">
        有格调
      </dt>
      <dd
        class="nav-item"
        keyword="景点"
        :class="{ active: curType === 'all' }"
        type="all"
      >
        全部
      </dd>
      <dd
        class="nav-item"
        keyword="美食"
        :class="{ active: curType === 'part' }"
        type="part"
      >
        约会聚餐
      </dd>
      <dd
        class="nav-item"
        keyword="丽人"
        :class="{ active: curType === 'spa' }"
        type="spa"
      >
        丽人SPA
      </dd>
      <dd
        class="nav-item"
        keyword="电影"
        :class="{ active: curType === 'movie' }"
        type="movie"
      >
        电影演出
      </dd>
      <dd
        class="nav-item"
        keyword="旅游"
        :class="{ active: curType === 'travel' }"
        type="travel"
      >
        品质出游
      </dd>
    </dl>

    <div class="scenes-content clearfix">
      <a
        v-for="(item, index) in curList"
        :key="index"
        href="https://www.meituan.com/cate/1077489728/"
        class="content-item"
      >
        <div class="item-img">
          <img :src="item.img" />
        </div>
        <div class="item-info">
          <h4 class="title">{{ item.title }}</h4>
          <p class="sub-title">
            {{ item.pos }}
          </p>
          <div class="price-info">
            <span class="current-price">
              <span class="price-sym">¥</span>
              <span class="price-num">
                {{ item.price }}
              </span>
            </span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MScenes',
  data() {
    return {
      curType: 'all',
      list: {
        all: [],
        part: [],
        spa: [],
        movie: [],
        travel: []
      }
    }
  },
  // 需要在页面刚加载出来的时候显示一些初始化数据，这里的实现并不完美，画面有抖动，考虑采用SSR，
  // 或者使用元素来占位置，如果使用SSR，那么keyword怎么传递？没想通，好像没有办法传递，也要发一次请求
  computed: {
    curList() {
      return this.list[this.curType]
    }
  },
  async mounted() {
    const self = this
    const {
      status,
      data: { count, pois }
    } = await self.$axios.get('/search/resultsByKeywords', {
      params: {
        keyword: '景点',
        city: self.$store.state.geo.position.city
      }
    })
    if (status === 200 && count > 0) {
      const result = pois
        .filter((item) => item.photos.length)
        .map((item) => {
          return {
            title: item.name,
            pos: item.type.split(';')[0],
            price: 0,
            img: item.photos[0].url,
            url: '/'
          }
        })
      self.list[self.curType] = result.slice(0, 6)
    } else {
      self.list[self.curType] = []
    }
  },
  methods: {
    async over(e) {
      const self = this
      const curTag = e.target.tagName.toLowerCase()
      if (curTag === 'dd') {
        self.curType = e.target.getAttribute('type')
        const keyword = e.target.getAttribute('type')
        const {
          status,
          data: { count, pois }
        } = await self.$axios.get('/search/resultsByKeywords', {
          params: {
            keyword,
            city: self.$store.state.geo.position.city
          }
        })
        if (status === 200 && count > 0) {
          // 当后端的数据结构和前端不同的时候，可以先对其过滤再使用map重新进行映射，
          // 开发的时候可以先使用自己的数据接口，之后再做映射即可
          const result = pois
            .filter((item) => item.photos.length)
            .map((item) => {
              return {
                title: item.name,
                pos: item.type.split(';')[0],
                price: 0,
                img: item.photos[0].url,
                url: '/'
              }
            })
          self.list[self.curType] = result.slice(0, 6)
        } else {
          self.list[self.curType] = []
        }
      }
    }
  }
}
</script>
