<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(url, index) in imgList" :key="index">
      <img :src="url" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'MSwiper',
  data() {
    return {
      imgList: [
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.el-carousel__item {
  img {
    width: 550px;
    height: 240px;
  }
}
</style>
