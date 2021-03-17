<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    console.log(process);
    this.$axios.get("/user/userInfo").then((res) => {
      console.log(res);
    });
    this.$axios.get("/aaa").then((res) => {
      console.log(res);
    });
  },
};
</script>
