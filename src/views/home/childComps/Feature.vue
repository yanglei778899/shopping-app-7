<template>
  <div class="Feature">
    <div class="title">本周流行</div>
    <div class="content" v-if="Feature.length > 0">
      <div class="item" v-for="(item, index) in Feature" :key="index">
        <a :href="item.link">
          <van-image class="Img" fit="contain" :src="item.featureImgUrl" />
          <p>{{ item.text }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Feature: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.Feature {
  font-size: 0.4rem;
  .title {
    text-align: center;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    margin: 0.3rem 0px;
    .item {
      width: calc(25% - 0.6rem);
      margin: 0.1rem;
      font-size: 0.2rem;
      text-align: center;
      .Img {
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
}
</style>