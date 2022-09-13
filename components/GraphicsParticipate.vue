<template>
  <div class="canvas tm-center z-0">
    <div class="container">
      <div class="layer layer-back">
        <cld-image
          public-id="bridge-graphics-participate_hk7ybm"
          fetch-format="svg"
          quality="auto"
          class="graphics__item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.canvas
  max-width 110rem
  width 100%
  display flex
  align-items center
  justify-content center
  position relative

.container
  position relative
  padding-bottom 80%
  height 0
  width 100%
  min-width 48rem
  max-width 180rem
  flex 0 0 163%

svg
  height auto

.layer
  position absolute
  trbl 0 0 auto

.layer-back
  display flex
  align-items center
  justify-content center
  position relative
  margin-top -18%

.bg
  position relative
  width 100%
  filter blur(10px)
  user-select none

@media $breakpoint-small-max
  .layer-back
    margin-top 0

@media $breakpoint-medium
  .container
    padding-bottom 30.111111%
</style>
