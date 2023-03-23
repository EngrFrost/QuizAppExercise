<template>
  <div>
    <a-modal
      v-model:visible="visibleModal"
      @ok="okHandler"
      @cancel="cancelHandler"
      :closable="false"
    >
      <h5>Input Your Name!</h5>
      <a-input v-model:value="name" />
    </a-modal>
  </div>
</template>

<script setup>
import { defineProps, toRefs, defineEmits, ref } from 'vue'
const emits = defineEmits(['handleOk', 'handlecancel'])
const props = defineProps(['visibleModal'])
const { visibleModal } = toRefs(props)

const nameChange = ref('name')
const okHandler = () => {
  emits('handleOk', nameChange)
}
const cancelHandler = () => {
  emits('handlecancel')
}
</script>
