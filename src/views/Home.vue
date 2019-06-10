<template>
  <div class="home">
    <div v-for="(item,index) in data" :key="index" class="postlist">
      <a :href="item.url" class="postitle">{{item.title}}</a>
      <p class="postsummary">{{item.summary}}</p>
      <div>
        <span class="posttime">2019-6-10</span>
        <span></span>
      </div>
    </div>
    <div v-html="Tagadata">{{Tagadata}}</div>
  </div>
</template>

<script>
import { fetch } from "../util/service";
export default {
  name: "home",
  components: {},
  data() {
    return {
      data: [],
      Tagadata: ""
    };
  },
  created() {
    this.getData();
    this.getTags();
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
    },
    getTags() {
      fetch
        .get("/posts/5", {
          api_token: "d04ba5c20c1a47e59548a92aef08f3f1"
        })
        .then(res => {
          console.log(res, 66668988989);
          this.Tagadata = res.data.originalContent;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.postlist {
  margin: 1rem 1rem;
  padding: 1rem 0rem;
  border-bottom: 1px solid #f3f3f3;
}
.postitle {
  font-size: 1.2rem;
  font-weight: 700;
}
.postsummary {
  font-size: 1rem;
  margin: 1rem 0rem;
}
.posttime {
  color: #bbbbbb;
  font-size: 0.8rem;
}
</style>
