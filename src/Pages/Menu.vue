<script setup>
import Blocks from "../components/Blocks.vue";
import {provide, ref, watch} from 'vue';
import Page from "./Page.vue";
import axios from "axios";
const isClickable = ref(true);
const Opacity_1 = ref('opacity-30');
const Opacity_2 = ref('opacity-30');
const Opacity_3 = ref('opacity-30');

const goTo = ref('')
defineProps({
  server_name: String
})

function progress(){
  percent===0 ? Opacity_1.value = 'opacity-90': Opacity_1.value = 'opacity-30';
  percent===1 ? Opacity_2.value = 'opacity-90': Opacity_2.value = 'opacity-30';
  percent===2 ? Opacity_3.value = 'opacity-90': Opacity_3.value = 'opacity-30';
  if(percent===0){goTo.value = 'first'}else if(percent===1){goTo.value = 'second'}else if(percent===2){goTo.value = 'third'}

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
  if(percent===0){goTo.value = 'first'}else if(percent===1){goTo.value = 'second'}else if(percent===2){goTo.value = 'third'}


  if(percent<3){
    document.querySelector('.Carousel').style.transform = 'translateX(' + (-100 * percent) + 'vw)';
    totalDiff-=window.outerWidth;
  }else{
    document.querySelector('.Carousel').style.transform = 'translateX(0)';
    percent = 0;
    if(percent===0){goTo.value = 'first'}else if(percent===1){goTo.value = 'second'}else if(percent===2){goTo.value = 'third'}

    totalDiff = 0;
  }
  progress();//вперед
}
function prev () {
  percent--;
  if(percent===0){goTo.value = 'first'}else if(percent===1){goTo.value = 'second'}else if(percent===2){goTo.value = 'third'}
  if (percent >= 0) {
    document.querySelector('.Carousel').style.transform = 'translateX(' + (-100 * percent) + 'vw)';
    totalDiff+=window.outerWidth;
  } else {
    document.querySelector('.Carousel').style.transform = 'translateX(-200vw)';
    percent = 2;
    goTo.value = 'second';
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

const Show = ref(false)
function show(){
  Show.value = !Show.value
}

const Open = ref(false)
function openCloseCase(){
  Open.value = !Open.value;
  if(Open.value){
    document.querySelector('.HiddenCase').classList.remove('Close')
    document.querySelector('.Arrow').classList.remove('RotateDown')

    document.querySelector('.HiddenCase').classList.add('Open')
    document.querySelector('.Arrow').classList.add('RotateUp')
  }else{
    document.querySelector('.HiddenCase').classList.remove('Open')
    document.querySelector('.Arrow').classList.remove('RotateUp')


    document.querySelector('.HiddenCase').classList.add('Close')
    document.querySelector('.Arrow').classList.add('RotateDown')
  }
}

function openCloseCaseSecond(){
  Open.value = !Open.value;
  if(Open.value){
    document.querySelector('.HiddenCaseSecond').classList.remove('Close')
    document.querySelector('.ArrowSecond').classList.remove('RotateDown')

    document.querySelector('.HiddenCaseSecond').classList.add('Open')
    document.querySelector('.ArrowSecond').classList.add('RotateUp')
  }else{
    document.querySelector('.HiddenCaseSecond').classList.remove('Open')
    document.querySelector('.ArrowSecond').classList.remove('RotateUp')


    document.querySelector('.HiddenCase').classList.add('Close')
    document.querySelector('.ArrowSecond').classList.add('RotateDown')
  }
}
</script>

<template>

  <div class="Wrapper h-screen  relative overflow-hidden">
    <div class="Black  bg-black w-screen h-screen relative opacity-100 z-0">
      <div class="Back bg-cover bg-center h-full w-full absolute opacity-80 -z-10 "></div>


      <div class="Carousel hidden m750:flex justify-center items-center h-4/5 ease duration-500"
           @touchstart="handleTouchStart($event)"
           @touchmove="handleTouchMove($event)"
           @touchend="handleTouchEnd($event)">

        <div class="Element flex flex-col  h-5/6 w-10/12  ease duration-500 mx-5 pt-20 relative">

          <div class="First-image h-96 w-full bg-cover shadow-2xl shadow-red-500 rounded-2xl " >
            <h1 class="w-full bg-red-800 text-4xl text-center rounded-t-2xl  absolute  text-gray-50 z-20"><b>ПЕРВОЕ</b></h1>
            <div class="Gradient h-52 w-full rounded-t-2xl absolute z-10"></div>
            <div class="black w-full h-full bg-black rounded-2xl opacity-30 z-0"></div>
          </div>

          <div class="BlackText text-xl text-center font-bold text-gray-800 px-4 pt-10 m260:text-xl mh720:text-vh3  bg-opacity-50  "><b>Откройте для себя удовольствие ванили, шоколада и карамели, тающих на языке в каждом кусочке</b></div>
        </div>

        <div class="Second  h-5/6 w-10/12 bg-cover ease duration-500 shadow-2xl shadow-amber-300 mx-5 rounded-2xl relative z-10">
          <div class="Text h-full w-full flex flex-col items-center  absolute text-2xl text-gray-50 z-30">
            <div  class="flex flex-col h-full w-full items-center justify-center"  >
              <h1 class="w-full mt-10  bg-fuchsia-700 text-4xl text-center"><b>ВТОРОЕ</b></h1>

              <div v-if="Show" class="h-fit  transition  px-4 py-10 m260:text-xl mh720:text-vh3 bg-black bg-opacity-50  "><b>Откройте для себя удовольствие ванили, шоколада и карамели, тающих на языке в каждом кусочке</b></div>
              <div v-if="!Show" class="h-10 w-14 bg-fuchsia-600 text-center opacity-60 rounded-b-lg" @click="show">\/</div>
              <div v-if="Show" class="h-10 w-14 bg-fuchsia-600 text-center opacity-60 rounded-b-lg" @click="show">/\</div>
            </div>
          </div>
          <div class="black w-full h-full bg-black rounded-2xl opacity-30 z-20"></div>
        </div>

        <div class="Third  h-5/6 w-10/12 bg-cover ease duration-500 shadow-2xl shadow-fuchsia-200  mx-5 rounded-2xl relative z-10">

          <div class="Text h-full w-full flex flex-col items-center  absolute text-2xl text-gray-50 z-30">
            <div  class="flex flex-col h-full w-full items-center justify-center"  >
              <h1 class="w-full mt-10  bg-fuchsia-700 text-4xl text-center"><b>ДЕСЕРТЫ</b></h1>

              <div v-if="Show" class="h-fit  transition  px-4 py-10 m260:text-xl mh720:text-vh3 bg-black bg-opacity-50  "><b>Откройте для себя удовольствие ванили, шоколада и карамели, тающих на языке в каждом кусочке</b></div>
              <div v-if="!Show" class="h-10 w-14 bg-fuchsia-600 text-center opacity-60 rounded-b-lg" @click="show">\/</div>
              <div v-if="Show" class="h-10 w-14 bg-fuchsia-600 text-center opacity-60 rounded-b-lg" @click="show">/\</div>
            </div>
          </div>
          <div class="black w-full h-full bg-black rounded-2xl opacity-30 z-20"></div>
        </div>
      </div>

      <div class="Progress-bar hidden m750:flex justify-center gap-5 mb-2">
        <div class="One h-3.5 w-3.5 bg-white rounded-3xl ease duration-300 z-10" :class="Opacity_1"></div>
        <div class="Two h-3.5 w-3.5 bg-white rounded-3xl ease duration-300 z-10" :class="Opacity_2"></div>
        <div class="Three h-3.5 w-3.5 bg-white rounded-3xl ease duration-300 z-10" :class="Opacity_3"></div>
      </div>

      <div class="Buttons hidden m750:flex items-center justify-center w-full h-20 px-5  bottom-16 gap-3">
        <button class="w-16 h-16
                     text-2xl text-slate-700 font-bold
                      bg-gray-100 bg-opacity-90
                      rounded-3xl z-10" @click="handleClickPrev "><</button>


        <button class="w-1/3 h-16
                      text-2xl  text-white
                      bg-green-700 bg-opacity-90
                      rounded-3xl z-10
                      m350:text-xl">
          <router-link  :to="{name: 'Page', params:{dish: `${goTo}`}}">
          <p class="w-full">Выбрать</p>
          </router-link>
        </button>

        <button class="w-16 h-16
                      text-2xl text-slate-700 font-bold
                      bg-gray-100 bg-opacity-90
                      rounded-3xl z-10" @click="handleClickNext">></button>
      </div>

      <div class="BLocks m750:hidden  w-full h-full">
        <Blocks></Blocks>
      </div>

    </div>
    <div class="flex justify-center items-center h-10 w-full  text-lg  font-bold text-slate-100 opacity-70 hover:cursor-pointer bottom-0 absolute"><a href="https://vk.com/crockshine">© Королев Михаил</a></div>

  </div>

</template>

<style scoped>
.Back{
  background-image: url('/images/фон без стола.webp');
}
.First-image{
  background-image: url('/images/первые блюда.webp');
}

.Second{
  background-image: url('/images/вторые блюда.webp');
}

.Third{
  background-image: url('/images/десерты.webp')
}

.Carousel{
  width: 300vw;
}

.Gradient{
  background: linear-gradient(to bottom, rgb(152, 27, 27), rgba(255, 255, 255, 0));
}

.Open{
  transition:  ease 0.6s;
  opacity: 1;
  height: 30vh;

}
.RotateUp{
  transition: ease 0.5s;
  rotate: 200grad;
}
.RotateDown{
  transition: ease 0.5s;
  rotate: 0grad;
}
.Close{
  transition:  ease 0.6s;
  opacity: 0;
  height: 0;
}
</style>