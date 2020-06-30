<template>
  <v-navigation-drawer
    app
    light=""
    color="#ECF0F6"
    width="260"
    fixed=""
    permanent=""
    floating=""
    class="side-nav"
  >
    <v-list
      class="pt-8 pb-4"
      style="max-height:243px"
    >
      <v-list-item class="mb-4">
        <v-img
          width="56"
          height="56"
          contain=""
          :src="organisation.Logo"
        />
        <v-sheet color="transparent">
          <v-select
            v-model="selectedOrganisation"
            :items="organisationList"
            :disabled="isLoading"
            :placeholder="isLoading ? 'Loading...' : ''"
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
            @change="getOrganisationSites"
          />
          <v-sheet
            color="transparent"
            class="mt-n1 d-flex align-center"
          >
            <v-icon
              class="ml-3"
              color="#13C2C2"
              size="10.94"
            >
              $settings
            </v-icon>
            <span
              style="color:#13C2C2; cursor:pointer"
              class="caption ml-1"
            >Settings</span>
          </v-sheet>
        </v-sheet>
      </v-list-item>
      <v-list-item class="px-1 mb-1">
        <v-select
          v-model="selectedSite"
          :items="siteList"
          :disabled="isLoading"
          style="color:#13C2C2 !important; font-weight:500"
          solo=""
          class="solo"
          hide-details=""
          dense=""
          :placeholder="isLoading ? 'Loading...' : ''"
          background-color="#fff"
          color="#2D415C"
          :menu-props="{
            nudgeBottom: 35,
          }"
          append-icon="mdi-chevron-down"
          @change="setSiteDataCenters"
        />
      </v-list-item>
      <v-list-item class="px-1">
        <v-sheet color="transparent">
          <label
            class="caption mb-1 ml-3 font-weight-light"
            style="font-family:'Circe'; color:#79C3A7"
          >Data List</label>
          <v-select
            v-model="selectedDataCenter"
            :items="dataCenterList"
            item-text="Name"
            item-value="Name"
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
            @change="storeSelectedDataCenter"
          />
        </v-sheet>
      </v-list-item>
    </v-list>
    <v-divider
      style="border-color: #ADC1DB"
    />
    <v-sheet
      class="link-container pt-5"
      color="transparent"
      style="overflow-y:auto; max-height: calc(100vh - 323px); padding-bottom: 20px"
    >
      <v-list>
        <label
          class="caption mb-1 ml-4 font-weight-light"
          style="font-family:'Circe'; color:#79C3A7"
        >Monitoring</label>
        <v-list>
          <v-list-item
            v-for="(p, i) in monitoring"
            :key="i"
            dense=""
            :to="p.to"
            active-class="link-active"
            style="height: 44px;"
          >
            <v-icon
              size="20"
              color="#8594A8"
            >
              ${{ p.icon }}
            </v-icon>
            <div class="mr-2" />
            {{ p.name }}
          </v-list-item>
        </v-list>
      </v-list>
      <v-list>
        <label
          class="caption mb-1 ml-4 font-weight-light"
          style="font-family:'Circe'; color:#79C3A7"
        >Alerts</label>
        <v-list>
          <v-list-item
            v-for="(p, i) in alerts"
            :key="i"

            active-class="link-active"
            dense=""
            :to="p.to"
            style="height: 44px;"
          >
            <v-icon
              size="19"
              color="#8594A8"
            >
              ${{ p.icon }}
            </v-icon>
            <div class="mr-2" />
            {{ p.name }}
          </v-list-item>
        </v-list>
      </v-list>
      <v-list>
        <label
          class="caption mb-1 ml-4 font-weight-light"
          style="font-family:'Circe'; color:#79C3A7"
        >Operations</label>
        <v-list>
          <v-list-item
            v-for="(p, i) in operations"
            :key="i"

            active-class="link-active"
            dense=""
            :to="p.to"
            style="height: 44px;"
          >
            <v-icon
              size="19"
              color="#8594A8"
            >
              ${{ p.icon }}
            </v-icon>
            <div class="mr-2" />
            {{ p.name }}
          </v-list-item>
        </v-list>
      </v-list>
      <v-divider
        style="border-color: #ADC1DB"
      />
      <v-list>
        <v-list>
          <v-list-item
            v-for="(p, i) in index"
            :key="i"

            active-class="link-active"
            dense=""
            :to="p.to"
            style="height: 44px;"
          >
            <v-icon
              size="19"
              color="#8594A8"
            >
              ${{ p.icon }}
            </v-icon>
            <div class="mr-2" />
            {{ p.name }}
          </v-list-item>
        </v-list>
      </v-list>
    </v-sheet>
    <template v-slot:append>
      <v-list style="box-shadow:0 5px 3px rgba(0,0,0,.1)">
        <v-list-item class="mb-4">
          <v-avatar>
            <v-img
              width="56"
              height="56"
              contain=""
              :src="require('@/assets/img/user.png')"
            />
          </v-avatar>
          <v-sheet
            color="transparent"
            class="mt-2"
          >
            <h3
              style="font-family: 'Circe'; font-size: 18px; color:#505965 !important;"
              class="mt-n2 ml-3 font-weight-bold"
            >
              Jackie Richards
            </h3>
            <v-sheet
              color="transparent"
              class="d-flex align-center"
            >
              <v-icon
                class="ml-3"
                color="#13C2C2"
                size="10.94"
              >
                $settings
              </v-icon>
              <span
                style="color:#13C2C2; cursor:pointer"
                class="caption ml-1"
              >Account setting</span>
            </v-sheet>
          </v-sheet>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { store } from '../../store';
