<script setup>

</script>

<template>
  <div class="Wrapper">

    <div class="Black bg-black w-screen h-screen relative">

      <div class="Back bg-cover bg-center opacity-50 w-screen h-screen absolute top-0 left-0 z-0"></div>

      <div class="Head-Text flex items-center justify-center flex-wrap
                  w-screen h-3/5 text-vw10
                  relative z-10
                  m594:flex-col m594:text-left m594:items-center">

        <h1 class="text-orange-100
                   m594:text-vw16  ">Готовить?</h1>
        <h1 class="text-orange-100 ml-10
                   m594:text-vw16 m594:ml-0  ">Легко!</h1>
      </div>



      <div class="Button flex justify-center
                  w-screen h-2/5 relative">
        <router-link  class="border-2 w-1/5 h-2/6  absolute
                            top-28 rounded-2xl
                            flex justify-center items-center
                            text-5xl text-white text-opacity-80 font-bold
                            ease-out duration-300
                            m2500:top-16 m1300:text-4xl m1300:w-1/5 m1300:h-1/5 m1300:top-18 m750:w-1/2 m750:text-2xl
                            hover:bg-orange-100 hover:text-orange-950"
                            to="/menu">Начать
        </router-link>
      </div>


      <div  class="Link flex justify-center items-center
       h-10 w-full absolute bottom-0
       text-xl font-bold text-slate-100 opacity-70
       hover:cursor-pointer"><a href="https://vk.com/crockshine">© Королев Михаил</a></div>
    </div>

  </div>

</template>

<style scoped>
.Back{
  background-image: url('/images/стол с ушами.webp');
}

h1{
  font-family: "Sensei", "Times New Roman";
}

</style>