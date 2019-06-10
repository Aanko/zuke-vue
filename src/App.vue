<template>
  <div id="app">
    <div class="main">
      <div id="nav">
        <Menu/>
        <!-- <Header/> -->
      </div>
      <router-view/>
    </div>
    <div style="text-align:center;font-size:0.8rem;margin:20px 0;">Designed by zuke, Proudly published with Halo</div>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
// import Header from "@/components/Header";
export default {
  components: { Menu }
};
</script>

<style>
</style>
