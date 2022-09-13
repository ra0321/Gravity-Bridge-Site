<template>
  <div class="tm-section tm-container tm-wrapper">
    <div class="tm-grid-base">
      <div
        class="
          overline
          tm-rf-1
          tm-rf0-m-up
          tm-medium
          tm-lh-title
          tm-overline
          tm-measure-narrow
          tm-text
        "
      >
        sponsored by
      </div>
    </div>

    <div class="logos-list mt-7">
      <tm-link v-for="item in sponsors" :key="item.text" :href="item.url">
        <tm-tooltip :text="`${item.text} ↗`" position="top-center">
          <img
            :src="require(`~/assets/images/logos/${item.img}.svg`)"
            :alt="item.text"
          />
        </tm-tooltip>
      </tm-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sponsors() {
      return this.$store.state.sponsors
    },
  },
}
</script>

<style lang="stylus" scoped>
.logos-list
  display grid
  grid-template-columns repeat(2, 1fr)
  column-gap var(--spacing-7)
  row-gap var(--spacing-6)
  align-items center
  position relative

.logos-list > a
  opacity 0.35

.overline
  grid-column 1/-1

@media $breakpoint-xsmall-only
  .logos-list
    row-gap var(--spacing-7)

@media $breakpoint-large
  .logos-list
    grid-template-columns repeat(4, 1fr)

@media $breakpoint-xl
  .overline
    grid-column 2/span 2

  .logos-list
    grid-template-columns repeat(auto-fit, minmax(0, 1fr))
</style>
