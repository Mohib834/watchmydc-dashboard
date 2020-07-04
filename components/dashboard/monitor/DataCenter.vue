<template>
  <v-container
    fluid=""
    class="px-0"
    style="height:100%"
  >
    <v-row>
      <v-col cols="6">
        <DataCard
          :headers="headersAvg"
          title="Devices by Memory Utilization"
          metric="memory"
        />
      </v-col>
      <v-col cols="6">
        <DataCard
          :headers="headers"
          title="Devices by Disk Utilization"
          metric="disk"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <DataCard
          :headers="headersAvg"
          title="Devices by CPU Utilization"
          metric="cpu"
        />
      </v-col>
      <v-col cols="6">
        <DataCard
          :headers="headers2"
          metric="interface-usage"
          title="Top Interfaces by Bandwidth Utilization"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <NetworkCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class DataCenter extends Vue {
  // Dummy data
  headers = [
    {
      text: 'Device name',
      value: 'name',
      class: 'data-table-header'
    },
    {
      text: 'Volume',
      value: 'volume',
      class: 'data-table-header'
    },
    {
      text: 'Utilization %',
      value: 'utilization',
      class: 'data-table-header table-progress'
    }
  ]

  headersAvg = [
    {
      text: 'Device name',
      value: 'name',
      class: 'data-table-header'
    },
    {
      text: 'min %',
      value: 'min',
      class: 'data-table-header'
    },
    {
      text: 'max %',
      value: 'max',
      class: 'data-table-header'
    },
    {
      text: 'Average %',
      value: 'utilization',
      class: 'data-table-header table-progress'
    }
  ]

  headers2 = [
    {
      text: 'Interface Name',
      value: 'name',
      class: 'data-table-header'
    },
    {
      text: 'Receive / sec',
      value: 'receive',
      class: 'data-table-header'
    },
    {
      text: 'Transmit / sec',
      value: 'transmit',
      class: 'data-table-header'
    }
  ]
}
</script>
