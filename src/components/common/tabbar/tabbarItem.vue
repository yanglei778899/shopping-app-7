<template>
  <div id="tabbar-item" @click="toPage" :key="path">
    <div v-if="active"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ activeStyle: active }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbar-item",
  props: {
    path: String,
    color: {
      type: String,
      default: "red",
    },
  },
  computed: {
    active: function () {
      return this.$route.path.indexOf(this.path) === -1;
    },
    // activeStyle: function () {
    //   return this.active ? { color: this.color } : {};
    // },
  },
  methods: {
    toPage() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style lang="less" scoped>
#tabbar-item {
  height: 49px;
  flex: 1;
  text-align: center;
  img {
    width: 0.5rem;
  }
  font-size: 0.3rem;
  .activeStyle {
    color: #524;
  }
}
</style>