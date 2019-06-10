<template>
  <div class="archives">
    <div v-for="(item,index) in data" :key="index">
      <h2>{{item.year}}</h2>
      <p v-for="(i,j) in item.posts" :key="j">{{i.title}}</p>
    </div>
  </div>
</template>
<script>
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
          api_token: "d04ba5c20c1a47e59548a92aef08f3f1"
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