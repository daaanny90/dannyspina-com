const getters = {
    TOGGLE_MENU(state, menuStatus) {
        state.menuStatus = menuStatus
    },
    SET_FIRST_LOAD(state) {
        state.firstLoad = true
    }
}

export default getters