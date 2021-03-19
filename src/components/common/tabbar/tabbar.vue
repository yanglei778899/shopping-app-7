<template>
  <div id="tabbar">
    <TabbarItem> <p slot="item-text">56415</p> </TabbarItem>
    <div>4</div>
    <div>4</div>
    <div>4</div>
  </div>
</template>

<script>
import TabbarItem from "./tabbarItem"
  export default {
    components:{
      TabbarItem
    }
  }
</script>

<style lang="less" scoped>
#tabbar{
  display: flex;

  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

</style>