<template>
  <!-- INTERNAL -->
  <nuxt-link
    v-if="toLink === 'internal'"
    :to="to"
    v-bind="{ disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      _classes,
    ]"
    :style="_styles"
  >
    <span class="tm-button__content z-1">
      <slot />
    </span>
  </nuxt-link>
  <!-- EXTERNAL -->
  <tm-link
    v-else-if="toLink === 'external'"
    :href="href"
    target="_blank"
    rel="noreferrer noopener"
    v-bind="{ target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      'tm-button__external',
      _classes,
    ]"
    :style="_styles"
  >
    <span class="tm-button__content z-1">
      <slot />
    </span>
  </tm-link>
  <!-- DISABLED -->
  <button
    v-else-if="disabled"
    v-bind="{ type, target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      _classes,
    ]"
    :style="_styles"
    aria-disabled="true"
  >
    <span class="tm-button__content z-1">
      <slot />
    </span>
  </button>

  <!-- DEFAULT -->
  <button
    v-else
    v-bind="{ type, target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      _classes,
    ]"
    :style="_styles"
  >
    <span class="tm-button__content z-1">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      /**
       * `s` | `m` | `l` | `xl`
       */
      type: String,
      default: 'm',
    },
    /**
     * Variant: `text` | `outlined` | `contained`
     */
    variant: {
      type: String,
      default: 'contained',
    },
    /**
     * CSS color of background
     */
    backgroundColor: {
      type: String,
      default: null,
    },
    /**
     * CSS color of light mode background
     */
    lightBackgroundColor: {
      type: String,
      default: null,
    },
    /**
     * CSS color of border
     */
    borderColor: {
      type: String,
      default: null,
    },
    /**
     * CSS color of light mode border
     */
    lightBorderColor: {
      type: String,
      default: null,
    },
    /**
     * CSS color of color
     */
    color: {
      type: String,
      default: null,
    },
    /**
     * CSS color of light mode color
     */
    lightColor: {
      type: String,
      default: null,
    },
    /**
     * Glow style
     */
    glow: {
      type: Boolean,
      default: false,
    },
    /**
     * Disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Type: `submit`
     */
    type: {
      type: String,
      default: null,
    },
    /**
     * toLink: `anchor` | `internal` | `external`
     */
    toLink: {
      type: String,
      default: null,
    },
    /**
     * to
     */
    to: {
      type: String,
      default: null,
    },
    /**
     * href
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * target
     */
    target: {
      type: String,
      default: null,
    },
    /**
     * rel
     */
    rel: {
      type: String,
      default: null,
    },
    /**
     * Classes
     */
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    _classes() {
      let classes = this.classes
      switch (this.size) {
        case 's':
          classes += ' tm-rf-1 tm-rf0-l-up'
          break
        case 'l':
          classes += ' tm-rf1'
          break
        case 'xl':
          classes += ' tm-rf2'
          break
        default:
          classes += ' tm-rf0'
      }
      return classes
    },
    _styles() {
      const styles = {}
      const backgroundColor = this.backgroundColor
      const borderColor = this.borderColor
      const color = this.color

      if (backgroundColor) styles['--bg-color'] = backgroundColor
      if (borderColor) styles['--border-color'] = borderColor
      if (color) styles['--color'] = color

      return styles
    },
  },
}
</script>

<style lang="stylus" scoped>
.tm-button
  // default colors for contained variant
  --bg-color var(--title)
  --border-color var(--title)
  --color var(--bg)

  // base
  position relative
  display inline-flex
  align-items center
  justify-content center
  color var(--color)
  border-radius 0.47em // relative border-radius
  transition all .25s $ease-out

  &:active
    opacity 0.88
    transition-duration .05s

  /* glow styling (optional) */
  &__glow
    &::before
      content ''
      position absolute
      border-radius inherit
      transform translateZ(0)
      z-index $z-index-0 // may cause unintended overlays
      opacity 0.4
      transition background-position .4s $ease-out, opacity .5s $ease-out
    &:hover,
    &:focus
      &,
      &::before
        background-position right bottom
      &::before
        transition-duration .2s
        opacity 0.5

  /* text variant */
  &__variant__text
    --color var(--link)

    &:hover,
    &:focus
      opacity 0.8
    &:active
      opacity 0.6

  /* outlined variant */
  &__variant__outlined
    --border-color var(--link)
    --color var(--link)

    &::after,
    &.tm-button__glow::before
      border 0.0625rem solid var(--border-color)
    &::after // border
      content ''
      position absolute
      trbl 0
      border-radius inherit
      opacity 0.33
      transition opacity .25s $ease-out
    &.tm-button__glow::before // glow
      trbl -0.0625em
      filter blur(0.4rem)
    &:hover,
    &:focus
      &::after
        opacity 1

  /* contained variant */
  &__variant__contained
    background var(--bg-color)
    background-size 200% auto
    box-shadow var(--elevation-4)
    hover-raise -1px
    hover-elevation(16, $active-opacity:0.4)
    &::before // glow
      trbl 0.125em 1em 0
      background inherit
      filter blur(1.25rem) brightness(1.5)

  /* disabled state */
  &[disabled]
    cursor not-allowed !important
    opacity 0.65 !important
    // re-enable to remove cursor
    // pointer-events none

  // sizes
  &__size__s
    padding-top var(--spacing-4)
    padding-bottom var(--spacing-4)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined
       padding-left var(--spacing-6)
       padding-right var(--spacing-6)
  &__size__m
    padding-top var(--spacing-5)
    padding-bottom var(--spacing-5)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined
       padding-left var(--spacing-8)
       padding-right var(--spacing-8)
  &__size__l
    padding-top var(--spacing-6)
    padding-bottom var(--spacing-6)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined
       padding-left var(--spacing-9)
       padding-right var(--spacing-9)
  &__size__xl
    padding-top var(--spacing-6)
    padding-bottom var(--spacing-6)

  &__content
    position relative
    display flex
    flex-wrap wrap
    white-space nowrap

  /* icons */
  >>> .icon__right
  >>> .icon__left
    transform-fix()
    transition transform 0.25s $ease-out
  >>> .icon__left
    margin-right 0.5em
  >>> .icon__right
    margin-left 0.5em
  &:hover,
  &:focus
    >>> .icon__right
      transform translateX(10%)
    >>> .icon__left
      transform translateX(-10%)
    >>> .icon__down
      transform translateY(10%)
    .tm-button__external.tm-button__variant__text&
      >>> .icon__right
        transform translate(10%, -10%)
      >>> .icon__down
        transform translateY(10%)

.tm-button + .tm-button
  margin-top var(--spacing-6)

@media $breakpoint-small
  .tm-button + .tm-button
    margin-left var(--spacing-8)
    margin-top 0
</style>
