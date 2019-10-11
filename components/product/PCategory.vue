<template>
  <!-- 分类和区域两行目录 -->
  <div class="p-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item, idx) in types" :key="idx">
        <p-select :name="item.type" :list="item.module"></p-select>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item, idx) in areas" :key="idx">
        <p-select :name="item.type" :list="item.module"></p-select>
      </dd>
    </dl>
  </div>
</template>

<script>
import PSelect from './PSelect'
export default {
  name: 'PCategory',
  components: {
    PSelect
  },
  props: {
    types: {
      type: Array,
      default() {
        return []
      }
    },
    areas: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
