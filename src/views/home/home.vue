<template>
  <div id="home">
    <Navbar><p slot="center">蘑菇街</p></Navbar>
    <Swipe :banners="banners"></Swipe>
    <Recommend :Recommend="Recommend"></Recommend>
    <Solid></Solid>
    <Feature :Feature="Feature"></Feature>
    <TabControl :tabs="tabs" @currentIndex="currentIndexfn"></TabControl>
    <Toods :list="goods.pop.list"></Toods>
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
import Toods from "components/content/goods/goods";
export default {
  data() {
    return {
      getHomeDataApi: "/api/getHomeData",
      getpopApi1: "/api/getHomeData/getpopApi1",
      getpopApi2: "/api/getHomeData/getpopApi2",
      getpopApi3: "/api/getHomeData/getpopApi3",
      getnewsApi1: "/api/getHomeData/getnewsApi1",
      getnewsApi2: "/api/getHomeData/getnewsApi2",
      getnewsApi3: "/api/getHomeData/getnewsApi3",
      getsellApi1: "/api/getHomeData/getsellApi1",
      getsellApi2: "/api/getHomeData/getsellApi2",
      getsellApi1: "/api/getHomeData/getsellApi13",
      getGoodsApi3: "/api/getGoods",
      banners: [],
      Recommend: [],
      Feature: [],
      tabs: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentIndex: 0,
    };
  },
  created() {
    this.getHomeData();
    this.getGoodsData("pop");
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
    getGoodsData(type) {
      let api = "";
      if (this.currentIndex == 0) {
        api =
          "/api/getHomeData/get" + type + "Api" + (this.goods[type].page + 1);
      }

      this.$axios.get(api).then((res) => {
        const data = res.data.data;
        this.goods[type].list.push(...data);
        console.log(data);
      });
    },
    currentIndexfn(i) {
      this.currentIndex = i;
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
    Toods,
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