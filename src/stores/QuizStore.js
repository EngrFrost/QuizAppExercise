import { defineStore } from 'pinia'

export const useQuizStore = defineStore('QuizStore', {
  state: () => ({
    questionsAnswered: 0,
    totalCorrect: 0,
    questions: [
      {
        q: 'What is 2 + 2?',
        answers: [
          {
            text: '4',
            is_correct: true
          },
          {
            text: '3',
            is_correct: false
          },
          {
            text: 'Fish',
            is_correct: false
          },
          {
            text: '5',
            is_correct: false
          }
        ]
      },
      {
        q: 'How many letters are in the word "Banana"?',
        answers: [
          {
            text: '5',
            is_correct: false
          },
          {
            text: '7',
            is_correct: false
          },
          {
            text: '6',
            is_correct: true
          },
          {
            text: '12',
            is_correct: false
          }
        ]
      },
      {
        q: 'Find the missing letter: C_ke',
        answers: [
          {
            text: 'e',
            is_correct: false
          },
          {
            text: 'a',
            is_correct: true
          },
          {
            text: 'i',
            is_correct: false
          }
        ]
      }
    ],
    results: [
      {
        min: 0,
        max: 2,
        title: 'Try again!',
        desc: 'Do a little more studying and you may succeed!'
      },
      {
        min: 3,
        max: 3,
        title: "Wow, you're a genius!",
        desc: 'Studying has definitely paid off for you!'
      }
    ],
    topScorer: [{ name: 'Ian John Samson', score: '100' }]
  }),
  getters: {
    questionaireLength() {
      return this.questions.length
    }
  },
  actions: {
    resetQuestions() {
      this.questionsAnswered = 0
      this.totalCorrect = 0
    },
    totalCorrectAnswer(is_correct) {
      if (is_correct) {
        this.totalCorrect++
      }
      this.questionsAnswered++
    },
    addNewQuestion(form) {
      console.log(form)
      this.questions.push(form)
    },
    addTopScorer(form) {
      this.topScorer.push(form)
    }
  }
})
