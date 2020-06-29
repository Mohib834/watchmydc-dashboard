<template>
  <v-progress-linear
    height="22"
    rounded=""
    :value="value"
    background-color="#fafafa"
    :class="color"
  >
    {{ value }}
  </v-progress-linear>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ProgressBar extends Vue {
    @Prop()
    value!: number;

    color = 'medium'

    mounted () {
      if (this.value <= 20) {
        this.color = 'low'
      } else if (this.value >= 50) {
        this.color = 'good'
      } else {
        this.color = 'medium'
      }
    }
}
</script>

<style lang="scss">
.good .v-progress-linear__determinate{
  background: linear-gradient(to right, #f6ffed 0%, #52c41a 100%) !important;
}

.medium .v-progress-linear__determinate{
  background: linear-gradient(to right, #FFF7E6 0%, #FA8C16 100%) !important;
}
.low .v-progress-linear__determinate{
  background: linear-gradient(to right, #FFF1F0 0%, #F5222D 100%) !important;

}
</style>
