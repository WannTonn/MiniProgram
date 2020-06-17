<template>
  <div class="head-wrapper">
    <div class="logo"></div>
    <div class="menu-wrapper">
      <div class="menu-item active">首页</div>
      <div class="menu-item">展会情况</div>
      <div class="menu-item">新闻中心</div>
      <div class="menu-item">配置活动</div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
.head-wrapper {
  padding: 0 80px 0 50px;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 100px;
    height: 100px;
    background-image: url('./imgs/logo.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .menu-wrapper {
    display: flex;
    .menu-item {
      width: 100px;
      line-height: 100px;
      text-align: center;
      cursor: pointer;
      transition: all ease .3s;
      &.active {
        border-bottom: 5px solid #2589e5;
        color: #2589e5;
      }
      &:hover {
        color: #2589e5;
      }
    }
  }
}
</style>