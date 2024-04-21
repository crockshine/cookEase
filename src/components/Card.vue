<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  image:String,
  title:String,
  time:Number,
  id:Number,
});

</script>

<template>
  <router-link :to="{name: 'Info', params:{recipes: `${props.id}`}}">

  <div class="White  flex justify-center items-center flex-col w-full transition
            hover:-translate-y-5 hover:shadow-2xl hover:cursor-pointer m750:hover:shadow-none
            rounded-3xl border-2 border-gray-400 border-opacity-20 pt-2 px-2">

    <img :src="image" alt="" class="w-full max-w-96 rounded-3xl">

    <div class="Text flex  flex-col">
      <span class="text-xl m2000:text-3xl font-bold text-center mb-1">{{ title }}</span>
      <div class="text-xl m2000:text-2xl flex justify-center">
<!--        часики-->
        <span>{{ time }} мин.</span>
      </div>
    </div>
  </div>
  </router-link>
</template>

<style scoped>

</style>