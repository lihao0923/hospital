<template>
  <div class="header">
    <div class="content">
      <div class="left">
        <img src="../../assets/images/logo.png" alt="" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <p class="help">帮助中心</p>
        <p class="login">登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    z-index: 999;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 71px;
    border-bottom: 1px solid #eee;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      height: 70px;
      color: #55a6fa;
      font-size: 22px;
      background-color: #fff;

      .left {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          margin-right: 20px;
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          font-size: 16px;
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }
  }
</style>
