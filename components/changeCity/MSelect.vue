<template>
  <div class="m-select">
    <h3 class="title">按省份选择：</h3>
    <el-select v-model="pvalue" placeholder="省份" class="province">
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      v-model="cvalue"
      :disabled="!city.length"
      placeholder="城市"
      class="city"
    >
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <h3 class="title">直接搜索：</h3>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
/* eslint-disable no-console */
import _ from 'lodash'
export default {
  name: 'MSelect',
  data() {
    return {
      pvalue: '',
      province: [],
      cvalue: '',
      city: [],
      input: '',
      cities: []
    }
  },
  watch: {
    async pvalue(id) {
      const {
        status,
        data: { city }
      } = await this.$axios.get(`/geo/province/${id}`)

      if (status === 200) {
        this.city = city.map((item) => {
          return {
            value: item.id,
            label: item.name
          }
        })
        this.cvalue = ''
      }
    }
  },
  async mounted() {
    const {
      status,
      data: { province }
    } = await this.$axios.get('/geo/province')
    if (status === 200) {
      this.province = province.map((item) => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }
  },
  methods: {
    // element-ui 远程搜索框提供的查询函数，
    // 远程搜索框的数据源是一个包含若干对象的数组，每个对象都需要有 value 值，详细看官网
    // 在用户输入内容的时候函数会响应，该函数接收两个参数，一个是查询字符串，一个是回调函数
    querySearchAsync: _.debounce(async function(query, cb) {
      if (this.cities.length) {
        // 对匹配的数据按照条件筛选
        // 此处是只要存在查询字符串就匹配成功
        cb(this.cities.filter((item) => item.value.includes(query)))
      } else {
        const {
          status,
          data: { city }
        } = await this.$axios.get('/geo/city')
        if (status === 200) {
          this.cities = city.map((item) => {
            return {
              province: item.province,
              value: item.name
            }
          })
          cb(this.cities.filter((item) => item.value.includes(query) > -1))
        } else {
          cb()
        }
      }
    }, 300),
    // 当列表的内容被点击的时候触发下面这个函数
    handleSelect(item) {
      this.$store.commit('geo/setPosition', {
        province: item.province,
        city: item.value
      })
      this.$router.push('/')
    }
  }
}
</script>
