<script setup>
import {ref, onMounted} from "vue"
import {useRoute} from "vue-router";
import axios from "axios";
import Recipes from "../components/Recipes.vue";


const recipeData = ref({});

const route = useRoute();

onMounted(async ()=>{
  try{
    const dataItem = await axios.get(`https://f0c3e4d5d7e51412.mokky.dev/${route.params.dish}?id=${route.params.recipes}`)
    recipeData.value = dataItem.data[0];
    console.log( recipeData.value.recept);
  }catch (err){
    console.log(err)
  }
})

const diff = ref(4);

const countDiffMinus = () => {
    if (diff.value > 1) {
      diff.value--
    } else {
      return 0;
    }
};
const countDiffPlus = () =>{
  diff.value++
}

const checkInput = () =>{
  if(diff.value<0){
    diff.value =1;
  }
}

</script>

<template>
  <div class="Wrapper w-screen pt-20 relative bg-cover m750:pt-0 ">
    <div class="Body flex flex-col w-10/12 m750:w-screen min-h-screen bg-white  mx-auto m750:mx-0 m750:rounded-t-none rounded-t-2xl shadow-2xl relative">

      <div class="flex m980:flex-col pt-10 px-10 w-full">
        <div class="Left flex flex-1  justify-center items-center">
          <img class=" items-center rounded-2xl" :src=recipeData.image alt="">
        </div>

        <div class="Right ml-20 m1080:ml-8 m980:ml-0 px-10 m470:px-0 flex-1 flex flex-col">
          <h1 class="text-center m980:mt-3 text-5xl m350:text-4xl font-bold opacity-90">{{recipeData.title}}</h1>
          <h2 class="text-center m980:mb-3 mt-2 text-2xl m350:text-xl  opacity-90">Ингридиенты:</h2>

          <div class="Counter flex-1 flex flex-col justify-center px-10 m980:px-0">
            <ul class="w-full h-fit  ">
              <li v-for="ingredient in recipeData.ingredients"
                  :key="recipeData.ingredients.number">
                <Recipes :koef="ingredient.koef"
                         :count="ingredient.count"
                         :ingTitle="ingredient.ingTitle"
                         :postfix="ingredient.postfix"
                         :diff="diff"></Recipes>
              </li>
            </ul>
            <h1 class="text-center text-2xl m350:text-xl mt-20 m1500:mt-10 m1300:mt-2 mb-3">Порций:</h1>

            <div class="Buttons flex items-center justify-center gap-3 w-full  ">
              <button @click="countDiffMinus" value="minus" class="w-1/3  h-14 m1080:h-10 bg-blue-100 rounded-l-xl">(-)</button>
              <input v-model="diff" type="number" @input="checkInput" class="w-1/6 h-16 m1080:h-10  bg-blue-100  border-2 border-slate-300 text-center text-xl ">
              <button @click="countDiffPlus" value="plus" class="w-1/3  h-14 m1080:h-10 bg-blue-100 rounded-r-xl">(+)</button>
            </div>
          </div>

        </div>

      </div>
      <h2 class="text-center mt-10 text-4xl m350:text-3xl font-bold opacity-90">Как готовить:</h2>
      <div class="flex flex-1  px-10 m350:px-5 w-full ">
        <ul class="flex flex-col ml-10 w-full">
          <li class="list-disc my-4 text-2xl m470:text-xl" v-for="step in recipeData.recept"
              :key="recipeData.recept.id">{{step.text}}</li>
        </ul>
      </div>





    </div>
  </div>



</template>

<style scoped>


.Wrapper{
  background-image: url('/images/фон без стола.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

}



</style>