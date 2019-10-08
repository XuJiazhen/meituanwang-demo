<template>
  <div>
    <dl class="m-categroy">
      <dt>
        <h3 class="title">按拼音首字母选择：</h3>
      </dt>
      <dd v-for="item in alpList" :key="item">
        <!-- 使用 Hash 查询用作跳转 -->
        <a :href="'#' + item">{{ item }}</a>
      </dd>
    </dl>

    <dl v-for="item in block" :key="item.title" class="m-categroy-section">
      <!-- :id 响应跳转 -->
      <dt :id="item.title">
        {{ item.title }}
      </dt>
      <dd>
        <span v-for="city in item.city" :key="city"
          ><a href="/">{{ city }}</a></span
        >
      </dd>
    </dl>
  </div>
</template>

<script>
/* eslint-disable no-console */
import jspy from 'js-pinyin'
export default {
  name: 'MCategory',
  data() {
    return {
      alpList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      block: []
    }
  },
  // 这一块儿的数据获取使用异步请求，
  // 也可以使用SSR在Vuex中进行存储，或者在父组件进行请求后传递给本组件
  // 使用拼音库 js-pinyin 来进行拼音查询
  async mounted() {
    const iblock = []
    const {
      status,
      data: { city }
    } = await this.$axios.get('/geo/city')
    if (status === 200) {
      let initial
      let charCode
      const temList = {}
      // 按照首字母像temList中添加内容
      city.forEach((item) => {
        initial = jspy
          .getFullChars(item.name)
          .toLocaleLowerCase()
          .slice(0, 1)
        charCode = initial.charCodeAt(0)
        // 之前将首字母转换为小写并且编码后a-z的字符编码是在97～122
        // 将临时对象temList中根据item转换为对应数组，并将item.name作为数组元素push
        if (charCode > 96 && charCode < 123) {
          if (!temList[initial]) {
            temList[initial] = []
          }
          temList[initial].push(item.name)
        }
      })
      // 将临时对象temList重新遍历后push到临时数组iblock中
      // Object.entries 可以将参数对象的可枚举属性组成的键值对数组
      // 将排序后的结果放入 iblock中
      for (const [key, val] of Object.entries(temList)) {
        iblock.push({
          title: key.toUpperCase(),
          city: val
        })
      }
      // 对最终结果进行排序，ab为前后两个元素
      iblock.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
      this.block = iblock
    }
  }
}
</script>

<style></style>
