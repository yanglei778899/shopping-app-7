<template>
  <div class="tabControl">
    <div
      class="tabItem"
      v-for="(item, index) in tabs"
      :key="index"
      @click="currentIndexFN(index)"
    >
      <span :class="{ active: index == currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    currentIndexFN(i) {
      this.currentIndex = i;
    },
  },
};
</script>

<style lang="less" scoped>
.tabControl {
  display: flex;
  font-size: 0.35rem;
  .tabItem {
    flex: 1;
    text-align: center;
    height: 40px;
  }
  .active {
    color: #f3ef04;
    border-bottom: 1px solid #f3ef04;
    padding-bottom: 3px;
  }
}
</style>