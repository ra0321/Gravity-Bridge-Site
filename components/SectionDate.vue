<template>
  <div class="cards-container">
    <div v-for="item in eventDates" :key="item.id" class="card-item">
      <span class="top-left" />
      <span class="top-right" />
      <span class="bottom-left" />
      <span class="bottom-right" />
      <div class="event tm-rf-0 tm-lh-title">{{ item.title }}</div>
      <div class="day tm-rf3 tm-bold tm-lh-title tm-title">
        {{ item.day }}
      </div>
      <div class="month tm-rf0 tm-bold tm-lh-title tm-title">
        {{ item.month }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    eventDates() {
      return this.$store.state.dates
    },
  },
}
</script>

<style lang="stylus" scoped>
.cards-container
  display grid

.card-item
  padding 1.5rem 2rem
  border-radius $border-radius-5
  position relative
  margin-right -1px

.top-left
  position absolute
  top 0
  left 0
  angle-accent(nw)

.top-right
  position absolute
  top 0
  right 0
  angle-accent(ne)

.bottom-left
  position absolute
  bottom 0
  left 0
  angle-accent(sw)

.bottom-right
  position absolute
  bottom 0
  right 0
  angle-accent(se)

@media $breakpoint-medium
  .cards-container
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-large
  .cards-container
    grid-template-columns repeat(3, 1fr)
</style>
