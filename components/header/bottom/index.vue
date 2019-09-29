<template>
  <div class="bottom-wrap clearfix">
    <div class="bottom-container">
      <div class="title-module">
        <a href="/">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt="美团"
          />
        </a>
      </div>
      <div class="search-module">
        <div class="search-box">
          <input
            v-model="searchText"
            class="search-input"
            type="text"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
          />
          <button class="search-btn">
            <span class="el-icon-search"></span>
          </button>
        </div>
        <div class="search-suggest">
          <div v-if="isNoinput" class="suggest-box noinput">
            <h6>热门搜索</h6>
            <div>
              <a href="/">大熊猫繁育研究基地</a>
              <a href="/">成都欢乐谷</a>
              <a href="/">成都武侯祠博物馆</a>
              <a href="/">贤合庄卤味火锅</a>
            </div>
          </div>
          <div v-if="isInputing" class="suggest-box inputing">
            <ul>
              <li><a href="/">AAA</a></li>
              <li><a href="/">BBB</a></li>
              <li><a href="/">CCC</a></li>
              <li><a href="/">AAA</a></li>
              <li><a href="/">BBB</a></li>
              <li><a href="/">CCC</a></li>
            </ul>
          </div>
        </div>
        <div class="search-hotword">
          <div class="hotword">
            <a href="/">大熊猫繁育研究基地</a>
            <a href="/">成都欢乐谷</a>
            <a href="/">成都武侯祠博物馆</a>
            <a href="/">贤合庄卤味火锅</a>
            <a href="/">成都海昌极地海洋公园</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomIndex',
  data() {
    return {
      searchText: '',
      isFocus: false
    }
  },
  computed: {
    isNoinput() {
      return this.isFocus && !this.searchText
    },
    isInputing() {
      return this.isFocus && this.searchText
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false
      }, 100)
    }
  }
}
</script>

<style lang="scss">
.bottom-wrap {
  font-size: 12px;
  background: #fff;
  position: relative;
  .bottom-container {
    width: 1190px;
    margin: 0 auto;
    position: relative;
    & > div {
      float: left;
      padding-top: 28px;
      &.title-module {
        padding-right: 60px;
        padding-bottom: 40px;
        height: 54px;
        min-width: 220px;
        img {
          width: 126px;
          height: 46px;
        }
      }
      &.search-module {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        .search-box {
          width: 550px;
          height: 40px;
          background: #fff;
          input {
            width: 85.45%;
            height: 100%;
            box-sizing: border-box;
            border: 1px solid #e5e5e5;
            border-right: none;
            border-radius: 4px 0 0 4px;
            font-size: 14px;
            padding: 15px;
            &::placeholder {
              color: #999;
            }
          }
          button {
            width: 14.55%;
            height: 100%;
            float: right;
            border: none;
            color: #222222;
            background: #ffc300;
            cursor: pointer;
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
            span {
              font-size: 18px;
              font-weight: bold;
            }
          }
        }
        .search-suggest {
          width: 85.45%;
          position: absolute;
          box-sizing: border-box;
          border-top: none;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          background: #fff;
          color: #999;
          z-index: 1000;
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          font-size: 12px;
          text-align: left;
          .suggest-box {
            padding: 10px;
            h6 {
              padding-bottom: 5px;
            }
            div {
              width: auto;
              padding-top: 5px;
              margin-bottom: 5px;
            }
            a {
              color: #666;
              margin-right: 5px;
            }
            a:hover {
              color: #fe8c00;
            }
          }
        }
        .search-hotword {
          box-sizing: border-box;
          width: 550px;
          text-align: center;
          padding-top: 8px;
          a {
            color: #999;
            margin: 0 3px;
          }
          a:hover {
            color: #fe8c00;
          }
        }
      }
    }
  }
}
</style>
