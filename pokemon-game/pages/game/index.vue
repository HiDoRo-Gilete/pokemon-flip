
<template>
    <div class="bg-black pb-20">
        <NuxtLayout :name="config.layout">
            <MenuGame v-if="config.phase == 'Menu'" @choose-level="chooseLevel"/>
            <Playing v-if="config.phase == 'Playing'" :cards = "config.cardArray" @finish="HandleFinish" @menu="() =>{config.phase='Menu'; alert(1)}"/>
            <Result v-if="config.phase =='Result'" :time="time" :try-times="try_times" @go-to-menu="goToMenu" @again="playAgain"/>
        </NuxtLayout>

        <div class="">
            <Footer/>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    const config = reactive({
        phase: 'Menu',
        size: 0,
        layout: 'game',
        cardArray : [],
        timestart : new Date().getTime(),
    });
    const sufferArray = (oldarray)=>{
        const newArray = [...oldarray]; // Create a copy

        for (let i = oldarray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }

    return newArray;
    }
    const chooseLevel = (size) => {
        config.size = size;
        let cards_1 = Array.from({length: size/2}, (_, index) => index+1);
        console.log(cards_1)
        let cards_2 = [... cards_1];
        config.cardArray= sufferArray(sufferArray(sufferArray(sufferArray([...cards_1, ...cards_2]))))
        config.phase = 'Playing';
        config.timestart = new Date().getTime()
    };

    let time = 0;
    let try_times = 0;
    const HandleFinish =(try_t) =>{
        console.log(try_t)
        try_times = try_t
        time = Math.round((new Date().getTime() - config.timestart)/1000)
        config.phase = 'Result'
    }
    const goToMenu = () =>{
        config.phase='Menu'
    }
    const playAgain =()=>{
        chooseLevel(config.size)
    }
</script>