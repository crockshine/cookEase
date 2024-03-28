<script setup>
import Card from "./Card.vue";
import { defineProps} from 'vue';

defineProps({
  items:Array
})

</script>

<template>
    <div class="CardList grid grid-cols-3 p-5 gap-5">
      <Card
      v-for="item in items"
      :key="item.id"
      :image="item.image"
      :title="item.title"
      :time="item.time"
      ></Card>
    </div>


</template>

<style scoped>

</style>