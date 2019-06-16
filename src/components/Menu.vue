<template>
    <div class="menu">
        <div class="nav">
            <router-link :to="item.url" class="navname" v-for="(item,index) in menuData" v-if="ishow" :key="index">
                {{item.name}}
            </router-link>
            <a href="#">
                <i class="fa fa-paperclip" @click="changeIshow"></i>
            </a>
        </div>
        <div class="head">
            <img :src="userData.avatar" class="head-img">
            <span class="username">{{userData.nickname}}</span>
        </div>
    </div>
</template>

<script>
    import { getUserProfile, getMenus } from "../utils/api";
    export default {
        name: "Menu",
        data() {
            return {
                menuData: [],
                userData: "",
                ishow: true
            };
        },
        created() {
            this.getMenu();
            this.getUserData();
        },
        methods: {
            changeIshow() {
                this.ishow = !this.ishow;
            },
            getMenu() {
                getMenus().then(res => {
                    this.menuData = res.data.reverse();
                }).catch(err => {
                    console.log(err);
                })
            },
            getUserData() {
                getUserProfile().then(res => {
                    this.userData = res.data;
                }).catch(err => {
                    console.log(err);
                })
            },
        }
    };
</script>

<style scoped>
    .menu {
        height: 88px;
        padding: 0 1rem;
        display: -webkit-flex;
        /* Safari */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .head {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    /* 头像 */
    .head-img {
        width: 30px;
        height: 30px;
        margin-right: 0.5rem;
        border-radius: 15px;
    }

    .navname {
        margin-right: 0.5rem;
        font-size: 0.9rem;
        color: #424242;
    }

    .username {
        line-height: 30px;
    }

    @media screen and (max-width: 900px) {
        .username {
            display: none;
        }

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

    }
</style>