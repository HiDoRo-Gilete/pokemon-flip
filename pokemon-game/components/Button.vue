<template>
    <p class="text-[min(4vw,2rem)] text-white bg-orange-500 p-[10px] rounded-[4px]
        block w-[140px] mr-[10px] mt-[10px] cursor-pointer hover:bg-orange-400"
        @click="clickEvent">{{ label }}</p>
</template>

<script setup>
    const props = defineProps({
        clickEvent: {
            type: Function,
            required: true,
        },
        label: String,
    });

</script>