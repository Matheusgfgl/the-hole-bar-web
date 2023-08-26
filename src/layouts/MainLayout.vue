<template>
  <q-layout
    view="hHh Lpr lFf"
    class="bg-background"
  >
    <q-header
      v-if="isDevelopmentEnv"
      style="height: 70px; z-index: 3000"
    >
      <HeaderComponent />
    </q-header>
    <!-- <q-drawer
      v-model="leftDrawerOpen"
      class="bg-sidebar"
      show-if-above
      @click="miniState ? miniState = false : null"
      :mini="miniState"
      :width="230"
      :breakpoint="580"
      persistent
    > -->
    <Suspense v-if="isDevelopmentEnv">
      <SidebarComponent />
    </Suspense>
    <!-- </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Components
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'

// const miniState = ref(false)
// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer () {
//   window.screen.width <= 580
//     ? leftDrawerOpen.value = !leftDrawerOpen.value
//     : miniState.value = !miniState.value
// }

/**
 * Retorna se o ambiente de desenvolvimento é develop, para realizar verificação.
 *
 * Por conta do layout aplicado no router o componente de header e sidebar estava sendo duplicado no mfe de conteúdo.
 */
const isDevelopmentEnv = computed(() => import.meta.env.DEV)

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
