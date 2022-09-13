<template>
  <a
    v-if="checkLink === 'external'"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="['tm-link', hoverUnderline && 'tm-link-underline-hover']"
  >
    <slot></slot>
  </a>
  <nuxt-link
    v-else-if="checkLink === 'internal'"
    :to="href"
    :class="['tm-link', hoverUnderline && 'tm-link-underline-hover']"
  >
    <slot></slot>
  </nuxt-link>
  <a
    v-else-if="checkLink === 'anchor'"
    :v-scroll-to="href"
    :class="['tm-link', hoverUnderline && 'tm-link-underline-hover']"
  >
    <slot></slot>
  </a>
  <a
    v-else
    :href="href"
    :class="['tm-link', hoverUnderline && 'tm-link-underline-hover']"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
      required: true,
    },
    to: {
      type: String,
      default: null,
    },
    hoverUnderline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /*
      default - <a href="">
      external - <a href="" target="_blank" rel="noreferrer noopener">
      internal - <nuxt-link to="/features">
      anchor - <a href="" v-scroll-to="">
    */
    checkLink() {
      const url = this.href
      if (this.isExternal(url)) return 'external'
      if (this.isInternal(url)) return 'internal'
      if (this.isAnchor(url)) return 'anchor'
      return 'default'
    },
  },
  methods: {
    // http | https
    isExternal(url) {
      const regex = /^(http|https):\/\//
      return regex.test(String(url))
    },
    isInternal(url) {
      return url.startsWith('/')
    },
    // TODO: regex `/features#gravity-bridge`
    isAnchor(url) {
      return url.includes('#')
    },
    // TODO: to be removed
    // http://v1.cosmos.network || https://v1.cosmos.network
    isOldLink(url) {
      const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?v1/
      return regex.test(String(url))
    },
  },
}
</script>

<style lang="stylus" scoped></style>
