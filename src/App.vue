<script setup>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
</script>

<template>
<div class="window w-screen h-screen">
  <Header></Header>
  <Menu></Menu>
</div>


</template>


<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  a {
    text-decoration: none;
  }
</style>
