<template>
  <div class="AddQuestion ctr">
    <a-typography-title :justify="center" :align="center" :level="2"
      >Add New Question</a-typography-title
    >
    <a-form
      :model="formState"
      name="basic"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <!-- Question  -->

      <a-form-item
        label="Question"
        name="question"
        :rules="[{ required: true, message: 'Please input Question!' }]"
      >
        <a-input v-model:value="formState.question" />
      </a-form-item>
      <!-- Answer 1 -->
      <a-row>
        <a-col :span="20">
          <a-form-item
            label="Answer1"
            name="answer1"
            :rules="[{ required: true, message: 'Please input Answer 1!' }]"
          >
            <a-input v-model:value="formState.answer1" /> </a-form-item
        ></a-col>
        <a-col :span="4">
          <a-form-item name="answer1Correct" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.answer1Correct">Correct Answer</a-checkbox>
          </a-form-item></a-col
        >
      </a-row>
      <!-- Answer 2 -->
      <a-row>
        <a-col :span="20">
          <a-form-item
            label="Answer 2"
            name="answer2"
            :rules="[{ required: true, message: 'Please input Answer 2!' }]"
          >
            <a-input v-model:value="formState.answer2" /> </a-form-item
        ></a-col>
        <a-col :span="4">
          <a-form-item name="answer2Correct" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.answer2Correct">Correct Answer</a-checkbox>
          </a-form-item></a-col
        >
      </a-row>
      <!-- Answer 3 -->
      <a-row>
        <a-col :span="20">
          <a-form-item
            label="Answer 3"
            name="answer3"
            :rules="[{ required: true, message: 'Please input Answer 3!' }]"
          >
            <a-input v-model:value="formState.answer3" /> </a-form-item
        ></a-col>
        <a-col :span="4">
          <a-form-item name="answer3Correct" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.answer3Correct">Correct Answer</a-checkbox>
          </a-form-item></a-col
        >
      </a-row>

      <!-- Answer 4 -->
      <a-row>
        <a-col :span="20">
          <a-form-item
            label="Answer 4"
            name="answer4"
            :rules="[{ required: true, message: 'Please input Answer 4!' }]"
          >
            <a-input v-model:value="formState.answer4" /> </a-form-item
        ></a-col>
        <a-col :span="4">
          <a-form-item name="answer4Correct" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.answer4Correct">Correct Answer</a-checkbox>
          </a-form-item></a-col
        >
      </a-row>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useQuizStore } from '../stores/QuizStore'
import { message } from 'ant-design-vue'

const quizStore = useQuizStore()
const initialformState = () => ({
  question: '',
  answer1: '',
  answer2: '',
  answer3: '',
  answer4: '',
  answer1Correct: false,
  answer2Correct: false,
  answer3Correct: false,
  answer4Correct: false
})

const formState = reactive(initialformState())
const resetUserForm = () => Object.assign(formState, initialformState())

const onFinish = (values) => {
  const form = {
    q: values.question,
    answers: [
      { text: values.answer1, is_correct: values.answer1Correct },
      { text: values.answer2, is_correct: values.answer2Correct },
      { text: values.answer3, is_correct: values.answer3Correct },
      { text: values.answer4, is_correct: values.answer4Correct }
    ]
  }

  quizStore.addNewQuestion(form)
  resetUserForm()
  message.success('Question is Added')
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
</script>
<style>
@media (min-width: 1024px) {
  .AddQuestion {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
