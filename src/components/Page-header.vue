<script setup>
import { defineProps } from 'vue';
defineProps({
  imageUrl: String,
  headTitle: String
});
</script>

<template>
  <div class="Head flex overflow-hidden items-center w-full h-60 mb-3  rounded-t-2xl relative">
    <img :src="imageUrl" alt="First" class="w-full -bottom-40 absolute">
    <div class="Black w-full h-full bg-black opacity-30 absolute"></div>
    <div class="Text flex justify-center items-center w-full h-full font-bold text-white text-7xl absolute">{{headTitle}}</div>
  </div>
</template>

<style scoped>

</style>