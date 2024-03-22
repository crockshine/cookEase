<script setup>

</script>

<template>
<div class="Blocks w-full h-4/5 flex gap-10 px-10 justify-center items-center">

  <div class="First w-1/3 h-5/6 bg-cover rounded-2xl shadow-2xl shadow-red-500 mt-10 relative">
    <div class="Text flex flex-col justify-center items-center w-full h-full text-white text-3xl ease duration-500 absolute z-10">
      <h1 class="text-6xl text-center bg-red-800 shadow-xl w-full"><b>ПЕРВОЕ</b></h1>
      <p class="p-5 hidden"><b>Погрузитесь в океан вкусов и ароматов, ощущая каждую ложку, как нежный поцелуй гурманной кухни</b></p>
    </div>
    <div class="black w-full h-full bg-black rounded-2xl opacity-40 hover:opacity-80 z-20"></div>
  </div>

  <div class="Second w-1/3 h-5/6 bg-cover rounded-2xl shadow-2xl shadow-orange-500 mt-10 relative">
    <div class="black w-full h-full bg-black rounded-2xl opacity-40 z-20"></div>
  </div>

  <div class="Third w-1/3 h-5/6 bg-cover rounded-2xl shadow-2xl shadow-fuchsia-300 mt-10 relative">
    <div class="black w-full h-full bg-black rounded-2xl opacity-40 z-20"></div>
  </div>

</div>
</template>

<style scoped>

.First{
  background-image: url('/images/первые блюда.jpg');

}

.Second{
  background-image: url('/images/вторые блюда.jpg');
}

.Third{
  background-image: url('/images/десерты.jpg')
}
</style>