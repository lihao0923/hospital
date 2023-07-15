<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul class="region-list">
        <li class="active">全部</li>
        <li>朝阳区</li>
        <li>昌平区</li>
        <li>房山区</li>
        <li>大通区</li>
        <li>海淀区</li>
        <li>黄岗区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
        <li>长安区</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .region {
    color: #7f7f7f;
    .content {
      display: flex;
      .left {
        width: 60px;
        flex-shrink: 0;
      }
      .region-list {
        display: flex;
        flex-flow: wrap;
        li {
          margin-right: 10px;
          margin-bottom: 10px;
          &.active {
            color: #55a6fa;
          }
          &:hover {
            color: #55a6fa;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
