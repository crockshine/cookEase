<script setup>
import Card from "./Card.vue";
import { defineProps} from 'vue';

defineProps({
  items:Array
})


</script>

<template>
    <div class="CardList  grid grid-cols-4 m2000:grid-cols-4 m1300:grid-cols-3 m900:grid-cols-2 p-5 gap-5" v-auto-animate >
      <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :image="item.image"
      :title="item.title"
      :time="item.time"
      ></Card>
    </div>


</template>

<style scoped>

</style>