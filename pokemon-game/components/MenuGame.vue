<template>
    <div class="flex justify-center items-center mb-10">
      <h1 class="text-white text-[min(7vw,70px)] mr-5">Pokemon Game</h1>
      <img
        src="@/assets/images/pikachu_icon.png"
        alt=""
        class="w-[min(7vw,70px)] h-[min(7vw,70px)]"
      />
    </div>
    <h2 class="text-yellow-300 mb-10 text-[min(4vw,30px)]">Select level to play</h2>
    <div class="flex items-center justify-center flex-wrap mx-20">
      <div
        v-for="opt in options"
        :key="opt.size"
        class="border-white border-2 rounded-2xl p-4 mr-4 mb-4 w-35 hover:bg-[#333] hover:border-green-500 hover:cursor-pointer"
        @click="handleChooseLevel(opt)"
      >
        <span class="text-white text-[min(5vw,20px)] block">{{
          Math.sqrt(opt.size)}}x{{ Math.sqrt(opt.size) }}</span>
        <span class="text-white text-[min(3vw,15px)] block">{{ opt.level }}</span>
      </div>
    </div>
    <div class="w-full flex justify-center mt-[15px]">
      <Button :label="'Exit'" :click-event="() =>{navigateTo('/')}"/>
    </div>

  </template>
  
  <script setup>
   
  import { reactive, defineEmits } from "vue";
  
  const options = reactive([
    { size: 16, level: "Easy" },
    { size: 36, level: "Normal" },
    { size: 64, level: "Hard" },
    { size: 100, level: "Super Hard" },
  ]);
  
  const emit = defineEmits(["choose-level"]);
  
  const handleChooseLevel = (opt) => {
    emit("choose-level", opt.size);
  };
  </script>