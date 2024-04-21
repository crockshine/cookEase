<script setup>
const props = defineProps({
  title:String,
  imageUrl:String,
  description:String,
  color:String,
  link:String,
  id:Number
})

const AddBgColor = ()=>{
  document.getElementById(`${props.id}`).style.backgroundColor=props.color;
}
const DeleteBgColor = ()=>{
  document.getElementById(`${props.id}`).style.backgroundColor=null;
}
</script>

<template>


    <div class="Block flex-1 h-4/5 bg-cover rounded-2xl shadow-2xl shadow-red-500 overflow-hidden relative"
         :style="{ 'box-shadow': '5px 20px 30px ' + color }">

      <img :src="imageUrl" class="w-full h-full object-cover absolute" alt="bg">

      <div class="Black w-full h-full bg-black rounded-2xl opacity-20 ease duration-500 absolute"></div>

      <div class="Text w-full h-full flex flex-col justify-center items-center text-white">
        <h1 class="H w-full text-6xl m900:text-4xl text-center bg-red-800 shadow-2xl shadow-zinc-950 ease duration-500 absolute"
            :style="{ backgroundColor: color }"><b>{{title}}</b></h1>
        <p class="P p-10 m980:p-5  m1080:text-vw2_5 mh1275:text-vh3 m2000:text-vw2_5 ease duration-500 "><b>{{description}}</b></p>
      </div>

      <router-link :to="{name: 'Page', params:{dish: link}}">
        <div class="Button w-full h-24 m980:h-16  flex justify-center text-white text-xl z-30 absolute  bottom-0 translate-y-28 ease duration-500">

          <button class="ButBg w-3/5  border-2 rounded-xl ease duration-500"
                  @mouseover="AddBgColor" @mouseleave="DeleteBgColor"
                  :style="{ borderColor: color }" :id="id"><b>Выбрать</b>
          </button>

        </div>

      </router-link>

    </div>




</template>

<style scoped>
.Block:hover{
  .H{
    transform: translateY(-25vh);
  }
  .P{
    transform: translateY(2vh);
    opacity: 100%;
  }

  .Black{
    opacity: 60%;
  }

  .Button{
    transform: translateY(-5vh);
  }
}


.P{
  transform: translateY(50vh);
  opacity: 0;
}

</style>