<template>
  <v-tabs
    id="tabs"
    v-model="tab"
    grow=""
    color="#2D415C"
    fixed-tabs=""
    background-color="transparent"
  >
    <v-tab
      v-for="(tab, i) in tabs"
      :key="i"
      :href="`#tab-${i}`"
      class="ml-0 py-3 d-flex justify-start text-capitalize font-weight-bold"
      style="max-width: 379px; font-family: 'Circe'; font-size: 1.25rem"
    >
      {{ tab }}
    </v-tab>
    <v-btn
      text=""
      class="text-capitalize ml-auto mr-0"
      style="font-size:1.25rem"
    >
      Edit <v-icon
        class="ml-3"
        size="24"
      >
        $edit
      </v-icon>
    </v-btn>
    <!-- Tab content -->
    <slot />

    </v-tabs-items>
  </v-tabs>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class DataTabs extends Vue {
    @Prop()
    tabs!: Array<string>

    tab = 0
}
</script>

<style lang="scss">
#tabs .v-tabs-bar{
  border-bottom: 1px solid #e0e9f5 !important;
}
</style>
