<template>
  <div class="layout">
    <Sidebar />
    <transition name="fade" appear>
      <main class="main-container">
        <slot/>
      </main>
    </transition>
  </div>
</template>

<script>
import Sidebar from '~/layouts/Sidebar.vue'
export default {
  components: {
    Sidebar
  },
  methods: {
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
html { height: 100%; }
body {
  margin:0;
  padding:0;
  line-height: 1.5;
  height: 100%;
}

.main-container {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.layout {
  margin: 0 auto;
  padding-left: 70px;
  padding-right: 20px;
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.fade-enter-active {
  transition: opacity .6s;
}

.fade-enter {
  opacity: 0;
}

</style>
