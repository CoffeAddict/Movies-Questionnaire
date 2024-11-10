<template>
    <div class="flex flex-col justify-center items-center">
        <div class="bg-white mb-8 flex flex-col text-custom-cyan font-bold text-lg py-5 px-8 uppercase rounded-lg" v-if="currentQuestion <= questionnaire.length">
            <h2 class="mb-[13px]">
                Question {{ currentQuestion }} of {{ questionnaire.length }}:
            </h2>
            <ul class="flex items-center justify-center gap-[21px]">
                <li
                    class="border-custom-cyan border-[1.5px] rounded-full w-[18px] h-[18px]"
                    v-for="q in questionnaire"
                    :key="q.id"
                    :class="{
                        'bg-custom-cyan': q.id == currentQuestion,
                    }"
                    ></li>
            </ul>
        </div>
        <div
            v-if="!questionnaireDone"
            class="relative w-[608px] h-[291px] max-w-full">
            <div
                class="absolute transition-all duration-500 ease-in-out left-0 w-full h-full"
                v-for="q in questionnaire"
                :key="q.id"
                :class="{
                    'opacity-100': q.id === currentQuestion,
                    'opacity-0': q.id !== currentQuestion,
                }">
                <h3 class="text-center mb-8 text-white font-bold text-[34px]">{{ q.question }}</h3>
                <ul class="flex gap-10">
                    <li
                        v-for="option in q.options"
                        :key="option.id"
                        @click="currentQuestion = option.nextQuestion"
                        class="relative hover:cursor-pointer rounded-[10px] overflow-hidden after:content-[''] after:absolute after:opacity-0 hover:after:opacity-100 after:top-0 after:left-0 after:w-[200px] after:h-[291px] after:rounded-[10px] after:transition-all after:duration-500 after:ease-in-out after:z-10 after:bg-gradient-to-b after:from-white/40 after:to-transparent">
                        <img
                            width="200"
                            height="291"
                            loading="lazy"
                            :src="option.image"
                            :alt="option.alt">
                    </li>
                </ul>
            </div>
        </div>
        <div
            v-if="questionnaireDone"
            class="bg-custom-cyan rounded-[10px] p-[10px] mt-[68px]">
            <div class="flex flex-col bg-white p-8 p-[50px] text-center">
                <h2 class="text-custom-cyan font-bold uppercase mb-[38px] text-[32px]">Watch new movies for free!</h2>
                <p class="text-2xl mb-[26px]">Watch any movies online for free without ads!</p>
                <p class="text-2xl mb-[21px]">Have fun watching your favourite movies!</p>
                <a href="/" class="rounded bg-custom-orange text-white p-[23px] font-bold uppercase text-[32px] shadow-custom-shadow hover:transition-all duration-200 hover:bg-custom-orange-alt text-shadow-custom-shadow">WATCH Here!</a>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { getQuestionnaire } from '../services/service'

export default {
    name: 'Questionnaire',
    setup() {
        const questionnaire = ref([])
        const currentQuestion = ref(1)
        const questionnaireDone = computed(() => currentQuestion.value > questionnaire.value.length)

        getQuestionnaire().then((data) => {
            questionnaire.value = data.questions
            console.log(questionnaire.value)
        })

        return { questionnaire, currentQuestion, questionnaireDone }
    },
}
</script>