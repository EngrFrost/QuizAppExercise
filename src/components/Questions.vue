<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(quizStore.questionsAnswered / quizStore.questionaireLength) * 100}%` }"
      ></div>
      <div class="status">
        {{ quizStore.questionsAnswered + 1 }} out of {{ quizStore.questionaireLength }} questions
        answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="(question, qi) in quizStore.questions"
      :key="question.q"
      v-show="quizStore.questionsAnswered === qi"
    >
      <div class="question">{{ question.q }}</div>
      <div class="answers">
        <div
          class="answer"
          v-for="answer in question.answers"
          :key="answer.text"
          @click.prevent="quizStore.totalCorrectAnswer(answer.is_correct)"
        >
          {{ answer.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from '../stores/QuizStore'

const quizStore = useQuizStore()
</script>
