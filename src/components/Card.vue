<script setup>
import { defineProps } from 'vue';

defineProps({
  image:String,
  title:String,
  time:Number
});
</script>

<template>
  <div class="White flex items-center justify-around h-96 p-2 border-2 border-gray-200 rounded-lg transition
              hover:-translate-y-5 hover:shadow-2xl hover:cursor-pointer">
    <img :src="image" alt="" class="h-4/5 rounded-3xl">

    <div class="Text flex flex-col">
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