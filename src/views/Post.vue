<template>
  <div class="postsdetail">
    <div v-html="data"></div>
  </div>
</template>
<script>
import { getPostsDetail } from "../utils/api";
import { fetch } from "../utils/service";
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
          console.log(res, 999888);
        })
        .catch(err => {
          console.log(err, 999);
        });
    }
  }
};
</script>

<style scoped>
.postsdetail{
    padding: 1rem;
}
</style>