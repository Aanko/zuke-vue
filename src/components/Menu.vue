<template>
    <div class="menu">
        <div class="head">
            <img :src="data.avatar" class="head-img" />
        </div>
        <div class="nav">
            <router-link to="/" class="navname">首页</router-link>
            <router-link to="/about" class="navname">归档</router-link>
        </div>
    </div>
</template>

<script>
    import { fetch } from "../util/service";
    export default {
        name: "Menu",
        data() {
            return {
                data: '',
            };
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                fetch
                    .get("/users/profile", {
                        api_token: "d04ba5c20c1a47e59548a92aef08f3f1"
                    })
                    .then(res => {
                        console.log(res, 66666);
                        this.data = res.data;
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
        padding: 0 3rem;
        border: solid 1px antiquewhite;
        display: -webkit-flex;
        /* Safari */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .head-img {
        width: 30px;
        height: 30px;
        border-radius: 15px;
    }

    .navname {
        font-size: 0.9rem;
        color: #424242;
    }
</style>