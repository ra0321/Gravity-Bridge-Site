<template>
  <div class="section-intro z-2">
    <div class="tm-container tm-wrapper section-container">
      <div class="content tm-center tm-muted">
        <p class="tm-rf1 tm-lh-copy">
          The
          <tm-link
            href="https://github.com/cosmos/gravity-bridge"
            class="tm-link-external"
            >Gravity Bridge</tm-link
          >
          is an open-source project designed specifically for the Cosmos Hub for
          bridging Cosmos and Ethereum chains.
        </p>
        <p class="tm-rf1 tm-lh-copy">
          Gravity is intended to pull as much value as possible into the orbit
          of the Hub, by bringing ERC20 assets from Ethereum into Cosmos and
          Cosmos assets to Ethereum with a decentralized bridge.
        </p>
        <p class="tm-rf1 tm-lh-copy">
          The incentivized testnet will be modeled after the successful game of
          zones and will be supported by members of the Gravity team (Peggy JV),
          <tm-link href="https://althea.net" class="tm-link-external"
            >Althea</tm-link
          >,
          <tm-link href="https://interchain.io" class="tm-link-external"
            >the Interchain Foundation</tm-link
          >, and
          <tm-link href="https://tendermint.com" class="tm-link-external"
            >Tendermint</tm-link
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-intro
  position relative

.section-container
  display flex
  align-items stretch
  width 100%

.container
  position relative
  display flex
  width 100%
  flex-direction column
  align-items normal
  justify-content flex-start

.content
  width 100%
  text-align left
  max-width 36rem

@media $breakpoint-small-max
  .section-container
    padding-top var(--spacing-4)
    padding-bottom var(--spacing-7)
</style>
