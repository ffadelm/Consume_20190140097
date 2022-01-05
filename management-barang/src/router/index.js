import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Barang from '../views/barang/Barang.vue'
import Tambah from '../views/barang/Tambah.vue'
import Update from '../views/barang/Update.vue'

import Pengirim from '../views/pengirim/Pengirim.vue'
import TambahPengirim from '../views/pengirim/TambahPengirim.vue'
import UpdatePengirim from '../views/pengirim/UpdatePengirim.vue'
import RiwayatPengirim from '../views/pengirim/Riwayat.vue'

import FormStok from '../views/stok/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/barang',
    name: 'barang',
    component: Barang
  },
  {
    path: '/barang/tambah',
    name: 'tambah',
    component: Tambah
  },
  {
    path: '/barang/update',
    name: 'update',
    component: Update
  },
  {
    path: '/pengirim',
    name: 'pengirim',
    component: Pengirim
  },
  {
    path: '/pengirim/tambah',
    name: 'tambahPengirim',
    component: TambahPengirim
  },
  {
    path: '/pengirim/update',
    name: 'updatePengirim',
    component: UpdatePengirim
  },
  {
    path: '/pengirim/:id/riwayat',
    name: 'riwayat',
    component: RiwayatPengirim
  },
  {
    path: '/stok/:tipe',
    name: 'stok',
    component: FormStok
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
