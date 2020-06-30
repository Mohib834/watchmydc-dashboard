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

      <v-btn
        icon
        @click="getCardData"
      >
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
      <template
        v-if="isLoading"
        v-slot:body="{ items, headers }"
      >
        <tbody class="">
          <tr style="background: #fff !important">
            <td
              v-for="(h, i) in headers"
              :key="i"
            >
              <v-skeleton-loader
                :type="`table-cell@8`"
              />
            </td>
          </tr>
        </tbody>
      </template>
      <template v-slot:item.name="{ item }">
        {{ item.name }}<span class="name">{{ item.ip }}</span>
      </template>
      <!-- Progress bar  -->
      <template
        v-slot:item.utilization="{ item }"
      >
        <ProgressBar :value="changeToPercentage(item.utilization)" />
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator';
import { store } from '../../store';

@Component
export default class DataCard extends Vue {
    @Prop()
    title!: string;

    @Prop()
    headers!: Array<{
      text: string;
      value: string | number;
      class: string;
    }>;

    items: Array<{}> = [];

    @Prop()
    metric!: 'cpu' | 'memory' | 'disk' | 'interface-usage';

    isLoading = false;

    get userSystemSelection () {
      return store.getters.userSystemSelection;
    }

    @Watch('userSystemSelection', { deep: true })
    handler () {
      // If user changes their system selection fetch the data again
      this.getCardData();
    }

    mounted () {
      this.getCardData();
    }

    getCardData () {
      this.isLoading = true;

      store.dispatch.fetchTopDevices({
        metric: this.metric,
        duration: {
          startTime: '2020-06-27',
          endTime: '2020-07-27'
        }
      }).then((res) => {
        // Setting table items
        res.forEach((d: any) => {
          // Setting the table item according to the metric response data
          if (this.metric === 'disk') {
            this.items.push({
              name: d.device.name,
              ip: d.device.ip,
              utilization: d.disk.utilization,
              volume: 99 // Not getting any volume data
            });
          } else if (this.metric === 'interface-usage') {
            this.items.push({
              name: d.device.name,
              ip: d.device.ip,
              receive: d.interface.in_usage_bits_per_second.toFixed(4),
              transmit: d.interface.out_usage_bits_per_second.toFixed(4)
            });
          } else {
            this.items.push({
              name: d.name,
              ip: d.ip,
              min: this.changeToPercentage(d.min),
              max: this.changeToPercentage(d.max),
              utilization: d.avg // Average ( but using the same progress bar as utilization ),
            });
          }
        });

        this.isLoading = false;
      });
    }

    changeToPercentage (v: number) {
      return Math.ceil(v * 100);
    }
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
    td{
      border-bottom: 0 !important;
    }
  }
}

.data-table-header {
  background: #FAFAFA;
  border-bottom:0 !important;
  font-family: 'Circe';
  color: #2D415C;

  &.table-progress{
    // min-width: 194px
    width: 268px;
  }
}

.name{
  font-size: 12px;
  color: #adc1db;
  display:block;
}

@media(max-width: 1600px){
  .data-table-header {

    &.table-progress{
      width: 194px;
    }
  }
}
</style>
