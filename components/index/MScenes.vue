<template>
  <div>
    <dl class="scenes-nav clearfix" @mouseover="over">
      <dt class="nav-item title">
        有格调
      </dt>
      <dd class="nav-item" :class="{ active: curType === 'all' }" type="all">
        全部
      </dd>
      <dd
        class="nav-item"
        :class="{ active: curType === 'appointment' }"
        type="appointment"
      >
        约会聚餐
      </dd>
      <dd
        class="nav-item"
        :class="{ active: curType === 'beauty' }"
        type="beauty"
      >
        丽人SPA
      </dd>
      <dd
        class="nav-item"
        :class="{ active: curType === 'movie' }"
        type="movie"
      >
        电影演出
      </dd>
      <dd
        class="nav-item"
        :class="{ active: curType === 'travel' }"
        type="travel"
      >
        品质出游
      </dd>
    </dl>
    <div class="scenes-content clearfix">
      <a
        v-for="(item, index) in curContent.list"
        :key="index"
        href="https://www.meituan.com/cate/1077489728/"
        class="content-item"
      >
        <div class="item-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <h4 class="title">{{ item.title }}</h4>
          <p class="sub-title">
            {{ item.subTitle }}
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
      scenesContent: [
        {
          type: 'all',
          list: [
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            }
          ]
        },
        {
          type: 'appointment',
          list: [
            {
              imgUrl:
                'https://p0.meituan.net/msmerchant/ebf59d1d4a11dcd4d242aa12442c9608121253.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            }
          ]
        },
        {
          type: 'beauty',
          list: [
            {
              imgUrl:
                'https://p0.meituan.net/merchantpic/0be5f931622c93a399c51fd38c8f31cb387384.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            }
          ]
        },
        {
          type: 'movie',
          list: [
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            }
          ]
        },
        {
          type: 'travel',
          list: [
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            },
            {
              imgUrl:
                'https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@736w_416h_1e_1c',
              title: 'XCAKE艾蛋糕（天府广场店）',
              subTitle: '蛋糕五选一，约3磅，方形',
              price: 199,
              oldPrice: '门市价¥349',
              location: '天府广场/盐市口'
            }
          ]
        }
      ]
    }
  },
  computed: {
    curContent() {
      return this.scenesContent.filter((item) => item.type === this.curType)[0]
    }
  },
  methods: {
    over(e) {
      const curTag = e.target.tagName.toLowerCase()
      if (curTag === 'dd') {
        this.curType = e.target.getAttribute('type')
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
