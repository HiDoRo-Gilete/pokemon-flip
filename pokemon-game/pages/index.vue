<template>
    <div class="w-[100vw] h-[100vh] bg-black text-center content-center relative">
        <h1 class="text-yellow-300 text-[min(6vw,3.2rem)] mb-[20px] mx-[20px]">Welcom to Home Page</h1>
        <h3 class="text-white text-[min(5vw,2rem)] mb-[20px] mx-[20px]">This is a practice exercise for Nuxt3 and Vue3</h3>
        <h3 class="text-white text-[min(5vw,2rem)] mb-[20px] mx-[20px]">Are you ready?</h3>
        <div class="w-full flex items-center justify-center">
            <Button :click-event="start" :label="label"/>
        </div>
    </div>
</template>



<script setup>
    const label = ref('Yes')
    const start = ()=>{
        if (label.value === 'Play'){
            navigateTo('/game')
            setTimeout(() => {
                label.value='Yes';
            }, 2000);
        }
        else{
            label.value ="Play"
        }
    }
</script>