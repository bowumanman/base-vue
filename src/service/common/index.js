import api from './api';
import apiHttp from '../apiHttp';
export default {
    async login(params) {
        return await apiHttp(api.login, params);
    },
};