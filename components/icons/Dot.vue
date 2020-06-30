<template>
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="4"
      cy="4"
      r="3.5"
      fill="#F5222D"
      stroke="white"
    />
  </svg>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Dot extends Vue {}
</script>
<style lang="scss" scoped>
path{
  fill: currentColor;
}
</style>
