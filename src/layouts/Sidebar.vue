<template>
  <div class="sidebar-container">
    <g-link class="nav__link" to="/about/">About</g-link>
    <g-link class="nav__link" to="/">Home</g-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>

.sidebar-container {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background: $secondary;
  color: #333;
  transition: all 0.5s;
  writing-mode: vertical-lr;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row-reverse;

  &.active {
    left: 0;
    transition: all 0.5s;
  }

  .nav-link {
    margin: 0 0 25px 0px;
  }
}
</style>
