
<template>
    <div class="w-full flex justify-end pr-10 relative h-[80px]">
      <div class="absolute top-0 right-10">
        <Button :label="'Menu'" :click-event="() =>{emit('menu')}"/>
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-center pt-10 pl-10 pr-10">
        <Card v-for="(card, index) in cards" :key="index" :total="props.cards.length" 
        :ref="el => setCardRef(el, index)" :inprocess="inprocess"
        :card_img="{'key':index, 'value':card}" @card-click="HandleCardClick"/>
    </div>
</template>

<script setup>
const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
let try_t=0;
let rules = [];
const cardRefs = ref({});
let count = 0;
const inprocess = ref(false)
provide('inprocess', inprocess);
const setCardRef = (el, index) => {
  if (el) {
    cardRefs.value[index] = el;
  }
};
const emit = defineEmits(["finish","menu"]);
const HandleCardClick = (card) =>  {
  if(rules.length === 2){
    return false
  }
  rules.push(card)
  if (rules.length ===2){
    inprocess.value = true;
    if(rules[0].value != rules[1].value){
      setTimeout(() => {
        cardRefs.value[rules[0].key].closeCard()
        cardRefs.value[rules[1].key].closeCard()
        rules = []
        inprocess.value = false
        try_t +=1
      },800)
    }
    else if (rules[0].value === rules[1].value){
      rules = []
      count+=2
      inprocess.value = false
      if(count==props.cards.length){
        setTimeout(() => {
          emit('finish',try_t)
        },800)
      }
    }
  }
}

</script>