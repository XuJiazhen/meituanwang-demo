<template>
  <el-container>
    <el-header>
      <custom-header></custom-header>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer style="height: 2000px;"></el-footer>
  </el-container>
</template>

<script>
import CustomHeader from '@/components/header/index'

export default {
  components: {
    CustomHeader
  }
}
</script>
<style></style>
