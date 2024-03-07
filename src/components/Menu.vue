<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const width = ref(0);
const viewBlock = ref(true);

onMounted(function (){
  width.value = document.querySelector('.card').offsetWidth;
  if(width.value < 450){
    viewBlock.value = false;
    if(width.value > 450){
      viewBlock.value = false;
    }
  }
})
onBeforeUnmount(function (){
  window.removeEventListener('resize', updateWidth);
})
function updateWidth(){
  width.value = document.querySelector('.card').offsetWidth;
  if(width.value < 450){
    viewBlock.value = false;
    if(width.value > 450){
      viewBlock.value = false;
    }
  }
  console.log(width.value)
}
addEventListener('resize',updateWidth);






</script>

<template>
  <div class="menu">
    <div class="menu-text">Меню</div>
    <div class="table"></div>

    <div class="menu-card">
      <div class="card first" ref="card">1</div>
      <div class="card second" v-if="viewBlock">2</div>
      <div class="card third" v-if="viewBlock">3</div>
    </div>



  </div>

</template>

<style scoped>

.menu {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.table {
  background-image: url("/public/images/низ стола.png");
  width: 100%;
  height: 100%;
  background-size: 100vw 40vh;
  background-repeat: no-repeat;
  opacity: 95%;
  position: relative;
}

.menu-text {
  display: flex;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10vw;

  border: 1px solid black;
  border-radius: 20%;
}

.menu-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: repeat(auto-fill, 1fr); /* Деление высоты контейнера .menu на 3 строки */
  grid-gap: 20px;
  position: absolute;
  padding-left: 4vw;
  padding-right: 4vw;
  width: 100vw;
  height: 80%;
  top: 10vh;
  justify-content: center;
  grid-auto-flow: row;
}


.card{

  border: 1px solid black;
  border-radius: 5%;


}



</style>