import useJwt from '@/auth/jwt/useJwt'
import apiURL from '../../data/api_url'
import axiosIns from '../../libs/axios'

export const state = () => ({
    stations: [],
})

// getters
const getters = {
    getAllStation: (state) => {
        let result = []
        state.stations.filter((item) => {
            result.push(item)
        })
        return result
    },

}

// mutations
const mutations = {
    setStations: (state, payload) => {
        state.stations = payload.items
    },
}
// actions
const actions = {
    async getStations({ commit }) {
        let header = { headers: { Authorization: "Bearer " + useJwt.getToken() } }
        const data = await axiosIns.get(apiURL.GET_ALL_STATION, header)
        if (data.status === 200) {
            commit('setStations', data.data)
        }

    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
