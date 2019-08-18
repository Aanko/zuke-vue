<template>
  <div class="postsdetail">
    <div v-html="data" class="box"></div>
  </div>
</template>
<script>
import { getPostsDetail } from "../utils/api";
import { fetch } from "../utils/service";
import Prism from 'prismjs';
export default {
  data() {
    return {
      data: ""
    };
  },
  created() {
    this.getPostsData();
    console.log(this.$route.query.id, 999);
  },
  methods: {
    getPostsData() {
      getPostsDetail(this.$route.query.id)
        .then(res => {
          this.data = res.data.formatContent;
          Prism.highlightAll();
        })
        .catch(err => {
          console.log(err, 999);
        });
    }
  }
};
</script>

<style scoped>
.postsdetail {
  padding: 1rem;
}
.box img {
  width: 100px;
  height: 100px;
}
</style>