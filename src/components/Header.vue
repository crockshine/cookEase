<script setup>

</script>

<template>

  <div class="Wrapper">

    <div class="Black  bg-black w-screen h-screen relative">

      <div class="Back bg-cover bg-center w-screen h-screen opacity-50 absolute top-0 left-0 z-0"></div>

      <div class="Head-Text flex items-center justify-center w-screen h-3/5 text-vw10 flex-wrap
                              m594:flex-col m594:text-left m594:items-center relative z-10">

        <h1 class="h-fit font-sunless text-orange-100 m594:text-vw16  ">Готовить?</h1>
        <h1 class="h-fit ml-10 text-orange-100 m594:text-vw16 m594:ml-0  ">Легко!</h1>
      </div>

      <div class="Button flex justify-center w-screen h-2/5">
        <button class="w-1/6  border-2 top-1/4 text-px text-orange-100 text-opacity-80  rounded-lg relative z-10
                       m594:top-20 m594:w-1/2 m350:w-1/2 ease-out duration-300
                       hover:bg-blue-100 hover:text-blue-900">Начать</button>
      </div>

    </div>
  </div>





</template>

<style scoped>
.Back{
  background-image: url('/images/тарелка с тенью.jpg');

}
h1{
  font-family: Sensei;
}
button{
  height: 50px;

}
</style>