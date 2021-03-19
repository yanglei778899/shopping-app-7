<template>
  <div id="tabbar">
    <TabbarItem path="/home" color="#F7D206">
      <img slot="item-icon" src="@/assets/img/tabbar/homePage.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/homePageActivate.png"
        alt=""
      />
      <p slot="item-text">首页</p>
    </TabbarItem>
    <TabbarItem path="/classification" color="#F7D206">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/classification.png"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/classificationActivate.png"
        alt=""
      />
      <p slot="item-text">分类</p>
    </TabbarItem>
    <TabbarItem path="/cart" color="#F7D206">
      <img slot="item-icon" src="@/assets/img/tabbar/ShoppingCart.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/ShoppingCartActivate.png"
        alt=""
      />
      <p slot="item-text">购物车</p>
    </TabbarItem>
    <TabbarItem path="/my" color="#F7D206">
      <img slot="item-icon" src="@/assets/img/tabbar/my.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/myActivate.png"
        alt=""
      />
      <p slot="item-text">我的</p>
    </TabbarItem>
  </div>
</template>

<script>
import TabbarItem from "./tabbarItem";
export default {
  components: {
    TabbarItem,
  },
};
</script>

<style lang="less" scoped>
#tabbar {
  display: flex;

  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;

  background-color: rgba(127, 165, 152, 0.842);
  color: rgb(247, 210, 6);
}
</style>