<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  image:String,
  title:String,
  time:Number,
  id:Number,
});

const itemId = ref()
function getId(id){
  itemId.value = id;
}
</script>

<template>
  <router-link :to="{name: 'Info', params:{recipes: `${itemId}`}}">

  <div @click="getId(id)" class="White flex justify-center items-center flex-col w-full transition hover:-translate-y-5 hover:shadow-2xl hover:cursor-pointer rounded-3xl border-2 border-gray-400 border-opacity-20 pt-10 px-10 m350:px-5 m350:pt-5">

    <img :src="image" alt="" class=" max-h-96 rounded-3xl">

    <div class="Text flex  flex-col">
      <span class="text-4xl m350:text-3xl text-center mb-3">{{ title }}</span>
      <div class="text-2xl flex justify-center">
<!--        часики-->
        <span>{{ time }} мин.</span>
      </div>
    </div>
  </div>
  </router-link>
</template>

<style scoped>

</style>