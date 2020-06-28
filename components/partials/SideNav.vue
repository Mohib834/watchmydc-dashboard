<template>
  <v-navigation-drawer
    app
    light=""
    color="#ECF0F6;"
    width="260"
    fixed=""
    permanent=""
    class="side-nav"
  >
    <v-list class="pt-8 pb-4">
      <v-list-item class="mb-4">
        <v-img
          width="56"
          height="56"
          contain=""
          :src="require('@/assets/img/organization-logo.png')"
        />
        <v-sheet color="transparent">
          <v-select
            v-model="organization"
            :items="items"
            style="font-family: 'Circe'; font-size: 18px; color:#505965 !important;"
            solo=""
            class="solo organization mt-n2 font-weight-bold"
            hide-details=""
            dense=""
            background-color="transparent"
            color="#2D415C"
            :menu-props="{
              nudgeBottom: 35,
              nudgeRight:10,
            }"
            append-icon="mdi-chevron-down"
          />
          <v-sheet
            color="transparent"
            class="mt-n1 d-flex align-center"
          >
            <div>
              <v-img
                v-sheet
                width="10.94"
                height="10.94"
                contain=""
                class="ml-3"
                :src="require('@/assets/icons/global/settings.svg')"
              />
            </div>
            <span
              style="color:#13C2C2; cursor:pointer"
              class="caption ml-1"
            >Settings</span>
          </v-sheet>
        </v-sheet>
      </v-list-item>
      <v-list-item class="px-1 mb-1">
        <v-select
          v-model="site"
          :items="siteItems"
          style="color:#13C2C2 !important; font-weight:500"
          solo=""
          class="solo"
          hide-details=""
          dense=""
          background-color="#fff"
          color="#2D415C"
          :menu-props="{
            nudgeBottom: 35,
          }"
          append-icon="mdi-chevron-down"
        />
      </v-list-item>
      <v-list-item class="px-1">
        <v-sheet color="transparent">
          <label
            class="caption mb-1 ml-3"
            style="font-family:'Circe'; color:#79C3A7"
          >Data List</label>
          <v-select
            v-model="dataCenter"
            :items="dataCenters"
            style="color:#13C2C2 !important; font-weight:500"
            solo=""
            class="solo"
            hide-details=""
            dense=""
            background-color="#fff"
            color="#2D415C"
            :menu-props="{
              nudgeBottom: 35,
            }"
            append-icon="mdi-chevron-down"
          />
        </v-sheet>
      </v-list-item>
    </v-list>
    <v-divider
      style="border-color: #ADC1DB"
      class="mb-5"
    />
    <v-list>
      <label
        class="caption mb-1 ml-4"
        style="font-family:'Circe'; color:#79C3A7"
      >Monitoring</label>
      <list-item>
        <v-list>
          <v-list-item
            v-for="n in 4"
            :key="n"
            dense=""
          >
            Monitor Dashboard
          </v-list-item>
        </v-list>
      </list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SideNav extends Vue {
  // Will change it later
  items = ['Organization'];
  siteItems = ['Site name'];
  dataCenters = ['Data Center Name 1']

  organization = 'Organization';
  site = 'Site name';
  dataCenter = 'Data Center Name 1'
}
</script>

<style lang="scss">
.side-nav .v-navigation-drawer__border{
  display:none;
}

.solo.organization .v-input__slot{
  padding-right: 0 !important;
}
</style>
