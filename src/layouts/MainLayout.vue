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
</style>
