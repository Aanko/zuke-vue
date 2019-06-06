<template>
  <div id="app" class="container">
    <div id="nav">
      <Menu/>
      <Header/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
import Header from "@/components/Header";
export default {
  components: { Menu, Header }
};
</script>

<style>
</style>
