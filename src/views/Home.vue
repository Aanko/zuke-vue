<template>
  <div class="home">
    <div v-for="(item,index) in data" :key="index">
      <a :href="item.url">{{item.title}}</a>
      <p>{{item.summary}}</p>
    </div>
  </div>
</template>

<script>
import { fetch } from "../util/service";
export default {
  name: "home",
  components: {},
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
        .get("/posts", {
          api_token: "d04ba5c20c1a47e59548a92aef08f3f1"
        })
        .then(res => {
          console.log(res, 33333);
          this.data = res.data.content;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>