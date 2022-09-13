/* eslint-disable */

import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip, {
  defaultHtml: false, // disable HTML parsing with the html global option to prevent XSS attacks
  autoHide: false,
  defaultHideOnTargetClick: false,
  defaultTrigger: 'hover',
  defaultClass: 'tm-rf-1 tm-lh-copy',
})
