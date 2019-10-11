<template>
  <!-- 分类和区域两行目录的内容及弹出部分 -->
  <div class="p-select">
    <dl class="tab">
      <dt>{{ name }}<i class="el-icon-arrow-down el-icon--right" /></dt>
      <dd>
        <h3>{{ name }}</h3>
        <span v-for="(item, idx) in list" :key="idx">{{ item }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
