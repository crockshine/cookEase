<script setup>
import Blocks from "../components/Blocks.vue";
import MenuCard from "../components/Menu-Card.vue";
import {ref} from 'vue';


const Opacity_1 = ref('opacity-30');
const Opacity_2 = ref('opacity-30');
const Opacity_3 = ref('opacity-30');

const goTo = ref('')
defineProps({
  server_name: String
})

function  progress(){
  percent===0 ? Opacity_1.value = 'opacity-90': Opacity_1.value = 'opacity-30';
  percent===1 ? Opacity_2.value = 'opacity-90': Opacity_2.value = 'opacity-30';
  percent===2 ? Opacity_3.value = 'opacity-90': Opacity_3.value = 'opacity-30';
  if(percent===0){goTo.value = 'first'}
  else if(percent===1){goTo.value = 'second'}
  else if(percent===2){goTo.value = 'third'}
}

const isClickable = ref(true); //ограничитель спама
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

//переходы
let percent = 0, x1 = 0, diff = 0, totalDiff = 0;

//+процент на который перелистыват автомат, и откат если упор.
//определяет пути перехода
function next(){
  percent++;
  if(percent===0){goTo.value = 'first'}
  else if(percent===1){goTo.value = 'second'}
  else if(percent===2){goTo.value = 'third'}

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
//сенсорная часть
function handleTouchStart(event){
  x1 = event.touches[0].clientX;
}

function handleTouchMove(event){
  diff = event.touches[0].clientX - x1 ;
  document.querySelector('.Carousel').style.transform = 'translateX('+(diff+ totalDiff)+'px)';
}
//перекидывает на некст
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

let MenuCardInfo = {
  first: {
    title: 'Первое',
    image:'./images/первые блюда.webp',
    description:'Почувствуйте удовольствие в каждой ложке',
    color:'rgb(152, 27, 27)',
    link: 'first',
    id:1
  },
  second: {
    title: 'Второе',
    image:'./images/вторые блюда.webp',
    description:'Ощутите смешение сочных мяс',
    color:'rgb(190,109,3)',
    link: 'second',
    id:2
  },
  third: {
    title: 'Десерты',
    image:'./images/десерты.webp',
    description:'Откройте для себя удовольствие ванили',
    color:'rgb(190,13,187)',
    link: 'third',
    id:3
  }
}

</script>

<template>

  <div class="Wrapper h-screen w-screen relative overflow-hidden">
    <div class="Black  bg-black w-screen h-screen relative opacity-100 z-0">
      <div class="Back bg-cover bg-center h-full w-full absolute opacity-80 -z-10 "></div>

      <div class="Info flex flex-col h-full justify-center ">
      <div class="Carousel hidden m750:flex justify-center items-center h-fit  ease duration-500"
           @touchstart="handleTouchStart($event)"
           @touchmove="handleTouchMove($event)"
           @touchend="handleTouchEnd($event)">
        <MenuCard v-for="CardInfo in MenuCardInfo"
                  :key="MenuCardInfo.id"
                  :title="CardInfo.title"
                  :imageUrl="CardInfo.image"
                  :description="CardInfo.description"
                  :color="CardInfo.color"
                  ></MenuCard>


      </div>



      <div class="Progress-bar hidden m750:flex justify-center gap-5 mt-10 mb-2">
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

        <button class=" w-16 h-16
                      text-2xl text-slate-700 font-bold
                      bg-gray-100 bg-opacity-90
                      rounded-3xl z-10" @click="handleClickNext">></button>
      </div>


      <div class="Blocks m750:hidden  w-full h-full">
        <div class="Blocks w-full h-full flex justify-center items-center gap-10 px-10 ">
        <Blocks v-for="CardInfo in MenuCardInfo"
                :key="MenuCardInfo.id"
                :title="CardInfo.title"
                :imageUrl="CardInfo.image"
                :description="CardInfo.description"
                :color="CardInfo.color"
                :link="CardInfo.link"
                :id="CardInfo.id"></Blocks>
        </div>
      </div>
      </div>
    </div>
    <div class="flex justify-center items-center h-10 w-full  text-lg  font-bold text-slate-100 opacity-70 hover:cursor-pointer bottom-0 absolute"><a href="https://vk.com/crockshine">© Королев Михаил</a></div>

  </div>

</template>

<style scoped>
.Back{
  background-image: url('/images/фон без стола.webp');
}

.Carousel{
  width: 300vw;
}
</style>