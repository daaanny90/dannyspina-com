import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import mutations from './store/mutations'
import getters from './store/getters'
import vueCompositionApi from '@vue/composition-api'

const state = {
  menuStatus: false,
  firstLoad: false
}

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  Vue.use(vueCompositionApi)

  appOptions.store = new Vuex.Store({
    state,
    mutations,
    getters
  })

  Vue.component('Layout', DefaultLayout)
}