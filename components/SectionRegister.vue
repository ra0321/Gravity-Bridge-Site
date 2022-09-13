<template>
  <div class="tm-section tm-container tm-wrapper tm-grid-base">
    <div class="cards-wrapper mt-8">
      <tm-link
        v-for="item in ctas"
        :key="item.id"
        :href="item.url"
        class="card-item"
      >
        <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
          {{ item.overline }}
        </div>
        <div class="title tm-rf1 tm-bold tm-lh-title tm-title mt-3">
          {{ item.title }} &#8594;
        </div>
      </tm-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ctas() {
      return this.$store.state.ctas
    },
  },
}
</script>

<style lang="stylus" scoped>
.cards-wrapper
  grid-row 2
  display grid
  gap var(--spacing-7)
  grid-column 1/-1

.card-item
  padding var(--spacing-7)
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)
  background-color var(--fg)

@media $breakpoint-medium
  .cards-wrapper
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-large
  .cards-wrapper
    grid-template-columns repeat(3, 1fr)
</style>
