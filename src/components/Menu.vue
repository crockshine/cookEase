<script setup>
import Blocks from "./Blocks.vue";
import {ref} from 'vue';
const isClickable = ref(true);
const Opacity_1 = ref('opacity-30');
const Opacity_2 = ref('opacity-30');
const Opacity_3 = ref('opacity-30');

function progress(){
  percent===0 ? Opacity_1.value = 'opacity-90': Opacity_1.value = 'opacity-30';
  percent===1 ? Opacity_2.value = 'opacity-90': Opacity_2.value = 'opacity-30';
  percent===2 ? Opacity_3.value = 'opacity-90': Opacity_3.value = 'opacity-30';
}

function handleClickNext() {
  if (isClickable.value) {
    next();
    isClickable.value = false;
    setTimeout(() => {
      isClickable.value = true;
    }, 500);
  }
}
function handleClickPrev() {
  if (isClickable.value) {
    prev();
    isClickable.value = false;
    setTimeout(() => {
      isClickable.value = true;
    }, 500);
  }
}

let percent = 0, x1=0, diff=0, totalDiff = 0;
function next(){
  percent++;

  if(percent<3){
    document.querySelector('.Carousel').style.transform = 'translateX(' + (-100 * percent) + 'vw)';
    totalDiff-=window.outerWidth;
  }else{
    document.querySelector('.Carousel').style.transform = 'translateX(0)';
    percent = 0;
    totalDiff = 0;
  }
  progress();//вперед
}
function prev () {
  percent--;

  if (percent >= 0) {
    document.querySelector('.Carousel').style.transform = 'translateX(' + (-100 * percent) + 'vw)';
    totalDiff+=window.outerWidth;
  } else {
    document.querySelector('.Carousel').style.transform = 'translateX(-200vw)';
    percent = 2;
    totalDiff -=window.outerWidth*2;
  }
  progress();//назад
}

function handleTouchStart(event){
  x1 = event.touches[0].clientX;
}

function handleTouchMove(event){
  diff = event.touches[0].clientX - x1 ;
  document.querySelector('.Carousel').style.transform = 'translateX('+(diff+ totalDiff)+'px)';
}

function handleTouchEnd(){
  if(Math.abs(diff)>(window.outerWidth/100)*40 && diff < 0){
    next();
    diff = 0;
  }else if(Math.abs(diff)>(window.outerWidth/100)*40 && diff > 0){
    prev();
    diff = 0;
  }
  else{
    document.querySelector('.Carousel').style.transform = 'translateX(' + (-window.outerWidth * percent) + 'px)';
    diff = 0;
  }
}
progress(); //почти как onMounted
</script>

<template>

  <div class="Wrapper h-screen  relative overflow-hidden">
    <div class="Black  bg-black w-screen h-screen relative opacity-100 z-0">
      <div class="Back bg-cover bg-center h-full w-full absolute opacity-50 -z-10 "></div>


      <div class="Carousel hidden m750:flex justify-center items-center h-4/5 ease duration-500"
           @touchstart="handleTouchStart($event)"
           @touchmove="handleTouchMove($event)"
           @touchend="handleTouchEnd($event)">

        <div class="First  h-5/6 w-10/12 bg-cover ease duration-500 shadow-2xl shadow-red-500  mx-5 rounded-2xl relative z-10">
          <div class="Text h-full w-full flex flex-col items-center pt-8 p-5 absolute text-2xl text-gray-50 z-30">
            <h1 class="mb-10 text-4xl"><b>ПЕРВОЕ</b></h1>
            <p><b>Погрузитесь в океан вкусов и ароматов, ощущая каждую ложку, как нежный поцелуй гурманной кухни</b></p>
          </div>
          <div class="black w-full h-full bg-black rounded-2xl opacity-50 z-20"></div>
        </div>

        <div class="Second  h-5/6 w-10/12 bg-cover ease duration-500 shadow-2xl shadow-amber-300 mx-5 rounded-2xl relative z-10">
          <div class="Text h-full w-full flex flex-col items-center pt-8 p-5 absolute text-2xl text-gray-50 z-30">
            <h1 class="mb-5 text-4xl"><b>ВТОРОЕ</b></h1>
            <p><b>Ощутите смешение сочных мяс и запеченных овощей, приправленное ароматными соусами</b></p>
          </div>
          <div class="black w-full h-full bg-black rounded-2xl opacity-50 z-20"></div>
        </div>

        <div class="Third  h-5/6 w-10/12 bg-cover ease duration-500 shadow-2xl shadow-fuchsia-200  mx-5 rounded-2xl relative z-10">
          <div class="Text h-full w-full flex flex-col items-center pt-8 p-5 absolute text-2xl text-gray-50 z-30">
            <h1 class="mb-5 text-4xl"><b>ДЕСЕРТЫ</b></h1>
            <p><b>Откройте для себя удовольствие ванили, шоколада и карамели, тающих на языке в каждом кусочке</b></p>
          </div>
          <div class="black w-full h-full bg-black rounded-2xl opacity-50 z-20"></div>
        </div>
      </div>

      <div class="Progress-bar hidden m750:flex justify-center gap-5 mb-5">
        <div class="One h-3.5 w-3.5 bg-white rounded-3xl ease duration-300 z-10" :class="Opacity_1"></div>
        <div class="Two h-3.5 w-3.5 bg-white rounded-3xl ease duration-300 z-10" :class="Opacity_2"></div>
        <div class="Three h-3.5 w-3.5 bg-white rounded-3xl ease duration-300 z-10" :class="Opacity_3"></div>
      </div>

      <div class="Buttons hidden m750:flex items-baseline w-full h-20 px-5 gap-1.5">
        <button class="border border-gray-100 h-4/6 rounded-l-xl text-2xl flex-grow text-white bg-gray-400 bg-opacity-20 z-10" @click="handleClickPrev "><<</button>
        <button class="border border-gray-100  h-5/6 rounded-lg text-xl flex-grow text-white bg-green-700 bg-opacity-60 z-10">Выбрать</button>
        <button class="border border-gray-100  h-4/6 rounded-r-xl text-2xl flex-grow text-white bg-gray-400 bg-opacity-20 z-10"@click="handleClickNext">>></button>
      </div>

      <div class="BLocks m750:hidden  w-full h-full">
        <Blocks></Blocks>
      </div>

    </div>
  </div>

</template>

<style scoped>
.Back{
  background-image: url('/images/фон без стола.jpg');
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

.Carousel{
  width: 300vw;
}
</style>