import { fetch } from './service'

const api_access_key = "776eb0f0212c42858cf4abfc2fe1ef2f";


//获取用户信息
export const getUserProfile = p => fetch.get("/users/profile", {
    api_access_key: api_access_key,
})

//获取所有文章
export const getPosts = p => fetch.get("/posts", {
    api_access_key: api_access_key,
})

//获取菜单
export const getMenus = p => fetch.get("/menus", {
    api_access_key: api_access_key,
})
