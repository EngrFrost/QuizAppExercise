<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable no-unused-vars -->
<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="sider-color">
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline" class="sider-color">
      <a-menu-item key="1">
        <user-outlined />
        <router-link class="link" :to="{ name: 'quizgame' }">Quiz</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <router-link class="link" :to="{ name: 'addquestion' }">Add Quiz</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <router-link class="link" :to="{ name: 'topscorer' }">Profile</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { watch, defineProps, toRefs, ref } from 'vue'
const props = defineProps(['collapsed', 'selectedKeys'])
const { collapsed } = toRefs(props)

const selectedKeys = ref(['1'])

watch(selectedKeys, (watch) => {
  selectedKeys.value = watch
})
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.sider-color {
  background-color: #7c5ac2 !important;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
.ant-menu-item-selected a,
.ant-menu-item-selected a:hover,
.activeclasscustom {
  color: #1890ff !important ;
}

.link {
  color: white !important;
}
</style>
