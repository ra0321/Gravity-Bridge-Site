<template>
  <div class="tm-section tm-container tm-wrapper">
    <div class="tm-wrapper split">
      <div class="left">
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
          prize pool
        </div>
        <h1 class="tm-rf5 tm-bold tm-lh-title mt-5 tm-title">
          10,500 <span class="tm-rf3 tm-bold tm-lh-title">ATOM</span><br />
          at stake
        </h1>
        <div class="desc mt-7">
          <p class="tm-rf1 tm-lh-copy tm-text">
            There will be a 1st, 2nd, and 3rd place prize awarded to the teams
            who discover the most unique edge cases, and will be evaluated based
            on their level of interesting, novel, important, or "cool" factors.
          </p>
          <p class="tm-rf1 tm-lh-copy tm-text">
            For all validators who successfully participate in the testnet, they
            will receive an honorarium gift.
          </p>
        </div>
      </div>
      <div class="right">
        <div class="card">
          <div class="card-inner">
            <div class="top">
              <div class="graphics">
                <cld-image
                  public-id="bridge-prize-graphics_znwqaq"
                  fetch-format="svg"
                  quality="auto"
                  class="graphics__item"
                />
              </div>
              <div class="text">
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
                  1st place
                </div>
                <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
                  5,000
                  <tm-atom />
                </h1>
              </div>
            </div>
            <div class="horizontal-line" />
            <div class="bottom">
              <div class="text">
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
                  2nd place
                </div>
                <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
                  3,000
                  <tm-atom />
                </h1>
              </div>
              <div class="text">
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
                  3rd place
                </div>
                <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
                  2,000
                  <tm-atom />
                </h1>
              </div>
            </div>
          </div>
          <div class="footer mt-6">
            <div class="tm-rf0 tm-medium tm-lh-title tm-overline tm-muted">
              Participation reward
            </div>
            <div class="tm-rf3 tm-bold tm-lh-title tm-title">
              10
              <tm-atom />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.left
  max-width 29.6875rem

.right
  margin-top var(--spacing-13)

.desc
  max-width 23.375rem

.card
  display flex
  flex-direction column

  &-inner
    padding var(--spacing-7)
    background var(--fg)
    border-radius $border-radius-6

.top
.bottom
  display flex
  flex-direction row
  align-items center
  justify-content space-between
  position relative

.graphics
  &__item
    height auto
    position absolute
    top -14.625rem
    left -12rem
    max-width 110%

.horizontal-line
  margin var(--spacing-7) 0
  border-bottom 1px solid var(--white-100)

.footer
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  gap 4.9375rem
  width 100%
  padding-left 2.0313rem
  padding-right 2.0313rem

@media $breakpoint-small-max
  .top
  .footer
    display block

  .graphics
    display none

@media $breakpoint-small
  .split
    display block

  .right
    align-self flex-end
    max-width 29.6875rem

@media $breakpoint-xl
  .split
    display grid
    grid-template-columns auto auto
    grid-template-rows 1fr
    gap var(--spacing-11)

  .right
    margin-top 0
</style>
