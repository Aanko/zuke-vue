<template>
  <div class="archives">
    <div v-for="(item,index) in yearsData" :key="index" class="archives-content">
      <p class="archive-year">{{item.year}}</p>
      <div class="article" v-for="(name,i) in item.posts" :key="i">
        <p class="archive-title">{{name.title}}</p>
        <p class="archive-time">{{fomatDate(name.editTime)}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  // 归档页面
  import { getYears } from "../utils/api";
  import fomatDate from "../assets/js/common";
  export default {
    data() {
      return {
        yearsData: []
      };
    },
    created() {
      this.getArchiveData();
    },
    methods: {
      getArchiveData() {
        getYears()
          .then(res => {
            this.yearsData = res.data;
          })
          .catch(err => {
            console.log(err);
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
  .archives-content {
    margin: 1rem;
    padding: 1rem 0rem;
  }

  .archive-year {
    font-size: 1.4rem;
    font-weight: 650;
  }

  .article {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .archive-title {
    font-size: 1rem;
    margin: 0.5rem 1rem;
    color: #272727;
  }

  .archive-time {
    font-size: 1rem;
    color: #272727;
  }

  @media screen and (max-width: 900px) {
    .archive-year {
      font-size: 1rem;
      font-weight: 650;
    }

    .archive-title {
      font-size: 0.8rem;
    }

    .archive-time {
      font-size: 0.8rem;
    }
  }
</style>