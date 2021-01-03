import URITemplate from 'uri-templates';
import axios from './axios';
const switchUrlKey = (url, query) => {
    const uriParams = {};
    for (const key of Object.keys(query)) {
        if (url.indexOf('{' + key + '}') !== -1) {
            uriParams[key] = query[key];
            delete query[key];
        }
    }
    return uriParams;
};
export const apiHttp = async (methodApi, queryData, urlParam) => {
    const method = Object.assign({}, methodApi);
    const query = Object.assign({}, queryData);
    let uriParams = {};
    //根据url对象进行 参数转换
    if (urlParam) {
        uriParams = switchUrlKey(method.url, urlParam);
    } else {
        uriParams = switchUrlKey(method.url, query);
    }
    method.url = new URITemplate(method.url).fill(uriParams);
    const option = Object.assign({ emulateJSON: false }, method);
    if (option.method.toLowerCase() === 'post' ||
        option.method.toLowerCase() === 'put' ||
        option.method.toLowerCase() === 'delete') {
        option.data = Object.assign({}, query);
    } else {
        option.params = Object.assign({}, query);
    }
    const res = await axios(option);
    return res;
};
export default apiHttp;
