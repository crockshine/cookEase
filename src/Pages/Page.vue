<script setup>
import CardList from "../components/CardList.vue";
import { ref,onMounted } from 'vue';
import PageHeader from "../components/Page-header.vue";
import {useRoute} from "vue-router";
import axios from "axios";


const dishData = ref({});
const items = ref([])

const route = useRoute();

onMounted(async ()=>{
  try{
    const dataHead = await axios.get('https://f0c3e4d5d7e51412.mokky.dev/pages')
    const dataItems = await axios.get(`https://f0c3e4d5d7e51412.mokky.dev/${route.params.dish}`)
    dishData.value = dataHead.data.find(item => item.id === route.params.dish);
    items.value =  dataItems.data;

  }catch (err){
    console.log(err)
  }
})
</script>

<template>
    <div class="Wrapper w-screen pt-20 relative bg-cover ">
        <div class="Body w-10/12 min-h-screen bg-white  mx-auto rounded-t-2xl shadow-2xl">


            <PageHeader :headTitle="dishData.headTitle" :imageUrl="dishData.imageUrl"></PageHeader>
            <CardList :items ="items"></CardList>


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