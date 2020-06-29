<template>
  <v-card
    max-width="758px"
    height="518px"
    elevation="0"
    class="py-4"
  >
    <v-card-title
      class="px-4 pt-0"
      style="font-size: 1.125rem; line-height: 1"
    >
      {{ title }}
      <v-spacer />
      <v-btn
        icon
        class="mr-7"
      >
        <v-icon
          size="21"
          color="#13C2C2"
        >
          $clockcircle
        </v-icon>
      </v-btn>
      <v-btn
        icon
        class="mr-7"
      >
        <v-icon
          size="20"
          color="#13C2C2"
        >
          $fullscreen
        </v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon
          size="17.5"
          color="#13C2C2"
        >
          $reload
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      disable-sort=""
      :items-per-page="5"
      hide-default-footer=""
      class="data-table elevation-0"
      :header-props="{
        color: '#FAFAFA'
      }"
    >
      <template v-slot:item.name="{ item }">
        <span v-html="item.name" />
      </template>
      <!-- Progress bar  -->
      <template
        v-slot:item.utilization="{ item }"
      >
        <ProgressBar :value="item.utilization" />
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    ProgressBar: () => import('@/components/partials/ProgressBar.vue')
  }
})
export default class DataCard extends Vue {
    @Prop()
    title!: string;

    @Prop()
    headers!: Array<{
      text: string;
      value: string | number;
      class: string;
    }>;

    @Prop()
    items!: Array<{}>
}
</script>

<style lang="scss">
.data-table {
  .v-data-table-header{
    tr{
      height: 41px;
    }
  }

  tr{
    height: 70px;
  }
}

.data-table-header {
  background: #FAFAFA;
  border-bottom:0 !important;
  font-family: 'Circe';
  color: #2D415C;
}

.name{
  font-size: 12px;
  color: #adc1db;
  display:block;
}
</style>
