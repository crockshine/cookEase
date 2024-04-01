<script setup>
import {defineProps, ref} from 'vue'
const props = defineProps({
  koef:Number,
  count:Number,
  ingTitle:String,
  postfix:String,
  diff:Number
})





</script>

<template>
      <div class="flex justify-between text-xl">
        <span>{{ ingTitle }}</span>
        <div class="flex-1 border-b-2 border-dotted"></div>
        <span v-if="count">{{ (Number(props.count) + ( ( Number(props.koef)*Number(props.diff) ) - Number(props.koef) )).toFixed(1)}}</span>
        <span class="ml-2">{{ postfix }}</span>
      </div>


</template>

<style scoped>

</style>