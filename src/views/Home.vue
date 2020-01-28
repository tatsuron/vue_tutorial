<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyButton></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MyButton from "@/components/MyButton.vue";

export default {
  name: 'home',
  components: {
    MyButton
  }
}
</script>
