<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in Recommend" :key="index">
      <a :href="item.link">
        <van-image class="swipeImg" fit="contain" :src="item.recommendImgUrl" />
        <p>{{ item.text }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Recommend: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  margin: 0.3rem 0px;

  .recommend-item {
    flex: 1;
    margin: 0.1rem;
    font-size: 0.2rem;
    text-align: center;
    .swipeImg {
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>