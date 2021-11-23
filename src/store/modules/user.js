import useJwt from '@/auth/jwt/useJwt'
import apiURL from '../../data/api_url'
export const state = () => ({
    currentUser: null,
})

// getters
const getters = {

}

// mutations
const mutations = {
    setCurrentUser: (state, payload) => {
        state.currentUser = payload
    },
}
// actions
const actions = {
    async getCurrentUser({ commit }) {
        let header = { headers: { Authorization: "Bearer " + useJwt.getToken() } }
        const data = await this.$axios.$get(apiURL.GET_CURRENT_USER, header)
        if (data.code === 0) {
            commit('setCurrentUser', data.data)
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
