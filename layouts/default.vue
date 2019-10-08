<template>
  <div>
    <custom-header class="header"></custom-header>
    <nuxt />
    <custom-footer class="footer"></custom-footer>
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
<style lang="scss">
@import '../assets/css/footer.scss';
@import '../assets/css/header.scss';
</style>
