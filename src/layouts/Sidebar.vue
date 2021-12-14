<template>
  <div class="sidebar-container" :class="sidebarStatus ? 'active' : ''">
    <g-link class="nav__link" to="/">Home</g-link>
    <g-link class="nav__link" to="/about/">About</g-link>

    <p class="sidebar-toggle-button" @click="sidebarToggle">close</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarStatus: false,
    };
  },
  methods: {
    sidebarToggle() {
      this.$store.commit("TOGGLE_MENU", false);
    },
  },
  mounted() {
    document.addEventListener('click', function() {})
  },
  watch: {
    "$store.state.menuStatus"(bool) {
      this.sidebarStatus = bool;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-toggle-button {
  cursor: pointer;
}

.sidebar-container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  background: #939f5c;
  color: #333;
  transition: all 0.5s;

  &.active {
    left: 0;
    transition: all 0.5s;
  }
}
</style>
