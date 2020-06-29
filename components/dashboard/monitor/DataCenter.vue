<template>
  <v-container
    fluid=""
    class="px-0"
    style="height:100%"
  >
    <v-row>
      <v-col cols="6">
        <DataCard
          :headers="headers"
          :items="items"
          title="Devices by CPU Utilization"
        />
      </v-col>
      <v-col cols="6">
        <DataCard
          :headers="headers"
          :items="items"
          title="Devices by Disk Utilization"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <DataCard
          :headers="headers"
          :items="items"
          title="Devices by Memory Utilization"
        />
      </v-col>
      <v-col cols="6">
        <DataCard
          :headers="headers2"
          :items="items2"
          title="Top Interfaces by Bandwidth Utilization"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    DataCard: () => import('@/components/partials/DataCard.vue')
  }
})
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
      class: 'data-table-header'
    }
  ]

  headers2 = [
    {
      text: 'Interface Name',
      value: 'name',
      class: 'data-table-header'
    },
    {
      text: 'Recieve',
      value: 'recieve',
      class: 'data-table-header'
    },
    {
      text: 'Transmit',
      value: 'transmit',
      class: 'data-table-header'
    }
  ]

  items = [
    {
      name: 'OPM-Server25<span class="name">IP: 10.35.32.45</span>',
      volume: 99,
      utilization: 99,
      class: 'data-table-item'
    },
    {
      name: 'OPM-Server25<span class="name">IP: 10.35.32.45</span>',
      volume: 99,
      utilization: 20,
      class: 'data-table-item'
    },
    {
      name: 'OPM-Server25<span class="name">IP: 10.35.32.45</span>',
      volume: 99,
      utilization: 40,
      class: 'data-table-item'
    }
  ]

  items2 = [
    {
      name: 'HP NC553i Dual Port FlexFabric 10Gb Converged Network<span class="name">OPM-Server15 &nbsp; IP: 10.35.32.45</span>',
      recieve: '0.47 %',
      transmit: '0.04 %'
    },
    {
      name: 'HP NC553i Dual Port FlexFabric 10Gb Converged Network<span class="name">OPM-Server15 &nbsp; IP: 10.35.32.45</span>',
      recieve: '0.47 %',
      transmit: '0.04 %'
    },
    {
      name: 'HP NC553i Dual Port FlexFabric 10Gb Converged Network<span class="name">OPM-Server15 &nbsp; IP: 10.35.32.45</span>',
      recieve: '0.47 %',
      transmit: '0.04 %'
    }
  ]
}
</script>
