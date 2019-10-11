<template lang="html">
  <div class="m-detail-list">
    <ul>
      <li>{{ list.filter((item) => item.photos.length).length }}款套餐</li>
      <list-item
        v-for="(item, idx) in list"
        :key="idx"
        :meta="item"
      ></list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from './listItem'
export default {
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
