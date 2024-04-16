<script setup>

defineProps({
  title:String,
  imageUrl:String,
  description:String,
  color:String
})
</script>

<template>
  <div class="Element flex flex-col justify-center h-96 w-full  ease duration-500 mx-5  relative">

    <div class="Image flex-1  w-full bg-cover shadow-2xl shadow-red-500 rounded-2xl overflow-hidden relative ">
      <img :src="imageUrl" class="w-full h-full object-cover absolute" alt="">
      <h1 class="w-full bg-red-800 text-4xl text-center rounded-t-2xl  absolute  text-gray-50 z-20"
          :style="{ backgroundColor: color }"><b>{{title}}</b></h1>
      <div class="Gradient h-1/2 w-full rounded-t-2xl absolute z-10" :style="{ background: `linear-gradient(to bottom, ${color}, rgba(255, 255, 255, 0))` }"></div>
      <div class="black w-full h-full bg-black rounded-2xl opacity-30 z-0"></div>
    </div>

    <div class="BlackText  text-center font-bold text-gray-800  py-5  m260:text-xl mh720:text-vh3  bg-opacity-50 z-10 "><b>{{description}}</b></div>
  </div>
</template>

<style scoped>

</style>