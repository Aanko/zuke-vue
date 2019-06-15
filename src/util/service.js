import axios from 'axios';
import qs from 'qs';

var instance = axios.create();
instance.defaults.timeout = 5000;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const fetch = {
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            axios.post(API + baseUrl + url, qs.stringify(data)).then(res => {
                console.log(res.data, 888888)
                if (res.data.status == 200) {
                    resolve(res.data);
                } else {
                    reject("系统错误");
                }
            }).catch(err => {
                reject(err);
            })
        })
    },
    get: (url, data) => {
        return new Promise((resolve, reject) => {
            axios.get(API + baseUrl + url, { params: data }).then(res => {
                console.log(res, 888888)
                if (res.data.status == 200) {
                    resolve(res.data);
                } else {
                    reject("系统错误");
                }
            }).catch(err => {
                reject(err);
            })
        })
    }
}
// 接口地址
const API = 'https://slogc.cc';

const baseUrl = '/api/content';