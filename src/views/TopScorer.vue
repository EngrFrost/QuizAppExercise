<template>
  <div class="quiz-games">
    <h5>Top Scorer</h5>
    <TableScorer :columns="columns" :data="data" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useQuizStore } from '../stores/QuizStore'
import TableScorer from '../components/TableScorer.vue'

const quizStore = useQuizStore()
const { topScorer } = storeToRefs(quizStore)
const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score'
  }
]

const data = topScorer
</script>

<style>
@media (min-width: 1024px) {
  .quiz-games {
    min-height: 100vh;
  }
}
</style>
