<template>
  <div class="home">
    <div v-for="(item,index) in postsData" :key="index" class="postlist">
      <router-link :to="{path:'post/',query:{id:item.id}}" class="postitle">{{item.title}}</router-link>
      <p class="postsummary">{{item.summary}}</p>
      <div class="postfooter">
        <div class="time">
          <i class="fa fa-sun-o posttime"></i>
          <span class="posttime">{{fomatDate(item.editTime)}}</span>
        </div>
        <div class="tag">
          <i class="fa fa-tags posttag"></i>
          <span class="posttag">Vue Android</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 首页
import { getPosts } from "../utils/api";
export default {
  name: "home",
  components: {},
  data() {
    return {
      postsData: []
    };
  },
  created() {
    this.getPostsData();
  },
  methods: {
    getPostsData() {
      getPosts()
        .then(res => {
          this.postsData = res.data.content;
        })
        .catch(err => {
          console.log(err, 111);
        });
    },
    fomatDate(obj) {
      var date = new Date(obj);
      var y = 1900 + date.getYear();
      var m = "0" + (date.getMonth() + 1);
      var d = "0" + date.getDate();
      return (
        y +
        "-" +
        m.substring(m.length - 2, m.length) +
        "-" +
        d.substring(d.length - 2, d.length)
      );
    }
  }
};
</script>
<style scoped>
.postlist {
  margin: 1rem;
  padding: 2rem 2rem;
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
