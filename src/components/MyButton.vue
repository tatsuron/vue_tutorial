<template>
  <div>
    <button>MyButton</button>
    <p>{{ $t('message.hello') }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {

  // // created() {
  // //   console.log(this.$t('message.hello'))
  // // }

  // beforeMount() {
  //   console.log(this.$t('message.hello'))
  // }
}
</script>
