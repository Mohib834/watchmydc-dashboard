<template>
  <v-navigation-drawer
    app
    light=""
    mini-variant-width="56"
    color="#F2F7FB;"
    mini-variant=""
    fixed=""
    class="menu"
    permanent=""
  >
    <v-list
      dense=""
      class="pt-8 pb-2"
    >
      <v-list-item>
        <v-img
          width="22.78"
          height="25.57"
          contain=""
          :src="require('@/assets/icons/global/logo.svg')"
        />
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item
        class="pa-0"
      >
        <v-img
          width="24"
          height="24"
          contain=""
          :src="require('@/assets/icons/global/star.svg')"
        />
        </v-btn>
      </v-list-item>
      <v-list-item class="pa-0">
        <v-img
          width="18.75"
          height="18.75"
          contain=""
          :src="require('@/assets/icons/global/magnify.svg')"
        />
      </v-list-item>
      <v-list-item class="pa-0">
        <v-img
          width="24"
          height="24"
          contain=""
          :src="require('@/assets/icons/global/plus.svg')"
        />
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-list>
          <v-list-item class="pa-0">
            <v-img
              width="15.75"
              height="20.62"
              contain=""
              :src="require('@/assets/icons/global/bell.svg')"
            />
          </v-list-item>
          <v-list-item class="pa-0">
            <v-img
              width="15.75"
              height="20.62"
              contain=""
              :src="require('@/assets/icons/global/question-circle.svg')"
            />
          </v-list-item>
        </v-list>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Menu extends Vue {

}
</script>

<style lang="scss">
.menu .v-navigation-drawer__border{
  display:none;
}
</style>
