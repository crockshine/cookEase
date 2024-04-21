<script setup>
import { defineProps } from 'vue';
defineProps({
  imageUrl: String,
  headTitle: String
});
</script>

<template>
  <div class="Head flex overflow-hidden items-center w-full h-36 m2000:h-52 rounded-t-2xl m750:rounded-t-none relative">
    <img :src="imageUrl" alt="" class="w-full  bg-center bg-cover bg-no-repeat   absolute z-10">
    <div class="Black w-full h-full bg-black opacity-35 absolute z-20"></div>
    <div class="Text flex justify-center items-center w-full h-full font-bold text-slate-500 text-2xl absolute z-0">Загрузка...</div>
    <div class="Text flex justify-center items-center w-full h-full font-bold text-white text-center text-6xl m750:text-5xl m470:text-4xl absolute z-30">{{headTitle}}</div>
  </div>
</template>

<style scoped>

</style>