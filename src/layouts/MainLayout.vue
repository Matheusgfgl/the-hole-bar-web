<template>
  <q-layout
    view="hHh Lpr lFf"
    class="bg-background"
  >
    <HeaderComponent />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// Components
import HeaderComponent from '@/components/Header.vue'

</script>

<style lang="scss" scoped>

.bg-background {
  background: #ecf0f5;
}

.bg-sidebar {
  background: #494959;
}

.bg-sidebar-open {
  background: #3e3e4d;
}

.q-header {
  z-index: 8000;
}

.q-drawer--mobile {
  top: 70px;
}
</style>
