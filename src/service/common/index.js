import api from './api';
import apiHttp from '../apiHttp';
export default {
    async login(params) {
        const { data } = await apiHttp(api.login, params);
        return data;
    },
};