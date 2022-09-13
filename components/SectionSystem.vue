<template>
  <div class="tm-section tm-container tm-wrapper">
    <div class="tm-grid-base">
      <div class="graphics">
        <!-- <cld-image
          public-id="system-requirements-graphics_dq4bfn"
          fetch-format="svg"
          quality="auto"
          class="graphics__item"
        /> -->
        <cld-image
          public-id="rewards_y9gz5i.svg"
          fetch-format="svg"
          width="auto"
          quality="auto"
          class="graphics__item"
        />
      </div>
      <div class="text tm-grid-base">
        <div
          class="
            overline
            tm-rf-1
            tm-rf0-m-up
            tm-medium
            tm-lh-title
            tm-overline
            tm-measure-narrow
            tm-muted
          "
        >
          system requirements
        </div>
        <div class="list mt-3">
          <div class="list-item">
            Linux server with any modern Linux distribution
          </div>
          <div class="list-item">4 cores</div>
          <div class="list-item">8 gb of ram</div>
          <div class="list-item">20GB or more of SSD storage</div>
        </div>
        <p class="desc mt-9 tm-muted tm-measure">
          <tm-link href="#" class="tm-link-external"
            >Everything you need to know</tm-link
          >
          to validate on the Althea blockchain and run the Gravity bridge
          module.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.text
.graphics
.overline
.list
.desc
  grid-column 1/-1
  position relative

.text
.graphics
  grid-row 1

.graphics
  display flex
  align-items flex-end
  position relative

  &__item
    height auto
    position absolute

.list-item
  padding-top var(--spacing-7)
  padding-bottom var(--spacing-7)
  border-bottom 1px solid var(--white-100)

@media $breakpoint-small-max
  .graphics__item
    bottom 6rem

@media $breakpoint-xl
  .graphics
    grid-column 2/span 2

    &__item
      max-width 620%
      left -24rem
      bottom -2rem

  .overline
    grid-column 4/span 5

  .list
    grid-column 5/span 4

  .desc
    grid-column 5/span 6
</style>
