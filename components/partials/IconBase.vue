<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class IconBase extends Vue {
    @Prop({ default: 18 })
    width!: number;

    @Prop({ default: 18 })
    height!: number;

    @Prop({ default: 'currentColor' })
    iconColor!: string;
}
</script>
