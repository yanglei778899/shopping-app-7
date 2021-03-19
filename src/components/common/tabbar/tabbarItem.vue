<template>
  <div id="tabbar-item">
    <div v-if="active"> <slot name="item-icon"></slot> </div>
    <div v-if="active"> <slot name="item-icon-active"></slot> </div>
    <div :style=" activeStyle"> <slot name="item-text"></slot> </div>
  </div>
</template>

<script>
  export default {
    props:{
      path:"/",
      color:{
        type:String,
        default:"red"
      }
    },
    computed:{
      active: function(){
       return  this.$route.path.indexOf(this.path)
      } ,
      activeStyle:function(){
        return {color :this.color}
      }
    }
  }
</script>

<style lang="less" scoped>
#tabbar-item{
  height: 49px;
  flex: 1;
}
</style>