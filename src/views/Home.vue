<template>
  <div class="home">
    <div v-for="(item,index) in data" :key="index" class="postlist">
      <a :href="item.url" class="postitle">{{item.title}}</a>
      <p class="postsummary">{{item.summary}}</p>
      <div class="postfooter">
        <div class="time">
          <i class="fa fa-sun-o posttime"></i>
          <span class="posttime">2019-6-10</span>
        </div>
        <div class="tag">
          <i class="fa fa-tags posttag"></i>
          <span class="posttag">Vue Android</span>
        </div>
      </div>
    </div>
    <!-- <p v-html="Tagadata">{{Tagadata}}</p> -->
  </div>
</template>

<script>
// 首页
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
          api_token: "776eb0f0212c42858cf4abfc2fe1ef2f"
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
          api_token: "776eb0f0212c42858cf4abfc2fe1ef2f"
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
  border-bottom: 0.8px solid #f3f3f3;
}
/* .postlist :hover {
  box-shadow: 0rem 0rem 0.4rem 0rem rgba(68, 68, 68, 0.25);
} */
.postitle {
  font-size: 1.4rem;
  font-weight: 650;
}
.postsummary {
  font-size: 1rem;
  margin: 1rem 0rem;
  letter-spacing: 0.1rem;
  color: #272727;
}
@media screen and (max-width: 900px) {
  .postitle {
    font-size: 1rem;
    font-weight: 650;
  }
  .postsummary {
    font-size: 0.8rem;
    margin: 1rem 0rem;
    color: #272727;
  }
}
.postfooter {
  display: flex;
  flex-direction: row;
}
.posttime {
  color: #bbbbbb;
  margin-right: 0.2rem;
  font-size: 0.6rem;
}
.posttag {
  color: #bbbbbb;
  margin-right: 0.2rem;
  font-size: 0.6rem;
}
.tag {
  margin: 0 1rem;
}
</style>
