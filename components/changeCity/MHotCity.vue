<template>
  <div class="m-city">
    <dl>
      <dt>
        <h3 class="title">热门城市</h3>
      </dt>
      <dd v-for="item in list" :key="item.id">
        {{
          item.name === '市辖区'
            ? item.province.replace('市', '')
            : item.name.replace('市', '')
        }}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'MHotCity',
  data() {
    return {
      list: []
    }
  },
  async mounted() {
    const {
      status,
      data: { hots }
    } = await this.$axios.get('/geo/hotCity')
    if (status === 200) {
      this.list = hots
    }
  }
}
</script>
