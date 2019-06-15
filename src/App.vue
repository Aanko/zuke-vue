<template>
  <div id="app">
    <div class="main">
      <div id="nav">
        <Menu/>
      </div>
      <router-view/>
    </div>
    <div style="text-align:center;font-size:0.8rem;margin:20px 0;">Designed by zuke, Proudly published with Halo</div>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
export default {
  components: { Menu }
};
</script>

<style>
</style>
