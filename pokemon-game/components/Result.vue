<template>
    <h1 class="text-yellow-300 text-[min(6vw,3.2rem)] mb-[20px]">✨✨ Congratulations ✨✨</h1>
    <h3 class="text-white text-[min(5vw,2rem)]">time: {{ time }}s</h3>
    <h3 class="text-white text-[min(5vw,2rem)]">number of attempts: {{ tryTimes }}</h3>
    <div class="flex justify-center items-center mt-[30px] flex-wrap">
        <Button :click-event="menu" :label="'Menu'"/>>
        <Button :click-event="exit" :label="'Exit'"/>
        <Button :click-event="again" :label="'Again'"/>
    </div>
</template>

<script setup>
    const props = defineProps({
    time: Number,
    tryTimes:Number,
  });

  const exit =() =>{
    navigateTo('/')
  }
  const emit = defineEmits(["go-to-menu","again"]);
  const menu = ()=>{
    emit("go-to-menu",);
  }
  const again = ()=>{
    emit("again")
  }
</script>