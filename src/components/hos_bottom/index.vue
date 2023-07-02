<template>
  <div class="footer">
    <div class="content">
      <div class="left">
        <span>京ICP备13018369号</span>
        <span>电话挂号010-56253825</span>
      </div>
      <div class="right">
        <span>联系我们</span>
        <span>合作伙伴</span>
        <span>用户协议</span>
        <span>隐私协议</span>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>

<style scoped lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #eee;
    background-color: #efefef;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      height: 100%;

      .left {
        span {
          margin-right: 20px;
        }
      }

      .right {
        span {
          margin-left: 15px;
          cursor: pointer;
          color: #55a6fa;
        }
      }
    }
  }
</style>
