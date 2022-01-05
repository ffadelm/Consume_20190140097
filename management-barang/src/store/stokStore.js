import $http from '../service/apiService'

const state = () => ({

})

const mutations = {

}

const actions = {
    kirimStok
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

function kirimStok({commit}, stok) {
    return new Promise(async (resolve, reject) => {
        try {
            let url = await $http.post('http://localhost:8080/api/stok', stok)
            resolve(url.data)
        } catch (error) {
            reject(error)
        }
    })
}