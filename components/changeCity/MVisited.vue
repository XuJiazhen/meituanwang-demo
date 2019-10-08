<template>
  <div class="m-city">
    <dl>
      <dt>
        <h3 class="title">最近访问</h3>
      </dt>
      <dd v-for="(item, index) in list" :key="index">
        {{ item }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'MHotCity',
  data() {
    return {
      list: ['成都', '天津', '浙江']
    }
  }
}
</script>
