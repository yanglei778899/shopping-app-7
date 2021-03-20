<template>
  <div id="home">
    <Navbar><p slot="center">蘑菇街</p></Navbar>
    <Swipe :banners="banners"></Swipe>
    <Recommend :Recommend="Recommend"></Recommend>
    <Solid></Solid>
    <Feature :Feature="Feature"></Feature>
    <TabControl :tabs="tabs"></TabControl>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar";
import Navbar from "components/common/navbar/navbar";
import Solid from "components/common/solid/Solid";
import TabControl from "components/common/tabControl/TabControl";

import Swipe from "./childComps/swipe";
import Recommend from "./childComps/Recommend";
import Feature from "./childComps/Feature";
export default {
  data() {
    return {
      getHomeDataApi: "/api/getHomeData",
      getGoodsApi: "/api/getGoods",
      banners: [],
      Recommend: [],
      Feature: [],
      tabs: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    THIS.getHomeData();
  },
  methods: {
    getHomeData() {
      this.$axios.get(this.getHomeDataApi).then((res) => {
        const data = res.data.data;
        this.banners = data.banners;
        this.Recommend = data.Recommend;
        this.Feature = data.Feature;
      });
    },
  },
  components: {
    tabbar,
    Navbar,
    Swipe,
    Recommend,
    Feature,
    Solid,
    TabControl,
  },
};
</script>

<style lang="less" scoped>
#home {
  margin: 44px 0px 49px;
}
.navbar {
  background: chocolate;
}
</style>