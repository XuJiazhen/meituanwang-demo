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

<style scoped lang="scss">
.active:after {
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #fff;
  content: ' ';
  display: block;
  width: 2px;
  height: 0;
  top: 37px;
  left: 0;
  right: 0;
  margin: auto;
}
.scenes-nav {
  width: 100%;
  height: 45px;
  line-height: 45px;
  box-sizing: border-box;
  background-image: linear-gradient(
    to right,
    rgb(194, 176, 142) 3%,
    rgb(190, 164, 116) 100%
  );
  font-size: 14px;
  color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  .title {
    font-size: 18px;
    margin-left: 13px;
    margin-right: 10px;
  }
  .nav-item {
    float: left;
    padding: 0 5px;
    cursor: pointer;
    position: relative;
  }
}
.scenes-content {
  width: 100%;
  padding: 11px 10px 10px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-sizing: border-box;
  border: {
    left: 1px solid #e5e5e5;
    right: 1px solid #e5e5e5;
    bottom: 1px solid #e5e5e5;
  }
  .content-item {
    width: 33.3%;
    height: 314px;
    padding: 10px;
    box-sizing: border-box;
    float: left;
    background: #fff;
    transition: background-color 500ms;
    &:hover {
      background: #f4f4f4;
      transition: background-color 500ms;
      border-radius: 4px;
    }
    .item-img {
      background: url(//p0.meituan.net/travelcube/214b841….png);
      background-size: cover;
      background-position: 50% 50%;
      max-width: 100%;
      height: 208px;
      margin-bottom: 11px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
    .item-info {
      text-align: left;
      .title {
        font-size: 16px;
        color: #222;
        height: 22px;
        line-height: 22px;
        margin-bottom: 8px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
      }
      .sub-title {
        font-size: 12px;
        color: #999;
        line-height: 18px;
        height: 18px;
        margin-bottom: 7px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price-info {
        height: 27px;
        overflow: hidden;
        margin-bottom: 10px;
        .current-price {
          cursor: pointer;
          color: #be9e4d;
          font-weight: 500;
          .price-sym {
            font-size: 14px;
            letter-spacing: -5px;
          }
          .price-num {
            font-size: 22px;
            margin-right: 6px;
            letter-spacing: -0.8px;
          }
        }
      }
    }
  }
}
</style>
