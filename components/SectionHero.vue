<template>
  <div class="section-hero">
    <div class="tm-section tm-container tm-wrapper z-2">
      <div class="tm-grid-base">
        <div class="text">
          <div class="title tm-rf4 tm-bold tm-lh-title tm-title">
            Prepare your validators to<br />defy Gravity.
          </div>
          <div class="subtitle tm-rf1 tm-lh-copy tm-text mt-6">
            Register now for the exclusive validator incentivized testnet for
            Gravity Bridge, connecting Ethereum and Cosmos.
          </div>
        </div>
        <tm-countdown
          v-if="toTimezone(endDate, endTime) >= moment()"
          :now="currentTime"
          :end="countdownTimer(endDate, endTime)"
          class="
            time
            tm-rf6 tm-rf7-m-up tm-medium tm-lh-title
            mt-3
            tm-title
            mt-8
          "
        />
        <div
          v-else
          class="time tm-rf7 tm-medium tm-lh-title mt-3 tm-title mt-8"
        >
          00:00:00:00
        </div>
        <div class="date tm-rf0 tm-medium tm-lh-title tm-overline mt-3 tm-text">
          Registration ends June 21
        </div>
        <EthBlobs class="eth" />
      </div>
    </div>
    <graphics-hero />
  </div>
</template>

<script>
import moment from 'moment-timezone'
import EthBlobs from '@/assets/illustrations/eth-blobs.svg?inline'

export default {
  components: {
    EthBlobs,
  },
  data() {
    return {
      moment,
    }
  },
  computed: {
    currentTime() {
      return this.$store.state.countdown.now
    },
    endDate() {
      return this.$store.state.countdown.date
    },
    endTime() {
      return this.$store.state.countdown.time
    },
  },
  mounted() {
    window.setInterval(() => {
      this.$store.commit('updateNow')
    }, 1000)
  },
  methods: {
    countdownTimer(date, time) {
      return moment.tz(`${date} ${time}`, 'UTC').format()
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.graphics
  position relative

.section-hero
  position relative
  height 100vh
  min-height 52rem
  max-height 72rem

.text
.time
.date
  grid-column 1/-1

.eth
  height auto
  // width 100%
  max-width 50%
  position absolute
  right 21%
  top 48%

@media $breakpoint-small-max
  .section-hero
    min-height 32rem
    max-height none
    height auto

  .eth
    top 90%
    left 35%

@media $breakpoint-small
  .eth
    top 60%
    left 35%

@media $breakpoint-large
  .eth
    top 55%

@media $breakpoint-xl
  .text
    grid-column 2/span 7

  .time
    grid-column 1/-1

  .date
    grid-column 2/span 7

  .eth
    grid-column 5/span 4
</style>
