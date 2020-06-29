<template>
  <v-navigation-drawer
    app
    light=""
    mini-variant-width="56"
    color="#F2F7FB;"
    mini-variant=""
    fixed=""
    floating=""
    permanent=""
    style="overflow-y:hidden"
  >
    <v-list
      dense=""
      class="pt-8 pb-2"
    >
      <v-list-item class="px-0 d-flex justify-center">
        <v-icon
          size="28"
          color="primary"
        >
          $logo
          </v-btn>
        </v-icon>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item
        class="py-0 d-flex justify-center"
      >
        <v-btn icon="">
          <v-icon
            size="24"
            color="primary"
          >
            $star
          </v-icon>
        </v-btn>
        </v-btn>
      </v-list-item>
      <v-list-item class="py-0 d-flex justify-center">
        <v-btn icon>
          <v-icon
            size="20"
            color="primary"
          >
            $magnify
          </v-icon>
        </v-btn>
      </v-list-item>
      <v-list-item class="py-0 d-flex justify-center">
        <v-btn icon>
          <v-icon
            size="24"
            color="primary"
          >
            $plus
          </v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list>
        <v-list-item class="py-0 d-flex justify-center">
          <v-btn icon>
            <v-icon
              size="22"
              color="primary"
            >
              $bell
            </v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item class="py-0 d-flex justify-center">
          <v-btn icon>
            <v-icon
              size="22"
              color="primary"
            >
              $questionCircle
            </v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Menu extends Vue {

}
</script>
