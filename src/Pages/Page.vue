<script setup>
import CardList from "../components/CardList.vue";
import {ref, onMounted, watch, reactive} from 'vue';
import PageHeader from "../components/Page-header.vue";
import {useRoute} from "vue-router";
import axios from "axios";


const dishData = ref({});
const items = ref([])

const route = useRoute();

const input = ref('')
const select = ref('title')



const filters = reactive({
  sortBy: select,
  searchInput: input
})
async function fetchData(){
  try{
    const params = {
      sortBy:filters.sortBy
    }
  if(filters.searchInput){
    params.title = `*${filters.searchInput}*`
  }
    const dataHead = await axios.get('https://f0c3e4d5d7e51412.mokky.dev/pages')
    const dataItems = await axios.get(`https://f0c3e4d5d7e51412.mokky.dev/${route.params.dish}`,{params})


    dishData.value = dataHead.data.find(item => item.id === route.params.dish);
    items.value =  dataItems.data;
    console.log(items.value);

  }catch (err){
    console.log(err)
  }
}

watch(filters,fetchData)


onMounted(fetchData)
</script>

<template>
    <div class="Wrapper  transition w-screen pt-20 m750:pt-0 relative bg-cover ">
        <div class="Body w-10/12 min-h-screen bg-white  mx-auto m750:mx-0 m750:w-screen rounded-t-2xl  shadow-2xl">


            <PageHeader :headTitle="dishData.headTitle" :imageUrl="dishData.imageUrl"></PageHeader>

            <div class="flex mt-5 px-10 m470:px-5 gap-10 m470:gap-5 justify-center w-full h-16">

              <select v-model="select"  class="w-1/2 px-4 m470:px-0 max-w-96 h-full border-2 border-slate-200 rounded-md text-2xl text-center text-slate-600 outline-0" name="" id="">

                  <option value="title">По названию</option>
                  <option value="time">По времени (меньше)</option>
                  <option value="-time">По времени (больше)</option>
                </select>

              <input v-model="input" class="w-1/2 max-w-96 h-full bg-slate-200 rounded-lg text-center  text-2xl" placeholder="Найти..." type="text" name="" id="">

            </div>

            <CardList :items ="items"></CardList>
            <div v-if="items.length === 0" class="flex pt-20 justify-center items-center h-full w-full text-4xl ">К сожалению, такого блюда нет на сайте</div>

        </div>
    </div>



</template>

<style scoped>


.Wrapper{
  background-color: #f9efe9;

}




</style>