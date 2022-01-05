import Vue from 'vue'
import Vuex from 'vuex'

import barang from './barangStore'
import pengirim from './pengirimStore'
import stok from './stokStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    barang,
    pengirim,
    stok
  }
})
