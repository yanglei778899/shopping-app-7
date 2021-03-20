<template>
  <div>
    <van-swipe :autoplay="300000">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <van-image class="swipeImg" fit="contain" :src="item.BannerImgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.van-swipe {
  height: 3.5rem;
  .swipeImg {
    width: 100%;
    background-color: aqua;
    height: 100%;
    display: flex;
  }
}
</style>