<template>
  <div class="about">
    <img :src="data.avatar">
    <button @click="getData">测试</button>
    <p>{{data}}</p>
  </div>
</template>
<script>
import { fetch } from "../util/service";
export default {
  data() {
    return {
      data: ""
    };
  },
  created() {
    // this.getData();
  },
  methods: {
    getData() {
      fetch
        .get("/users/profile", {
          api_token: "776eb0f0212c42858cf4abfc2fe1ef2f"
        })
        .then(res => {
          console.log(res, 33333);
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
</style>