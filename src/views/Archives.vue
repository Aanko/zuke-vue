<template>
  <div class="archives">
    <div v-for="(item,index) in data" :key="index">
      <h2>{{item.year}}</h2>
      <p v-for="(i,j) in item.posts" :key="j">{{i.title}}</p>
    </div>
  </div>
</template>
<script>
// 归档页面
import { fetch } from "../util/service";
export default {
  data() {
    return {
      data: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      fetch
        .get("/archives/years", {
          api_access_key: "776eb0f0212c42858cf4abfc2fe1ef2f"
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