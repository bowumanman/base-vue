import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"; // vuex 本地持久化
import user from './user';
Vue.use(Vuex);
export default new Vuex.Store({
    strict: true, //process.env.NODE_ENV !== 'production',
    modules: {
        user,
    },
    plugins: [createPersistedState()],
});
