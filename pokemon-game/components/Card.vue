<template>
    <div :style="{ width: `${edge}px`, height: `${edge}px` }" 
    class=" bg-amber-50 ml-[10px] mb-[10px] relative rounded-[2px] transform-3d transition-transfor
    transition-transform duration-800 ease-in-out"
    :class="{'rotate-180':!isFlip, 'hover:cursor-pointer':!isFlip} " @click="HandleClick">
      <div v-if="!isFlip" class="absolute w-full  p-[5px] h-full top-0 left-0">
        <img src="@/assets/images/icon_back.png" alt="">
      </div>
      <div v-if="isFlip" class="absolute w-full p-[5px] h-full top-0 left-0 " >
        <img :src="icon_front" alt="">
      </div>
    </div>
</template>
<script setup>
  import { ref, computed, onMounted, onUnmounted,defineExpose } from "vue";
  const props = defineProps({
    total: Number,
    card_img:Object,
    
  });

  const windowWidth = ref(innerWidth);
  const windowHeight = ref(innerHeight);

  const updateDimensions = () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  };

  const isFlip = ref(false);
  const inprocess = inject('inprocess');
  const icon_front = computed(() => {
    return new URL(`../assets/images/${props.card_img.value}.png`, import.meta.url).href;
  });

  onMounted(() => {
    window.addEventListener("resize", updateDimensions);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateDimensions);
  });

  const edge = computed(() => {
    return Math.floor(
      Math.sqrt(windowWidth.value * 0.7 * windowHeight.value * 0.6 / props.total)
    ) - 5;
  });

  const emit = defineEmits(["card-click"]);
  const HandleClick = ()=> {
    if(!isFlip.value && !inprocess.value){
      isFlip.value = true;
      emit('card-click',props.card_img)
    }
  }
  const closeCard = () => {
    isFlip.value = false
  }
  defineExpose({
    closeCard,
  });
</script>