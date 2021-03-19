<template>
  <div>
    <Navbar class="navbar"><p slot="center">蘑菇街</p></Navbar>首页<tabbar
    ></tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar";
import Navbar from "components/common/navbar/navbar";
export default {
  data() {
    return {
      getHomeDataApi: "/api/getHomeData",
    };
  },
  created() {
    this.$axios.get(this.getHomeDataApi).then((res) => {
      console.log(res.data);
    });
  },
  components: {
    tabbar,
    Navbar,
  },
};
</script>

<style lang="less" scoped>
.navbar {
  background: chocolate;
}
</style>