<template>
  <div class="container">
    <HosTop />
    <div class="content">content</div>
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
    margin-top: 71px;
    width: 1200px;
    min-height: 800px;
    // background-color: pink;
  }
}
</style>
