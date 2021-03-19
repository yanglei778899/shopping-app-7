<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      api:"/user/login"
    }
  },
  created(){
    console.log(11111);
    this.$axios.get(this.api).then(res=>{
      console.log(res);
    })
  }
  
}
</script>
