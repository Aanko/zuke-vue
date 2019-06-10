<template>
    <div class="menu">
        <div class="nav">
            <router-link :to="item.url" class="navname" v-for="(item,index) in menuData" :key="index">
                {{item.name}}
            </router-link>
        </div>
        <div class="head">
            <img :src="userData.avatar" class="head-img" />
        </div>
    </div>
</template>

<script>
    import { fetch } from "../util/service";
    export default {
        name: "Menu",
        data() {
            return {
                menuData: [],
                userData: '',
            };
        },
        created() {
            this.getMenu();
            this.getUserData();
        },
        methods: {
            getMenu() {
                fetch
                    .get("/menus", {
                        api_token: "d04ba5c20c1a47e59548a92aef08f3f1"
                    })
                    .then(res => {
                        console.log(res, 66666);
                        this.menuData = res.data.reverse();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            getUserData() {
                fetch
                    .get("/users/profile", {
                        api_token: "d04ba5c20c1a47e59548a92aef08f3f1"
                    })
                    .then(res => {
                        console.log(res, 66666);
                        this.userData = res.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    };
</script>

<style scoped>
    .menu {
        height: 88px;
        padding: 0 1rem;
        border-bottom: solid 0.5px rgba(68, 68, 68, 0.25);
        display: -webkit-flex;
        /* Safari */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* 头像 */
    .head-img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    .navname {
        margin-right: 0.5rem;
        font-size: 0.9rem;
        color: #424242;
    }
</style>