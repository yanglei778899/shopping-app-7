<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  font-size: 0.7rem;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  right: 0px;
  .left,
  .right {
    text-align: center;
    height: 44px;
    width: 40px;
  }
  .center {
    text-align: center;
    height: 44px;
    flex: 1;
  }
}
</style>