const getters = {
    isMenuOpen(state) {
        return state.menuStatus
    },
    isFirstLoad(state) {
        return state.firstLoad
    }
}

export default getters