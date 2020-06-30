<template>
  <v-card
    max-width="884px"
    height="647px"
    class="pa-4"
    color="#ecf0f6"
    style="box-shadow: 12px 12px 24px #DDDEE1, -12px -12px 24px #FFFFFF;"
  >
    <v-card-title
      class="pt-0 px-0 d-flex align-center"
      style="font-size: 1.125rem; line-height: 1"
    >
      Systems &amp; Networks &#124; All Alerts (1339)
      <v-sheet
        color="transparent"
        width="300"
        style="margin-top:-7px"
        class="ml-auto network-searchbar"
      >
        <v-text-field
          dense=""
          placeholder="Search"
          style="font-size: 0.875; font-family: 'Circe'"
          append-icon="$magnify"
          hide-details=""
          class="mt-0 input-field"
        />
      </v-sheet>
      <v-btn
        text
        color="primary"
        class="ml-0 text-capitalize"
      >
        <v-icon
          size="21"
          class="mr-2"
        >
          $upload
        </v-icon>
        Export all
      </v-btn>
      <v-btn
        icon
        color="primary"
      >
        <v-icon
          size="20"
        >
          $fullscreen
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-tabs
      class="network-tabs"
      height="34"
      value="tab-1"
      hide-slider=""
      background-color="transparent"
    >
      <v-tab href="#tab-0">
        All (1339)
      </v-tab>
      <v-tab href="#tab-1">
        Critical &nbsp;<span style="color: #F5222D">(839)</span>
      </v-tab>
      <v-tab href="#tab-2">
        Warnings &nbsp;<span style="color: #F5222D">(85)</span>
      </v-tab>
      <v-tab>
        Informational &nbsp;<span style="color: #1890FF">(839)</span>
      </v-tab>

      <v-tab-item
        value="tab-0"
        transition="fade-transition"
        reverse-transition="fade-transition"
      >
        adfadfaxcaf
      </v-tab-item>

      <v-tab-item
        value="tab-1"
        transition="fade-transition"
        reverse-transition="fade-transition"
      >
        <v-list
          class="pa-0"
          style="background: #ecf0f6"
        >
          <v-list-item
            v-for="n in 4"
            :key="n"
            style="height: 77px; background: #fff"
            class="d-flex justify-space-between pa-2 network-list-item"
          >
            <!-- Dynamic Data  -->
            <v-sheet color="transparent">
              <p class="mb-0">
                HP NC553i Dual Port FlexFabric 10Gb Converged Network Adapter-Local Area Connection
              </p>
              <v-sheet
                color="transparent"
                class="d-flex"
              >
                <div class="d-flex flex-column mr-4">
                  <span
                    style="color: #79c3a7; font-family: 'Circe'"
                    class="text-caption"
                  >Time</span>
                  <span style="font-size:0.875rem; color: #8594A8">
                    10.12.2020 &nbsp; 10:25 &nbsp; <span style="color: #adc1db; font-size: 12px">5 min ago</span>
                  </span>
                </div>
                <div class="d-flex flex-column mr-4">
                  <span
                    style="color: #79c3a7; font-family: 'Circe'"
                    class="text-caption"
                  >Device</span>
                  <span style="font-size:0.875rem; color: #8594A8">
                    Device name
                  </span>
                </div>
                <div class="d-flex flex-column">
                  <span
                    style="color: #79c3a7; font-family: 'Circe'"
                    class="text-caption"
                  >IP Address</span>
                  <span style="font-size:0.875rem; color: #8594A8">
                    10.35.32.45
                  </span>
                </div>
              </v-sheet>
            </v-sheet>
            <StatusChip class="ml-auto" />
          </v-list-item>
        </v-list>
      </v-tab-item>
      <v-tab-item
        value="tab-2"
        transition="fade-transition"
        reverse-transition="fade-transition"
      >
        adfa
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class NetworkCard extends Vue {

}
</script>

<style lang="scss">
.input-field {
    svg{
        width:14px;
        margin-top:0 !important;
    }
}

.network-tabs {
    .v-tab{
        clip-path: polygon(0 0, 82% 0, 100% 100%, 0% 100%);
        padding-left: 10px;
        padding-right:30px;
        text-transform:capitalize;
        &:not(:first-child){
            margin-left: -25px;
        }
        &.v-tab--active{
            background: #fff;
            z-index:100;
            color: #2d415c;
        }
    }

    .v-tabs-bar{
        border-bottom: 0 !important;
    }

    .v-tabs-items{
      margin-top:-2px;
    }
}

.network-list-item{
  position:relative;
  border-radius: 6px;
  &::before{
    content:'';
    width: 3px;
    border-radius:100px;

    height: 90%;
    position:absolute;
    top:50%;
    left:1px;
    transform:translateY(-50%);
    background:#F5222D;
    opacity: 1 !important;
  }

  &:hover {
    background: #eeeeee !important;
  }
}

@media(max-width: 1600px){
  .network-searchbar{
    width: 200px !important;
  }
}
</style>
