<template>
  <div class="home">
    <!-- 首页轮播图结构 -->
    <Carousel />

    <!--首页搜索医院的表单区域-->
    <Search />

    <!--首页底部展示医院的结构-->
    <el-row :gutter="20">
      <el-col :span="20">
        <!--等级组件-->
        <Level />

        <!--地区组件-->
        <Region />

        <!--展示医院结构-->
        <div class="hospital">
          <Card class="card-item" v-for="item in 10" :key="item" />
        </div>

        <!--分页器-->
        <div class="pagination-wrapper">
          <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="->, prev, pager, next, jumper, sizes, total"
            :total="400"
          />
        </div>

      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'

import {ref} from 'vue'
let pageNo = ref<number>(1)
let pageSize = ref<number>(10)


// const handleSizeChange = (val: number) => {
//   console.log(`${val} items per page`)
// }
// const handleCurrentChange = (val: number) => {
//   console.log(`current page: ${val}`)
// }

</script>
<style lang="scss" scoped>
  .hospital {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;

    .card-item {
      width: 48%;
      margin: 10px 0;
    }
  }

  .pagination-wrapper {
    margin-top: 15px;
  }
</style>
