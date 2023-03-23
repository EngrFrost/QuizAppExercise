<template>
  <a-layout>
    <Sidebar :collapsed="collapsed" @selectedKeyHandler="selectedKeyHandler" />
    <a-layout>
      <a-layout-header
        style="background-image: url(/assets/img/header.png); text-align: center; color: white"
      >
        <h1 style="color: white; font-size: 20px">You can Learn Here!</h1>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Layout/Sidebar.vue'

const collapsed = ref(false)

</script>