import { Organisation, DataCenter } from '../../store/types/organisation';

@Component
export default class SideNav extends Vue {
  // For organisations fetching
  isLoading = false;

  // Selected Organisation data
  organisation = {} as Organisation

  organisationList: Array<string> = []
  siteList: Array<string> = [];
  dataCenterList:Array<DataCenter> = [];

  selectedOrganisation = '';
  selectedSite = '';
  selectedDataCenter = '';

  // Dashboard pages
  monitoring = [
    { name: 'Monitor Dashboard', to: '/monitoring/dashboard', icon: 'dashboard' },
    { name: 'Network and Systems', to: '/monitoring/network-and-system', icon: 'system' },
    { name: 'DCIM', to: '/monitoring/dcim', icon: 'database' },
    { name: 'Analytics', to: '/monitoring/analytics', icon: 'reconciliation' }
  ]

  alerts = [
    { name: 'Alerts Dashboard', to: '/alerts/dashboard', icon: 'fire' },
    { name: 'Action Center', to: '/alerts/action-center', icon: 'alert' }
  ]

  operations = [
    { name: 'Configure', to: '/operations', icon: 'branches' }
  ]

  index = [
    { name: 'Reports', to: '/reports', icon: 'report' },
    { name: 'Administration', to: '/administration', icon: 'administration' }
  ]

  get organisations () {
    return store.getters.organisations;
  }

  async mounted () {
    this.isLoading = true;
    // Fetching all organisations
    await store.dispatch.fetchOrganisations();
    // Adding all the fetched organisations id to the organisationList dropdown prop
    this.organisationList = this.organisations!.map(org => org.OrganisationId);
    // Setting the default organisation select value
    this.selectedOrganisation = this.organisationList[0];
    // Fetching selected organisation details
    await this.getOrganisationSites(this.selectedOrganisation);

    this.isLoading = false;
  }

  // @change organisation v-select
  async getOrganisationSites (oid: string) {
    this.isLoading = true;
    // Fetch selected organisation
    this.organisation = await store.dispatch.fetchOrganisation({ oid });
    // Adding all the organisation sites data to siteList dropdown prop
    this.siteList = this.organisation.Sites.map(s => s.Name);
    // set selectedSite to the first default value
    this.selectedSite = this.siteList[0];
    // adding all the selected site's datacenters to dataCenterList
    this.setSiteDataCenters(this.selectedSite);

    // Store the selectedOrganisation value in vuex store
    store.commit.SET_SYSTEM_SELECTION({
      key: 'organisationName',
      value: oid
    });

    this.isLoading = false;
  }

  // @change site v-select
  setSiteDataCenters (siteName: string) {
    // Adding all the selected site's data center to dataCenterList dropdown prop
    this.organisation.Sites.forEach((s) => {
      if (s.Name === siteName) {
        this.dataCenterList = s.DataCenters;
      }
    });

    // Selecting the first datacenter of the current site
    this.selectedDataCenter = this.dataCenterList[0].Name;

    // Store the selectedSite value in vuex store
    store.commit.SET_SYSTEM_SELECTION({
      key: 'siteName',
      value: siteName
    });

    // Store the selectedDataCenter value in vuex store
    this.storeSelectedDataCenter();
  }

  // @change dataCenter v-select
  storeSelectedDataCenter () {
    store.commit.SET_SYSTEM_SELECTION({
      key: 'dataCenterName',
      value: this.selectedDataCenter
    });
  }
}
</script>

<style lang="scss" scoped>
  .link-container{
    &::-webkit-scrollbar{
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb{
      background: #ddd;
      border-radius:5px;
    }
  }
</style>

<style lang="scss">
.solo.organization .v-input__slot{
  padding-right: 0 !important;
}

.side-nav .v-navigation-drawer__content{
  overflow-y:hidden;
}

.link-container {
  .v-list-item{
    color: #8594A8;

    &::before{
      border-right: 2px solid transparent;
      background:none;
      opacity: 1;
    }
  }

  .link-active{
      color: #006d75 !important;
      svg{
        color: #006d75 !important;
      }
      &::before{
        opacity: 1;
        border-right: 2px solid #006d75
      }
    }
}

</style>
