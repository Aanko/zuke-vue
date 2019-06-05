<template>
  <div class="about">
    <button @click="getData">测试</button>
    <p>{{data}}</p>
  </div>
</template>
<script>
  import { fetch } from "../util/service";
  export default {
    data() {
      return {
        data: ''
      };
    },
    created() {
      // this.getData();
    },
    methods: {
      getData() {
        fetch.get("/users/profile", {
          api_token: "d04ba5c20c1a47e59548a92aef08f3f1"
        }).then(res => {
          console.log(res);
          this.data = res.data;
        }).catch(err => {
          console.log(err);
        });
      }
    }
  };
</script>

<style scoped>
</style>