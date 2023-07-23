<script setup>
import { ref } from 'vue'
import convertDisplayTime from '~/utils/convertDisplayTime'

const currentTime = new Date()
const convertedTime = convertDisplayTime(currentTime)
const time = ref(convertedTime)
</script>

<template>
  <header class="mb-6">
    <h1 class="font-bold text-center underline">My First Vue Clock</h1>
  </header>
  <main class="flex flex-col items-center justify-center w-full h-screen text-lg text-white bg-blue-600">
    <div class="text-3xl font-bold">{{ time }}</div>
    <p>This is my custom message!</p>
  </main>
  <footer class="mt-6">
    <p class="text-base font-light text-center ">Created by Dakota Schramm</p>
  </footer>
</template>
