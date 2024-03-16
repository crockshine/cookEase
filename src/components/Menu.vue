<script setup>
import {ref} from 'vue';
const isClickable = ref(true);


const Height_1 = ref('h-5/6')
const Opacity_1 = ref('opacity-100')
const Translate_1 = ref('-translate-x-auto')
const Z_1 = ref('z-20')
const id_1 =ref(1)

const Height_3 = ref('h-3/5')
const Opacity_3 = ref('opacity-50')
const Translate_3 = ref('translate-x-full')
const Z_3 = ref('z-10')
const id_3 = ref(3)

const Height_2 = ref('h-3/5')
const Opacity_2 = ref('opacity-50')
const Translate_2 = ref('-translate-x-full')
const Z_2 = ref('z-10')
const id_2 = ref(2)




function handleClickNext() {
  if (isClickable.value) {
    countPlus();
    next();
    isClickable.value = false;
    setTimeout(() => {
      isClickable.value = true;
    }, 500);
  }
}
function handleClickPrev() {
  if (isClickable.value) {
    countMinus();
    prev();
    isClickable.value = false;
    setTimeout(() => {
      isClickable.value = true;
    }, 500);
  }
}

function countPlus(){

  if(id_1.value === 3){
    id_1.value = 1;
  }else{
    id_1.value++;
  }

  if(id_2.value === 3){
    id_2.value = 1;
  }else{
    id_2.value++;
  }

  if(id_3.value === 3){
    id_3.value = 1;
  }else{
    id_3.value++;
  }

}
function countMinus(){

  if(id_1.value === 1){
    id_1.value = 3;
  }else{
    id_1.value--;
  }

  if(id_2.value === 1){
    id_2.value = 3;
  }else{
    id_2.value--;
  }

  if(id_3.value === 1){
    id_3.value = 3;
  }else{
    id_3.value--;
  }

}

function next(){
  if(id_1.value === 1){
    Height_1.value = 'h-5/6'
    Opacity_1.value = 'opacity-100'
    Translate_1.value = '-translate-x-auto'
    Z_1.value = 'z-20'
  }else if(id_1.value === 2){
    Height_1.value = 'h-3/5'
    Opacity_1.value = 'opacity-50'
    Translate_1.value = '-translate-x-full'
    Z_1.value = 'z-10'
  }else if(id_1.value === 3){
    Height_1.value = 'h-3/5'
    Opacity_1.value = 'opacity-50'
    Translate_1.value = 'translate-x-full'
    Z_1.value = 'z-10'
  }

  if(id_2.value === 1){
    Height_2.value = 'h-5/6'
    Opacity_2.value = 'opacity-100'
    Translate_2.value = '-translate-x-auto'
    Z_2.value = 'z-20'
  }else if(id_2.value === 2){
    Height_2.value = 'h-3/5'
    Opacity_2.value = 'opacity-50'
    Translate_2.value = '-translate-x-full'
    Z_2.value = 'z-10'
  }else if(id_2.value === 3){
    Height_2.value = 'h-3/5'
    Opacity_2.value = 'opacity-50'
    Translate_2.value = 'translate-x-full'
    Z_2.value = 'z-10'
  }

  if(id_3.value === 1){
    Height_3.value = 'h-5/6'
    Opacity_3.value = 'opacity-100'
    Translate_3.value = 'translate-x-auto'
    Z_3.value = 'z-20'
  }else if(id_3.value === 2){
    Height_3.value = 'h-3/5'
    Opacity_3.value = 'opacity-50'
    Translate_3.value = '-translate-x-full'
    Z_3.value = 'z-10'
  }else if(id_3.value === 3){
    Height_3.value = 'h-3/5'
    Opacity_3.value = 'opacity-50'
    Translate_3.value = 'translate-x-full'
    Z_3.value = 'z-10'
  }
}
function prev (){
  if(id_1.value === 1){
    Height_1.value = 'h-5/6'
    Opacity_1.value = 'opacity-100'
    Translate_1.value = '-translate-x-auto'
    Z_1.value = 'z-20'
  }else if(id_1.value === 2){
    Height_1.value = 'h-3/5'
    Opacity_1.value = 'opacity-50'
    Translate_1.value = '-translate-x-full'
    Z_1.value = 'z-10'
  }else if(id_1.value === 3){
    Height_1.value = 'h-3/5'
    Opacity_1.value = 'opacity-50'
    Translate_1.value = 'translate-x-full'
    Z_1.value = 'z-10'
  }

  if(id_2.value === 1){
    Height_2.value = 'h-5/6'
    Opacity_2.value = 'opacity-100'
    Translate_2.value = '-translate-x-auto'
    Z_2.value = 'z-20'
  }else if(id_2.value === 2){
    Height_2.value = 'h-3/5'
    Opacity_2.value = 'opacity-50'
    Translate_2.value = '-translate-x-full'
    Z_2.value = 'z-10'
  }else if(id_2.value === 3){
    Height_2.value = 'h-3/5'
    Opacity_2.value = 'opacity-50'
    Translate_2.value = 'translate-x-full'
    Z_2.value = 'z-10'
  }

  if(id_3.value === 1){
    Height_3.value = 'h-5/6'
    Opacity_3.value = 'opacity-100'
    Translate_3.value = 'translate-x-auto'
    Z_3.value = 'z-20'
  }else if(id_3.value === 2){
    Height_3.value = 'h-3/5'
    Opacity_3.value = 'opacity-50'
    Translate_3.value = '-translate-x-full'
    Z_3.value = 'z-10'
  }else if(id_3.value === 3){
    Height_3.value = 'h-3/5'
    Opacity_3.value = 'opacity-50'
    Translate_3.value = 'translate-x-full'
    Z_3.value = 'z-10'
  }
}


