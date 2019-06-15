<template>
  <div class="about">
    <img :src="userData.avatar">
    <button @click="getData">测试</button>
    <p>{{userData}}</p>
  </div>
</template>
<script>
import { getUserProfile } from "../util/api";
export default {
  data() {
    return {
      userData: ""
    };
  },
  created() {
    // this.getData();
  },
  methods: {
    getData() {
      getUserProfile()
        .then(res => {
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
</style>