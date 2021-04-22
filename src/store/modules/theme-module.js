const state = {
    theme_color: ''
}

const getters = {
    getTheme: state => state.theme_color
}

const actions = {

}

const mutations = {
    setTheme: (state, color) => (
        state.theme_color = color
    )
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}