import apiURL from '../../data/api_url'
import http from "../../AppConfig";

export const state = () => ({
    menus: [],
})

// getters
const getters = {
    getAllMenu: (state) => {
        let result = []
        state.menus.filter((item) => {
            result.push(item)
        })
        return result
    },

}

// mutations
const mutations = {
    setMenus: (state, payload) => {
        state.menus = payload
    },
}
// actions
const actions = {
    async getMenu({ commit }) {
        const data = await http.get(apiURL.GET_ALL_MENU)
        console.log( data.data)
            commit('setMenus', data.data)

    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
