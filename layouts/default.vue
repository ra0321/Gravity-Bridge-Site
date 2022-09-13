<template>
  <div>
    <section-primary-nav />
    <Nuxt />
    <section-footer />
  </div>
</template>

<style lang="stylus">
// Accessible/SEO friendly CSS hiding
.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

// https://nuxtjs.org/examples/transitions
.page-enter-active
  transition opacity 0.2s $ease-out
.page-leave-active
  transition opacity 0.2s $ease-out

.page-enter,
.page-leave-to
  opacity 0

.btn-group
  display flex
  flex-direction column
  gap 0 var(--grid-gap-x)

@media $breakpoint-small
  .btn-group
    display block
</style>
