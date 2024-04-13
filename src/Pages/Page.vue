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

const wasFilters = ref(false)

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
watch(filters,()=>{
  wasFilters.value = true
})

onMounted(fetchData)

const onPage = ref(false)
window.onscroll = () => {
  if (window.scrollY > 500) {
    onPage.value = true
      document.querySelector('.RoundUp').style.position = 'fixed';
      document.querySelector('.RoundUp').style.opacity = 1; // Показываем кнопку
  } else  {
    document.querySelector('.RoundUp').style.opacity = 0;  // Скрываем кнопку
    setTimeout(function (){
      Op.value = false
    },300)
  }
}

function Up(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

</script>

<template>


    <div class="Wrapper  transition w-screen pt-20 m750:pt-0 relative bg-cover ">

        <div class="Body flex flex-col items-center w-10/12 min-h-screen bg-white pb-20  mx-auto m750:mx-0 m750:w-screen rounded-t-2xl relative  shadow-2xl">


            <PageHeader :headTitle="dishData.headTitle" :imageUrl="dishData.imageUrl"></PageHeader>

          <div class="flex w-full h-fit px-10 m470:px-5  mt-5 items-center">
            <div class="flex w-fit justify-center items-center text-2xl opacity-50 hover:opacity-80 hover:cursor-pointer transition absolute m1300:hidden ">
              <router-link to="/menu">
                <-Главная

              </router-link>

            </div>

            <div class="flex-1 flex gap-10 m470:gap-5 justify-center w-full h-16">

              <select v-model="select"  class="w-1/2 px-4 m470:px-0 max-w-96 h-full border-2 border-slate-200 rounded-md text-2xl m470:text-xl text-center text-slate-600 outline-0" name="" id="">

                <option value="title">По названию</option>
                <option value="time">По времени (меньше)</option>
                <option value="-time">По времени (больше)</option>
              </select>

              <input v-model="input" class="w-1/2 max-w-96 h-full bg-slate-200 rounded-lg text-center  text-2xl m470:text-xl" placeholder="Найти..." type="text" name="" id="">

            </div>

          </div>

            <CardList :items ="items"></CardList>
            <div v-if="items.length === 0 && wasFilters" class="flex px-10 pt-20 text-center justify-center items-center h-full w-full text-3xl ">К сожалению, такого блюда нет на сайте</div>
            <div v-if="items.length !== 0 || wasFilters" class="flex absolute bottom-0  justify-center items-center h-10 w-full bg-orange-100 text-xl font-bold text-slate-800 text-opacity-80 hover:cursor-pointer "><a href="https://vk.com/crockshine">© Королев Михаил</a></div>

          <button @click="Up" v-if="onPage" class="RoundUp w-16 h-16
                  bg-amber-500
                  bottom-5 right-2
                  text-2xl text-white font-bold
                  opacity-0 z-20
                  m2000:right-10 min765:w-32 min765:h-32 ">/\</button>

        </div>
    </div>







</template>

<style scoped>


.Wrapper{
  background-color: #f9e3d5;
}
.RoundUp {
  border-radius: 100%;
  transition: opacity 0.3s ease; /* Добавляем плавное изменение прозрачности за 0.3 секунды */
}




</style>