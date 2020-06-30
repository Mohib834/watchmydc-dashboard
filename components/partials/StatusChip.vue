<template>
  <v-chip
    class="text-center d-flex justify-center"
    style="width: 102px; height: 26px; background: #fff1f0; font-size: 14px"
  >
    <v-icon
      size="8"
      class="ml-n3 mr-5"
    >
      $dot
    </v-icon>
    <span style="color: #8C8C8C">Error</span>
  </v-chip>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class StatusChip extends Vue {
    @Prop()
    status!: string;
}
</script>
