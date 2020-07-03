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
      <v-menu
        v-model="timeMenu"
        min-width="240"
        offset-y
        max-height="150px"
        :close-on-content-click="false"

        content-class="menu"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            class="mr-7"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon
              size="21"
              color="#13C2C2"
            >
              $clockcircle
            </v-icon>
          </v-btn>
        </template>
        <v-sheet class="pa-3 pt-2">
          <v-sheet class="d-flex align-center justify-space-between mb-2">
            <span>Select timespan</span>
            <v-btn
              icon
              small=""
              @click="timeMenu = false"
            >
              <v-icon size="16">
                mdi-close
              </v-icon>
            </v-btn>
          </v-sheet>
          <v-sheet class="d-flex mb-2">
            <!-- Start date and time pickers  -->
            <v-menu
              v-model="openStartDatePicker"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="durationDate.startDate"
                  dense=""
                  outlined=""
                  append-icon="mdi-calendar-blank"
                  class="timespan-field timespan-field-date"
                  style="width:140px"
                  hide-details=""
                  color="#ccc"
                  placeholder="Start date"
                  readonly=""
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="durationDate.startDate"
                class="elevation-0"
                @input="openStartDatePicker = false"
              />
            </v-menu>
            <v-menu
              v-model="openStartTimePicker"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="durationTime.startTime"
                  dense=""
                  outlined=""
                  hide-details=""
                  color="#ccc"
                  style="width:100px"
                  append-icon="mdi-clock"
                  class="timespan-field timespan-field-time"
                  placeholder="Time"
                  readonly=""
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-time-picker
                v-model="durationTime.startTime"
                class="elevation-0"
                format="24hr"
              >
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="setTime('start')"
                >
                  Ok
                </v-btn>
              </v-time-picker>
            </v-menu>
          </v-sheet>
          <!-- End date and time pickers  -->
          <v-sheet class="d-flex">
            <v-menu
              v-model="openEndDatePicker"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="durationDate.endDate"
                  dense=""
                  outlined=""
                  append-icon="mdi-calendar-blank"
                  class="timespan-field timespan-field-date"
                  style="width:140px"
                  hide-details=""
                  color="#ccc"
                  placeholder="End date"
                  readonly=""
                  v-bind="attrs"

                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="durationDate.endDate"
                class="elevation-0"
                @input="openEndDatePicker = false"
              />
            </v-menu>
            <v-menu
              v-model="openEndTimePicker"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="durationTime.endTime"
                  dense=""
                  outlined=""
                  hide-details=""
                  color="#ccc"
                  style="width:100px"
                  append-icon="mdi-clock"
                  class="timespan-field timespan-field-time"
                  placeholder="Time"
                  readonly=""
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-time-picker
                v-model="durationTime.endTime"
                class="elevation-0"
                format="24hr"
              >
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="setTime('end')"
                >
                  Ok
                </v-btn>
              </v-time-picker>
            </v-menu>
          </v-sheet>
        </v-sheet>
      </v-menu>
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
        @click="refreshData"
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
import { store } from '@/store';

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

    @Prop()
    metric!: 'cpu' | 'memory' | 'disk' | 'interface-usage';

    items: Array<{}> = [];
    isLoading = true;

    // Timespan Menu
    timeMenu = false;

    openStartDatePicker = false;
    openEndDatePicker = false;

    openStartTimePicker = false;
    openEndTimePicker = false;

    durationDate = {
      startDate: '2020-06-27',
      endDate: '2020-07-27'
    }

    durationTime = {
      startTime: '00:00',
      endTime: '00:00'
    }

    get userSystemSelection () {
      return store.getters.userSystemSelection;
    }

    @Watch('userSystemSelection', { deep: true })
    handler () {
      this.isLoading = true;
      // If user changes their system selection fetch the data again
      this.getCardData();
    }

    @Watch('durationDate', { deep: true })
    durationDateHandler () {
      // If duration change get the new data
      this.isLoading = true;

      this.getCardData();
    }

    mounted () {
      this.isLoading = true;
      this.getCardData();
    }

    // set time and fetch data for that time
    // @click time-picker
    setTime (time: 'start' | 'end') {
      // Closing the time picker
      if (time === 'start') {
        this.openStartTimePicker = false;
      } else {
        this.openEndTimePicker = false;
      }

      this.isLoading = true;
      this.getCardData();
    }

    refreshData () {
      this.isLoading = true;
      this.getCardData();
    }

    getCardData () {
      // time in ISO format

      const startTime = this.durationDate.startDate + 'T' + this.durationTime.startTime + ':00';
      const endTime = this.durationDate.endDate + 'T' + this.durationTime.endTime + ':00';

      // Clearing the initial table data
      this.items = [];

      store.dispatch.fetchTopDevices({
        metric: this.metric,
        duration: {
          startTime,
          endTime
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
              receive: d.interface.in_usage_bits_per_second && d.interface.in_usage_bits_per_second.toFixed(4),
              transmit: d.interface.out_usage_bits_per_second && d.interface.out_usage_bits_per_second.toFixed(4)
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

.menu{
  box-shadow: 0px 5px 3px -3px rgba(0, 0, 0, 0.01),
  0px 0px 3px 1px rgba(0, 0, 0, 0.01),
  0px 3px 6px 2px rgba(0, 0, 0, 0.1);
  border-radius:16px;
}

.timespan-field{
  fieldset{
    border-width: 1.5px;
    border-radius:4px;
    border-color:#ccc;
  }

  .v-input__icon i{
    color: #ccc;
    font-size: 20px
  }

  &.v-input--is-focused fieldset{
    border: 1.5px solid #ccc;
  }

  &.timespan-field-date{
    fieldset{
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right:none !important;
    }
  }

  &.timespan-field-time{
    fieldset{
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

}

@media(max-width: 1600px){
  .data-table-header {

    &.table-progress{
      width: 194px;
    }
  }
}
</style>
