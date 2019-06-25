<template>
  <div class="about">关于</div>
</template>
<script>
import { getUserProfile } from "../utils/api";
export default {
  data() {
    return {
      userData: ""
    };
  },
  created() {},
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