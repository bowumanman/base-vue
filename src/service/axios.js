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
    if (config.url.indexOf('/rest/login') === -1) {
        // config.headers.Authorization = 'Basic Y21zOmNtcyMqY01zKiNAMjAxNw==';
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        // config.data = qs.stringify(config.data);
    } else {
        // config.headers['X-Token'] = store.state.user.token.toString();
    }
    return config;
});
axios.interceptors.response.use(response => {
    if (response.status === 200 && response.data.resCode !== undefined && response.data.resCode !== '0') {
        return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
}, error => {
    if (error && error.response) {
        let msg = '';
        switch (error.response.status) {
            case 400:
                if (error.response.data.error_description) {
                    msg = error.response.data.error_description;
                }
                break;
            case 401:
                msg = '登陆过期，请重新登陆';
                break;
            case 403:
                msg = '无权限访问当前资源';
                break;
            case 404:
                msg = '请求地址出错';
                break;
            case 405:
                msg = '不被允许的访问方法';
                break;
            case 408:
                msg = '请求超时';
                break;
            case 500:
                msg = '服务器内部错误';
                break;
            case 501:
                msg = '服务未实现';
                break;
            case 502:
                msg = '网关错误';
                break;
            case 503:
                msg = '服务不可用';
                break;
            case 504:
                msg = '网关超时';
                break;
            case 505:
                msg = 'HTTP版本不受支持';
                break;
            default:
        }
        window.vueApp.$message.error(msg);
    }
    return Promise.reject(error);
});
export default axios;