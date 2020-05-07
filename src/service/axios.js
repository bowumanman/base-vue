import baseURL from './config';
import ax from 'axios';
const axios = ax.create({
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
baseURL: baseURL, //接口请求地址
});
axios.interceptors.request.use(config => {
    if (config.url.indexOf('oauth/oauth/token') !== -1) {
        config.headers.Authorization = 'Basic Y21zOmNtcyMqY01zKiNAMjAxNw==';
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        // config.data = qs.stringify(config.data);
    }
});
axios.interceptors.response.use(response => {
    if (response.status === 200 && response.data.resCode !== undefined && response.data.resCode !== '0') {
        return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
}, error => {
    return Promise.reject(error);
});
export default axios;