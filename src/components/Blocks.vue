<script setup>

</script>

<template>
  <div class="Blocks w-full h-full flex justify-center items-center gap-10 px-10 ">

    <div class="First w-1/3 h-4/5 bg-cover rounded-2xl shadow-2xl shadow-red-500 overflow-hidden relative">
      <div class="Black w-full h-full bg-black rounded-2xl opacity-20 ease duration-500 absolute"></div>

      <div class="Text w-full h-full flex flex-col justify-center items-center text-white text-3xl absolute z-20">
        <h1 class="H w-full text-6xl m900:text-4xl text-center bg-red-800 shadow-2xl shadow-zinc-950 ease duration-500 absolute"><b>ПЕРВОЕ</b></h1>
        <p class="P p-5 m1080:text-vw2_5 mh1275:text-vh3 ease duration-500 "><b>Погрузитесь в океан вкусов и ароматов, ощущая каждую ложку, как нежный поцелуй гурманной кухни</b></p>
      </div>

      <div class="Button w-full h-14 flex justify-center text-white text-xl z-30 absolute  bottom-0 translate-y-16 ease duration-500">
        <button class="w-3/5  border-2 border-red-800 rounded-xl hover:bg-red-800 ease duration-500"><b>Выбрать</b></button>
      </div>
    </div>

    <div class="Second w-1/3 h-4/5 bg-cover rounded-2xl shadow-2xl shadow-orange-500 overflow-hidden relative">
      <div class="Black w-full h-full bg-black rounded-2xl opacity-20 ease duration-500 absolute"></div>

      <div class="Text w-full h-full flex flex-col justify-center items-center text-white text-3xl absolute z-20">
          <h1 class="H w-full text-6xl m900:text-4xl text-center bg-orange-500 shadow-2xl shadow-zinc-950 ease duration-500 absolute"><b>ВТОРОЕ</b></h1>
        <p class="P p-5 m1080:text-vw2_5 mh1275:text-vh3 ease duration-500 "><b>Ощутите смешение сочных мяс и запеченных овощей, приправленное ароматными соусами</b></p>
      </div>

      <div class="Button w-full h-14 flex justify-center text-white text-xl z-30 absolute  bottom-0  translate-y-16 ease duration-500">
        <button class="w-3/5  border-2 border-orange-500 rounded-xl hover:bg-orange-500 ease duration-500"><b>Выбрать</b></button>
      </div>
    </div>

    <div class="Third w-1/3 h-4/5 bg-cover rounded-2xl shadow-2xl shadow-fuchsia-300 overflow-hidden relative">
      <div class="Black w-full h-full bg-black rounded-2xl opacity-20 ease duration-500 absolute"></div>

      <div class="Text w-full h-full flex flex-col justify-center items-center text-white text-3xl absolute z-20">
        <h1 class="H w-full text-6xl m900:text-4xl text-center bg-fuchsia-700 shadow-2xl shadow-zinc-950 ease duration-500 absolute"><b>ДЕСЕРТЫ</b></h1>
        <p class="P p-5 m1080:text-vw2_5 mh1275:text-vh3 ease duration-500 "><b>Откройте для себя удовольствие ванили, шоколада и карамели, тающих на языке в каждом кусочке</b></p>
      </div>

      <div class="Button w-full h-14 flex justify-center text-white text-xl z-30 absolute  bottom-0  translate-y-16 ease duration-500">
        <button class="w-3/5  border-2 border-fuchsia-700 rounded-xl hover:bg-fuchsia-700 ease duration-500"><b>Выбрать</b></button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.First:hover{
  .H{
    transform: translateY(-25vh);
  }
  .P{
    transform: translateY(0vh);
    opacity: 100%;
  }
  .Black{
    opacity: 60%;
  }
  .Button{
    transform: translateY(-10vh);
  }
}
.Second:hover{
  .H{
    transform: translateY(-25vh);
  }
  .P{
    transform: translateY(0vh);
    opacity: 100%;
  }
  .Black{
    opacity: 60%;
  }
  .Button{
    transform: translateY(-10vh);
  }
}
.Third:hover{
  .H{
    transform: translateY(-25vh);
  }
  .P{
    transform: translateY(0vh);
    opacity: 100%;
  }
  .Black{
    opacity: 60%;
  }
  .Button{
    transform: translateY(-10vh);
  }
}

.P{
  transform: translateY(50vh);
  opacity: 0;
}
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