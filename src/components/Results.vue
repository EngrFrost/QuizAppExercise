<template>
  <div class="result">
    <h5>Score {{ quizStore.totalCorrect }} out of {{ quizStore.questionaireLength }}</h5>
    <div class="title">{{ quizStore.results[resultIndex].title }}</div>
    <div class="desc">{{ quizStore.results[resultIndex].desc }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useQuizStore } from '../stores/QuizStore'

const quizStore = useQuizStore()


const resultIndex = computed(() => {
  let index = 0

  quizStore.results.forEach((e, i) => {
    if (e.min <= quizStore.totalCorrect && e.max >= quizStore.totalCorrect) {
      index = i
    }
  })

  return index
})
</script>
