<template>
  <div
    :id="groupId + '-' + item.id"
    class="accordion-item"
    :class="{ 'is-active': item.active }"
  >
    <div class="section-list">
      <div class="section-list__item">
        <div class="list">
          <div
            class="section-list__item__title tm-rf0 tm-lh-copy tm-bold"
            @click="toggle"
            v-html="item.title"
          ></div>
        </div>
        <span
          v-if="item.active === false && item.details"
          class="toggle"
          @click="toggle(false)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 11H13V2C13 1.4 12.6 1 12 1C11.4 1 11 1.4 11 2V11H2C1.4 11 1 11.4 1 12C1 12.6 1.4 13 2 13H11V22C11 22.6 11.4 23 12 23C12.6 23 13 22.6 13 22V13H22C22.6 13 23 12.6 23 12C23 11.4 22.6 11 22 11Z"
              fill="white"
              fill-opacity="0.333"
            />
          </svg>
        </span>
        <span
          v-else-if="item.active === true && item.details"
          class="toggle"
          @click="toggle(true)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12C1 11.4 1.4 11 2 11H22C22.6 11 23 11.4 23 12C23 12.6 22.6 13 22 13H2C1.4 13 1 12.6 1 12Z"
              fill="white"
              fill-opacity="0.75"
            />
          </svg>
        </span>
      </div>
    </div>
    <transition
      name="expand"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div v-if="item.active === true && item.details" class="details">
        <div class="title tm-rf0 tm-lh-copy" v-html="md(item.details)" />
      </div>
    </transition>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import moment from 'moment-timezone'
import $ from 'jquery'

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['item', 'multiple', 'groupId'],
  data() {
    return {
      moment,
    }
  },
  mounted() {
    // https://css-tricks.com/snippets/jquery/better-broken-image-handling/
    $('img').on('error', function () {
      $(this).hide()
    })
  },
  methods: {
    md(string) {
      const md = new MarkdownIt()
      return md.render(string)
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          // usage: 2020-08-04 08:00
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
    toggle(event) {
      if (this.multiple) {
        this.item.active = !this.item.active
      } else {
        this.$parent.$children.forEach((item, index) => {
          if (
            item.$el.id === event.currentTarget.parentElement.parentElement.id
          )
            item.item.active = !item.item.active
          else item.item.active = false
        })
      }
    },
    startTransition(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    endTransition(el) {
      el.style.height = ''
    },
  },
}
</script>

<style lang="stylus" scoped>
.expand-enter-active, .expand-leave-active
  will-change height
  transition height 0.2s ease-in-out

.expand-enter, .expand-leave-to
  height 0

.accordion-item
  border-bottom 1px solid var(--white-100)

.icon__left
  color var(--primary-600)

.subtitle, .b, .language
  color var(--white-700)

.details
  box-shadow var(--elevation-16)
  overflow hidden
  overflow-wrap anywhere
  padding-bottom var(--spacing-5)

.bottom
  margin-top var(--spacing-6)

.headshots
  display flex
  justify-content flex-end

  &__img
    float left
    width 2.5rem
    height 2.5rem
    border-radius 50%
    display flex
    justify-content center
    align-items center

    &__overlay
      float left
      width 2.5rem
      height 2.5rem
      border-radius 50%
      display flex
      justify-content center
      align-items center
      position relative
      left -5px

.toggle
  cursor pointer
  margin-left auto
  margin-top 0.25rem

.section-list
  &__item
    padding-top var(--spacing-5)
    padding-bottom var(--spacing-5)
    display grid
    grid-auto-flow column
    grid-template-columns 80% auto
    gap var(--spacing-3) var(--spacing-7)
    border-bottom 4px solid var(--white-100)
    &:last-child
      border-bottom none
    &__date
      color var(--primary-600)
    &__time
      color var(--white-700)
    &__title
      color var(--white)
      cursor pointer
    &__host
      margin-top var(--spacing-2)
      color var(--white-700)

@media $breakpoint-xsmall-only
  .section-list
      &__time, &__title, .headshots
        margin-top var(--spacing-2)

  .headshots
    justify-content flex-start

  .top, .bottom
    grid-template-columns auto

  .top .a, .top .d, .bottom .a, .bottom .b
    display none

  .toggle
    display flex
    justify-content center

  .headshots__img__overlay
    left -4px

@media $breakpoint-small
  .section-list
    &__item
      gap var(--spacing-7)
</style>
