<template>
  <div class="container">
    <HosTop />
    <div class="content">
      <router-view></router-view>
    </div>
    <HosBottom />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    margin: 75px 0 100px 0;
    width: 1200px;
    min-height: 1200px;
    // background-color: pink;
  }
}
</style>
