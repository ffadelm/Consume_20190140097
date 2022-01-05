import $http from "../service/apiService";

//mengembalikkan obj
const state = () => ({
    barangs:[],
    barang:{}
})

const mutations = {
    _assign_barang_data(state, payload){
        state.barangs = payload
    },
    _assign_barang_form(state, payload){
        state.barang = payload
    }
}

const actions = {
    getAllBarang,
    storeTambahBarang,
    updateBarang,
    hapusBarang
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

function getAllBarang({commit}) {
    return new Promise(async(resolve, reject) => {
        try{
            let url = "http://localhost:8080/api/barang"
            commit('_assign_barang_data', (await $http.get(url)).data)
            resolve($http.get(url))
        }catch(err){
            log.error(err.message)
            reject(err)
        }
    })
}

function storeTambahBarang({commit}, barang) {
    return new Promise(async(resolve, reject) => {
        try{
            let url = await $http.post("http://localhost:8080/api/barang", barang)
            resolve(url)
        }catch(err){
            log.error(err.message)
            reject(err)
        }
    })
}

function updateBarang({ commit }, barang) {
    return new Promise(async (resolve, reject) => {
        try {
            let url = await $http.put("http://localhost:8080/api/barang", barang)
            resolve(url)
        } catch (e) {
            log.error(e.message)
            reject(e)
        }
    })
}

function hapusBarang({ commit }, id) {
    return new Promise(async (resolve, reject) => {
        try {
            let url = await $http.delete("http://localhost:8080/api/barang/" + id)
            resolve(url)
        } catch (e) {
            log.error(e.message)
            reject(e)
        }
    })
}