import axios from 'axios';
import qs from 'qs';

var instance = axios.create();
instance.defaults.timeout = 10000;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const fetch = {
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            axios.post(API + url, qs.stringify(data)).then(res => {
                if (res.status == 200) {
                    resolve(res);
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
            axios.get(API + url, { params: data }).then(res => {
                if (res.status == 200) {
                    resolve(res);
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
const API = 'https://slogc.cc/api/content';