<template>
  <div class="ctr quiz-game">
    <Questions v-if="quizStore.questionsAnswered < quizStore.questionaireLength" />
    <Result v-else />
    <button
      type="button"
      class="reset-btn"
      @click="quizStore.resetQuestions"
      v-if="quizStore.questionsAnswered === quizStore.questionaireLength"
    >
      Reset
    </button>
  </div>

  <!-- Modal -->
  <Modal :visibleModal="visibleModal" @handleOk="handleOkHandler" @handlecancel="handlecancel" />
</template>

<script setup>
import { watch, ref } from 'vue'
import { storeToRefs } from 'pinia'
import Questions from '../components/Questions.vue'
import Result from '../components/Results.vue'
import Modal from '../components/Layout/Modal.vue'
import { useQuizStore } from '../stores/QuizStore'

const quizStore = useQuizStore()
const { questionsAnswered } = storeToRefs(quizStore)
const visibleModal = ref(false)

const handleOkHandler = (name) => {
  const form = { name: name, score: quizStore.totalCorrect }
  console.log(form)
  quizStore.addTopScorer(form)
  visibleModal.value = false
}

const handlecancel = () => {
  console.log(visibleModal.value)
  visibleModal.value = false
}

watch(questionsAnswered, () => {
  if (quizStore.questionsAnswered === quizStore.questionaireLength) {
    visibleModal.value = true
    console.log(visibleModal.value)
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .quiz-game {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
