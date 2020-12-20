<template>
  <div class="sidebar">
    <h2>Hello</h2>
  </div>
</template>

<script>
export default {
name: "SidebarRight"
}
</script>

<style lang="scss" scoped>
    .sidebar {
      border-left: .1rem solid rgba(0,0,0, .2);
      position: fixed;
      top: 0; bottom: 0; right: 0;
      padding: 1rem 2rem 1rem 9rem;
      z-index: 999;
      background-color: $white-color;
      width: 27%;
    }
</style>