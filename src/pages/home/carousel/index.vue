<template>
  <div class="carousel">
    <!-- 轮播图 -->
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../../assets/images/web-banner-1.png" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.carousel {
  img {
    height: 350px;
  }
}
</style>
