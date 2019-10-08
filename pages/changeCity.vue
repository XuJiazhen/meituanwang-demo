<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24">
        <m-select></m-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-hotCity></m-hotCity>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-visited></m-visited>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-category></m-category>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MSelect from '../components/changeCity/MSelect'
import MHotCity from '../components/changeCity/MHotCity'
import MVisited from '../components/changeCity/MVisited'
import MCategory from '../components/changeCity/MCategory'
export default {
  name: 'ChangeCity',
  layout: 'default',
  components: {
    MSelect,
    MHotCity,
    MVisited,
    MCategory
  }
}
</script>

<style lang="scss">
@import '../assets/css/changecity/select.scss';
@import '../assets/css/changecity/city.scss';
@import '../assets/css/changecity/categroy.scss';
</style>
