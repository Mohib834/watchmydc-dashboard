<template>
  <v-app class="#app">
    <!-- Menus -->
    <Menu />
    <SideNav style="margin-left: 56px;" />
    <!-- Content -->
    <v-main style="margin-left:56px;">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    Menu: () => import('@/components/dashboard/Menu.vue'),
    SideNav: () => import('@/components/dashboard/SideNav.vue')
  }
})
export default class Default extends Vue {

}
</script>

<style lang="scss">
// Global styles
@import '@/assets/main.scss';
</style>
