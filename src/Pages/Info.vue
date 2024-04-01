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
    console.log( recipeData.value.ingredients);
  }catch (err){
    console.log(err)
  }
})

const diff = ref(4);

function countDiff(event) {
  if (event.target._value === "minus") {
    if (diff.value > 1) {
      diff.value--
    } else {
      return 0;
    }
  } else if (event.target._value === "plus") {
    diff.value++
  } else {
    if(event.target.value <0||isNaN(diff.value)){
      alert('Введи положительное число')
      diff.value = 1;
    }else{
      diff.value = event.target.value
    }
  }
}

</script>

<template>
  <div class="Wrapper w-screen pt-20 relative bg-cover ">
    <div class="Body w-10/12 min-h-screen bg-white  mx-auto rounded-t-2xl shadow-2xl relative">

      <div class="flex pt-10 w-full h-4/5  ">
        <div class="Left flex flex-1  px-10 justify-center items-center">
          <img class=" items-center   rounded-2xl" :src=recipeData.image alt="">
        </div>

        <div class="Right px-10 flex-1 flex flex-col">
          <h1 class="text-center text-5xl font-bold opacity-90">{{recipeData.title}}</h1>
          <h2 class="text-center mt-2 text-2xl  opacity-90">Ингридиенты:</h2>

          <div class="Counter flex-1 flex flex-col px-10">
            <ul class="w-full h-fit ">
              <li v-for="ingredient in recipeData.ingredients"
                  :key="recipeData.ingredients.number">
                <Recipes :koef="ingredient.koef"
                         :count="ingredient.count"
                         :ingTitle="ingredient.ingTitle"
                         :postfix="ingredient.postfix"
                         :diff="diff"></Recipes>
              </li>
            </ul>
            <h1 class="text-center text-xl my-5">Порций</h1>

            <div class="Buttons flex items-center justify-center gap-5 w-full h-full">
              <button @click="countDiff" value="minus" class="w-16 h-14 bg-blue-100 rounded-l-xl">(-)</button>
              <input @input="countDiff" type="text" :value="diff" class="w-1/6 h-16 bg-blue-100 border-2 border-slate-300 text-center text-xl rounded-lg">
              <button @click="countDiff" value="plus" class="w-16 h-14 bg-blue-100 rounded-r-xl">(+)</button>
            </div>
          </div>

        </div>

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