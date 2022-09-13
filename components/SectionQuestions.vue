<template>
  <div class="tm-section tm-container">
    <div class="tm-wrapper center">
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
        faq
      </div>
      <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
        Frequently asked questions
      </h1>
    </div>
    <div class="tm-container mt-10">
      <tm-accordion :content="questions" multiple />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    questions() {
      return this.$store.state.questions
    },
  },
}
</script>

<style lang="stylus" scoped></style>
