let state = {
    // info: {
    //     token: '',
    // }
    info: {
        token: '',
    }
}
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation Mutation 必须是同步函数
// this.$store.commit('xxx') 提交 mutation
const mutations = {
    setUser(state, newState) {
        state.info = Object.assign({}, newState);
    },
    clearUser(state) {
        state.info = {token: ''};
    }
}
// Action 提交的是 mutation，而不是直接变更状态  Action 可以包含任意异步操作
// this.$store.dispatch('xxx') 分发 action
const actions = {
    updateUser({ commit }, user) {
        commit('setUser', user)
    }
}
export default {
    state,
    mutations,
    actions
}