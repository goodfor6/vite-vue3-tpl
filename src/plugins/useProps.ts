


import api from '@/api'
import utils from '@constq/qzr-utils'

export default function(Vue:any) {
  Vue.config.globalProperties.$api = api
  Vue.config.globalProperties.$utils = utils
  Vue.config.globalProperties.$goUrl = (url:any) => {
    window.open(url)
  }

  Vue.provide('$api', api)
  Vue.provide('$utils', utils)
}
