import $http from "../service/apiService";

const state = () => ({
    pengirims: [],
    pengirim:{},
    riwayat:[]

})

const mutations = {
    _assign_pengirim_data(state, pengirims) {
        state.pengirims = pengirims;
    },

    _assign_riwayat_pengirim(state, riwayat) {
        state.riwayat = riwayat;
    }
}

const actions = {
    getAllPengirim,
    tambahPengirim,
    updatePengirim,
    hapusPengirim,

    getPengirimById
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

function getAllPengirim({commit}) {
    return new Promise (async(resolve, reject) => {
        try {
            let url= await $http.get('http://localhost:8080/api/shipper');
            commit('_assign_pengirim_data', url.data);
            resolve(url.data);
        } catch (error) {
            reject(error);
        }
    })
}

function tambahPengirim({commit}, pengirim) {
    return new Promise (async(resolve, reject) => {
        try {
            let url= await $http.post('http://localhost:8080/api/shipper', pengirim);
            resolve(url.data);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

function updatePengirim({ commit }, pengirim) {
    return new Promise(async (resolve, reject) => {
        try {
            let url = await $http.put('http://localhost:8080/api/shipper', pengirim)
            resolve(url.data)
        } catch (e) {
            console.error(e)
            reject(e)
        }
    })
}

function hapusPengirim({ commit }, pengirimid) {
    return new Promise(async (resolve, reject) => {
        try {
            let url = await $http.delete('http://localhost:8080/api/shipper/' + pengirimid)
            resolve(url.data)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

function getPengirimById({ commit }, pengirimId) {
    return new Promise(async (resolve, reject) => {
        try {
            let url = await $http.get('http://localhost:8080/api/shipper/' + pengirimId +'/shipping')
            commit('_assign_riwayat_pengirim', url.data)
            resolve(url.data)
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}