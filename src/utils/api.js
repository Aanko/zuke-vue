import { fetch } from './service'

const api_access_key = "28319a788471467fb1633a5aa114c08a";


//获取用户信息
export const getUserProfile = p => fetch.get("/users/profile", {
    api_access_key: api_access_key,
})

//获取所有文章
export const getPosts = p => fetch.get("/posts", {
    api_access_key: api_access_key,
})

//获取文章详情
export const getPostsDetail = p => fetch.get("/posts/" + p, {
    api_access_key: api_access_key,
    formatDisabled: false,
    sourceDisabled: true

})

//获取菜单
export const getMenus = p => fetch.get("/menus", {
    api_access_key: api_access_key,
})

//获取归档数据  (年)
export const getYears = p => fetch.get("/archives/years", {
    api_access_key: api_access_key,
})