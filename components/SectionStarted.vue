<template>
  <div class="section-started">
    <div class="tm-section tm-container tm-wrapper section-container">
      <div class="tm-center">
        <div
          class="
            tm-rf-1
            tm-rf0-m-up
            tm-medium
            tm-lh-title
            tm-overline
            tm-measure-narrow
            tm-muted
          "
        >
          Testnet competition
        </div>
        <h1 class="tm-rf5 tm-bold tm-lh-title mt-3 tm-title">
          Getting started
        </h1>
        <div class="content mt-8">
          <p class="tm-rf1 tm-lh-copy tm-muted">
            Incentivized testnets are useful to test the adversarial conditions
            that may occur to steal funds or lock them in the bridge. These
            conditions may not be observed with audits.
          </p>
          <p class="tm-rf1 tm-lh-copy tm-muted">
            Validators will participate in testing the extreme bounds of the
            Gravity testnet, and we encourage uniqueness and creativity when it
            comes to seeking out attack vectors and edge cases. We are eager to
            see cool, interesting, important, and novel things be brought to the
            surface during the Gravity testnet — for instance, maybe figuring
            out how to completely halt the chain, or how to make everyone's node
            print a certain message.
          </p>
        </div>
        <div class="split z-2 mt-9">
          <div class="left">
            <h1 class="tm-rf6 tm-bold tm-lh-title tm-title">250</h1>
            <p class="tm-rf0 tm-lh-title tm-text">
              Participant Spots available
            </p>
            <tm-button
              to-link="external"
              href="https://v1.cosmos.network/intro"
              size="l"
              class="btn mt-8"
              >Register<span class="icon__right">&rarr;</span></tm-button
            >
          </div>
          <div class="right">
            <div class="list">
              <div class="list__item">
                <tm-link href="#" class="tm-link-external"
                  >How Gravity Works</tm-link
                >
              </div>
              <div class="list__item">
                <tm-link href="#">Participant Guide &#8594;</tm-link>
              </div>
              <div class="list__item">
                <tm-link href="#">Rules and Regulations &#8594;</tm-link>
              </div>
              <div class="list__item">
                <tm-link href="#">Competition code of conduct &#8594;</tm-link>
              </div>
              <div class="list__item">
                <tm-link href="#" class="tm-link-external"
                  >Validator Setup</tm-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tm-grid-base mt-10">
        <section-date class="section-date z-2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-started
  position relative

.section-container
  display flex
  flex-direction column
  align-items stretch
  width 100%

.content
  width 100%
  text-align left
  max-width 36rem

.split
  position relative

.right
  margin-top var(--spacing-9)

.list
  display flex
  flex-direction column
  justify-content space-between
  height 100%

.list__item + .list__item
  margin-top var(--spacing-6)

.section-date
  grid-column 1/-1
  position relative

@media $breakpoint-small
  .split
    display block

@media $breakpoint-xl
  .split
    display grid
    grid-template-columns 50% 50%
    grid-template-rows 1fr

  .right
    margin-top 0

  .section-date
    grid-column 3/span 9
</style>
