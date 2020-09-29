<template>
  <div id="app">
    <welcome></welcome>
  </div>
</template>

<script>
import Welcome from "./views/welcome/Welcome";

export default {
  name: 'App',
  components: {
    Welcome
  }
}
</script>

<style lang="scss">
 @import "styles/main";
</style>
