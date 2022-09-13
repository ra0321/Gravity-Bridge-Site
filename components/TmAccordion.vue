<template>
  <div class="tm-container tm-wrapper tm-grid-base">
    <div class="left">
      <tm-accordion-item
        v-for="(item, id) in firstChunk"
        :key="id"
        :multiple="multiple"
        :group-id="groupId"
        :item="item"
      >
      </tm-accordion-item>
    </div>
    <div class="right">
      <tm-accordion-item
        v-for="(item, id) in secondChunk"
        :key="id"
        :multiple="multiple"
        :group-id="groupId"
        :item="item"
      >
      </tm-accordion-item>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      groupId: null,
    }
  },
  computed: {
    chunkedArr() {
      return this.chunkArray(this.content, 2)
    },
    firstChunk() {
      return this.chunkedArr[0]
    },
    secondChunk() {
      return this.chunkedArr[1]
    },
  },
  mounted() {
    this.groupId = this.$el.id
  },
  methods: {
    chunkArray(arr, n) {
      const chunkLength = Math.max(arr.length / n, 1)
      const chunks = []
      for (let i = 0; i < n; i++) {
        if (chunkLength * (i + 1) <= arr.length)
          chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)))
      }
      return chunks
    },
  },
}
</script>

<style lang="stylus" scoped>
.left
.right
  grid-column 1/-1

@media $breakpoint-xl
  .left
    grid-column 2/span 5

  .right
    grid-column 7/span 5
</style>
