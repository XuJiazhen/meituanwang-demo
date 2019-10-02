<template>
  <div>
    <header>
      <custom-header></custom-header>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
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
<style lang="scss">
header {
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
footer {
  margin-top: 40px;
}
</style>
