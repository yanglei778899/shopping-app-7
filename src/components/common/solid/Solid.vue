<template>
  <div class="solid" :style="solidStyle"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "15px",
    },
    color: {
      type: String,
      default: "#aca4a4",
    },
  },
  computed: {
    solidStyle: function () {
      return { backgroundColor: this.color, height: this.height };
    },
  },
};
</script>

<style lang="less" scoped>
.solid {
  color: #aca4a4;
  background-color: antiquewhite;
  box-shadow: 0px 0px 3px rgb(181, 184, 184);
}
</style>