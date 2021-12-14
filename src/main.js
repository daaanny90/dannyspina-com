import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import mutations from './store/mutations'
import getters from './store/getters'
import vueCompositionApi from '@vue/composition-api'
import '~/global/global.scss'

const state = {
  menuStatus: false,
  firstLoad: false
}

export default function (Vue, { router, head, isClient, appOptions }) {
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  })
  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Bakbak+One&family=Crimson+Pro:wght@200;400;600&family=Julius+Sans+One&display=swap'
  })
  Vue.use(Vuex)
  Vue.use(vueCompositionApi)

  appOptions.store = new Vuex.Store({
    state,
    mutations,
    getters
  })

  Vue.component('Layout', DefaultLayout)
}