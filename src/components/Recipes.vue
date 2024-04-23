<script setup>
import {defineProps, watch, ref, onMounted} from 'vue'
const props = defineProps({
  koef:Number,
  count:Number,
  ingTitle:String,
  postfix:String,
  diff:Number
})

const IngValue = ref( props.count + (props.koef * props.diff - props.koef) )
const Round = ref(false)

watch(() => props.diff, () => {
  IngValue.value = (props.count + (props.koef * props.diff - props.koef)) ;
  IngValue.value >= 1000 ? Round.value = true : Round.value = false
});
onMounted(() => {
  IngValue.value = (props.count + (props.koef * props.diff - props.koef)) ;
  IngValue.value >= 1000 ? Round.value = true : Round.value = false
});

</script>

<template>
      <div class="flex justify-between text-2xl m1300:text-xl m1080:text-xl">
        <span>{{ ingTitle }}</span>
        <div class="flex-1 border-b-2 border-dotted"></div>
        <span v-if="count">{{ Round ? (Math.round(IngValue / 100 * 10) / 100) : (Math.round(IngValue * 10) / 10)   }}</span>
        <span class="ml-2">{{ Round ? postfix==='г.'?'кг.':'л.' : postfix }}</span>
      </div>


</template>

<style scoped>

</style>