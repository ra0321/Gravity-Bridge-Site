<template>
  <div class="tm-section tm-container">
    <div class="section-container tm-wrapper center section z-2">
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
        participate
      </div>
      <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title mt-5">
        The interoperable future, starts here
      </h1>
      <p class="desc tm-rf1 tm-lh-copy mt-7 tm-text">
        Register now for the exclusive validator incentivized testnet for
        Gravity Bridge, connecting Ethereum and Cosmos.
      </p>
      <div class="btn-group mt-9">
        <tm-button
          to-link="external"
          href="https://v1.cosmos.network/intro"
          size="l"
          class="btn"
          >Register<span class="icon__right">&rarr;</span></tm-button
        >
        <tm-button
          to-link="external"
          href="https://v1.cosmos.network/intro"
          size="l"
          variant="text"
          class="btn"
          >Stay up to date<span class="icon__right">&rarr;</span></tm-button
        >
      </div>
    </div>
    <graphics-participate />
  </div>
</template>

<script></script>

<style lang="stylus" scoped>
.section
  position relative

.section-container
  text-align center

.title
  max-width 62.9375rem

.desc
  max-width 35.8125rem
</style>
