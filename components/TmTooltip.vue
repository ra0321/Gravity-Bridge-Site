<template>
  <div class="container">
    <!-- mapping definitions from dict.json -->
    <button
      v-if="term"
      v-tooltip="{
        content: definition,
        placement: position,
      }"
      :position="position"
      class="tm-definition"
    >
      <slot></slot>
    </button>
    <!-- set tooltip text manually -->
    <button
      v-if="text"
      v-tooltip="{
        content: text,
        placement: position,
      }"
      :position="position"
      class="tm-link"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import dict from '~/assets/data/dict.json'

export default {
  props: {
    /**
     * term
     *
     * mapping k/v in dict.json
     */
    term: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    /**
     * position
     *
     * `auto` | `auto-start` | `auto-end` | `top` | `top-start` | `top-end` | `right` | `right-start` | `right-end`
     * `bottom` | `bottom-start` | `bottom-end` | `left` | `left-start` | `left-end`
     */
    position: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    definition() {
      return dict[this.term]
    },
  },
}
</script>

<style lang="stylus" scoped>
.container
  display inline-block
  position relative
</style>
