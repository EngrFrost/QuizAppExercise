import { createRouter, createWebHistory } from 'vue-router'
import QuizGame from '../views/QuizGame.vue'
import AddQuestion from '../views/AddQuestion.vue'
import TopScorer from '../views/TopScorer.vue'

const routes = [
  {
    path: '/',
    name: 'quizgame',
    component: QuizGame
  },
  {
    path: '/add-question',
    name: 'addquestion',
    component: AddQuestion
  },
  { path: '/top-scorer', name: 'topscorer', component: TopScorer }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'activeclasscustom'
})

export default router
