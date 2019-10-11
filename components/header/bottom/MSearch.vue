<template>
  <div>
    <div class="search-box">
      <input
        v-model="searchText"
        class="search-input"
        type="text"
        placeholder="搜索商家或地点"
        @focus="focus"
        @blur="blur"
        @input="input"
      />
      <button class="search-btn">
        <span class="el-icon-search"></span>
      </button>
    </div>
    <div class="search-suggest">
      <div v-show="isNoinput" class="suggest-box noinput">
        <h6>热门搜索</h6>
        <div>
          <a
            v-for="(item, index) in $store.state.city.hotPlace.slice(0, 4)"
            :key="index"
            :href="'/product?keyword=' + encodeURIComponent(item.name)"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <div v-show="isInputing" class="suggest-box inputing">
        <ul>
          <li v-for="(item, index) in searchList" :key="index">
            <a href="/">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="search-hotword">
      <a
        v-for="(item, index) in $store.state.city.hotPlace.slice(0, 7)"
        :key="index"
        :href="'/product?keyword=' + encodeURIComponent(item.name)"
        >{{ item.name }}</a
      >
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'MSearch',
  data() {
    return {
      searchText: '',
      searchList: [],
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
    },
    // 使用 lodash 库的延时函数 debounce 来延时搜索，避免一输入内容就立即发送请求
    input: _.debounce(async function() {
      const self = this
      const city = self.$store.state.geo.position.city.replace('市', '')
      self.searchList = []
      const {
        data: { top }
      } = await self.$axios('/search/top', {
        params: {
          input: self.searchText,
          city
        }
      })
      self.searchList = top.slice(0, 10)
    }, 300)
  }
}
</script>

<style scoped lang="scss">
div {
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
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    font-size: 12px;
    text-align: left;
    .suggest-box {
      div {
        width: auto;
        padding-top: 5px;
        margin-bottom: 5px;
      }
      &.noinput {
        h6 {
          padding-top: 10px;
          padding-left: 10px;
          color: #999;
        }
        div {
          box-sizing: border-box;
          padding: 8px 0 8px 10px;
          a {
            color: #666;
            margin-right: 10px;
            margin-bottom: 3px;
            display: inline-block;
            &:hover {
              color: #fe8c00;
            }
          }
        }
      }
      &.inputing {
        a {
          padding: 3px 10px;
          color: #333;
          line-height: 1.6;
          font-size: 12px;
          width: 100%;
          display: block;
          box-sizing: border-box;
          &:hover {
            color: #fe8c00;
            background: #f8f8f8;
          }
        }
      }
    }
  }
  .search-hotword {
    box-sizing: border-box;
    width: 550px;
    text-align: center;
    box-sizing: border-box;
    height: 25px;
    overflow: hidden;
    padding-top: 8px;
    padding-left: 8px;
    a {
      color: #999;
      margin-right: 10px;
      margin-bottom: 3px;
    }
    a:hover {
      color: #fe8c00;
    }
  }
}
</style>
