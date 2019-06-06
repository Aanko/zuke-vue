<template>
    <div class="menu">
        <div class="nav">
            <router-link to="/" class="navname">首页</router-link>
            <router-link to="/about" class="navname">归档</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu"
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
        justify-content: flex-end;
        align-items: center;
    }

    .navname {
        font-size: 0.9rem;
        color: #424242;
    }
</style>