<template>
  <main>
    <div class="section-hero section-first">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text">
          <div
            class="
              overline
              tm-rf0 tm-rf1-m-up tm-medium tm-lh-title tm-overline tm-muted
            "
          >
            404
          </div>
          <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title mt-5">
            Page Not Found
          </h1>
          <tm-button to-link="internal" to="/" class="btn mt-7"
            >&#8592; Home
          </tm-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: '404',
    }
  },
}
</script>

<style lang="stylus" scoped>
// Hero
.section-hero
  text-align center

.section-hero .text
  grid-column 1/-1

@media $breakpoint-xl
  .section-hero .text
    grid-column 2/span 10
</style>
