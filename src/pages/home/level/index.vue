<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hospital-list">
        <li class="active">全部</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .level {
    margin-bottom: 20px;
    color: #7f7f7f;
    h1 {
      margin: 10px 0;
      font-weight: 900;
    }

    .content {
      display: flex;
      .left {
        width: 60px;
      }
      .hospital-list {
        display: flex;
        li {
          margin-right: 10px;
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
