<template>
  <v-container
    class="px-8"
    fluid=""
    style="height: 100%; background: #f3f4f7"
  >
    <DataTabs :tabs="['Data Center', 'System & Networks', 'DCIM']">
      <!-- Data center -->
      <v-tab-item
        transition="fade-transition"
        reverse-transition="fade-transition"
        value="tab-0"
        style="background: #f3f4f7"
      >
        <DataCenter />
      </v-tab-item>
      <!-- System & Networks -->
      <v-tab-item
        transition="fade-transition"
        reverse-transition="fade-transition"
        value="tab-1"
      >
        Tab 2
      </v-tab-item>
      <!-- DCIM -->
      <v-tab-item
        transition="fade-transition"
        reverse-transition="fade-transition"
        value="tab-2"
      >
        Tab 3
      </v-tab-item>
    </DataTabs>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    DataTabs: () => import('@/components/partials/DataTabs.vue'),
    // Tabs Content
    DataCenter: () => import('@/components/dashboard/monitor/DataCenter.vue')
  }
})
export default class Index extends Vue {

}
</script>
