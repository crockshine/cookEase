<script setup>
import { defineProps } from 'vue';

defineProps({
  image:String,
  title:String,
  time:Number
});
</script>

<template>
  <div class="White flex justify-center items-center flex-col w-full transition hover:-translate-y-5 hover:shadow-2xl hover:cursor-pointer rounded-3xl border-2 border-gray-400 border-opacity-20 pt-10">

    <img :src="image" alt="" class=" max-h-96 rounded-3xl">

    <div class="Text flex  flex-col">
      <span class="text-4xl text-center mb-3">{{ title }}</span>
      <div class="text-2xl flex justify-center">
<!--        часики-->
        <span>{{ time }} мин.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>