const x1 = ref(0);
const diff = ref(0);
const newTranslate = ref(0);


function handleTouchStart(event, id){
  if (id === 1){
    x1.value = event.touches[0].clientX;
    document.querySelector('.block-'+ id).style.height = '60%';
    document.querySelector('.block-'+ id).style.width = '80%';

  }
}

function handleTouchMove(event, id){

if (id === 1){
  diff.value = x1.value - (event.changedTouches[0].clientX)
  newTranslate.value =-(diff.value/ window.outerWidth) *100; //изменения транслейта  в %
  // console.log(newTranslate.value)
  document.querySelector('.block-'+ id).style.transform = `translateX(${newTranslate.value}%)`; //изменения транслейта  в %

  console.log(diff.value);
  }
}

function handleTouchEnd(event, id){

    if (Math.abs(diff.value) > window.outerWidth * 0.3 && diff.value>0) {
      handleClickNext()
      document.querySelector('.block-'+ id).style.transform = '';
      document.querySelector('.block-'+ id).style.height = '';
      document.querySelector('.block-'+ id).style.width = '';

    } else {
      handleClickPrev()
      document.querySelector('.block-'+ id).style.transform = '';
      document.querySelector('.block-'+ id).style.height = '';
      document.querySelector('.block-'+ id).style.width = '';
    }
  diff.value = 0;
}
</script>

<template>
  <div class="Wrapper h-screen">
    <div class="Carousel w-screen overflow-hidden h-5/6  flex justify-center items-center relative">

      <div class="First absolute w-10/12 bg-cover top-1/5 ease duration-500 shadow-2xl shadow-black"
           @touchstart="handleTouchStart($event, id_1)"
           @touchmove="handleTouchMove($event, id_1)"
           @touchend="handleTouchEnd($event, id_1)"
           :class="Height_1, Opacity_1, Translate_1, Z_1, 'block-' + id_1"
      ></div>

      <div class="Second absolute h-3/5 w-10/12 bg-cover top-1/5 ease duration-500 shadow-2xl shadow-black"
           @touchstart="handleTouchStart($event, id_2)"
           @touchmove="handleTouchMove($event, id_2)"
           @touchend="handleTouchEnd($event, id_2)"
           :class="Height_2, Opacity_2, Translate_2, Z_2, 'block-' + id_2"
      ></div>

      <div class="Third absolute h-3/5 w-10/12 bg-cover top-1/5 shadow-2xl shadow-black ease duration-500"
           @touchstart="handleTouchStart($event, id_3)"
           @touchmove="handleTouchMove($event, id_3)"
           @touchend="handleTouchEnd($event, id_3)"
           :class="Height_3, Opacity_3, Translate_3, Z_3, 'block-' + id_3"
      ></div>

    </div>

    <div class="Buttons flex justify-center px-10">
      <button class="border border-gray-500 h-20 w-full" @click="handleClickPrev"><</button>
      <button class="border border-gray-500 h-20 w-full" @click="handleClickNext">></button>
    </div>
  </div>


</template>

<style scoped>
  .First{
    background-image: url('/images/первые блюда.jpg');

  }

  .Second{
    background-image: url('/images/десерты.jpg');

  }

  .Third{
    background-image: url('/images/вторые блюда.jpg')
  }
</style>