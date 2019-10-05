<template>
  <div>
    <header class="index-header">
      <custom-header></custom-header>
    </header>
    <main class="index-main">
      <nuxt />
    </main>
    <footer class="index-footer">
      <custom-footer></custom-footer>
    </footer>
  </div>
</template>

<script>
import CustomHeader from '@/components/header/index'
import CustomFooter from '@/components/footer/index'
export default {
  components: {
    CustomHeader,
    CustomFooter
  }
}
</script>
<style scoped lang="scss">
.index-header {
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
.index-main {
  background: #f8f8f8;
}
.index-footer {
  background: #f8f8f8;
}
</style>
