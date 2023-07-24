<script setup>
import { reactive, watch, onMounted } from 'vue'
import convertDisplayTime from '~/utils/convertDisplayTime'

const ONE_SECOND = 1000

const addSecondsToTime = (date, seconds) => {
  return new Date(date.getTime() + seconds)
}

const now = new Date()
const desiredTime = addSecondsToTime(now, 15)

const countDownTime = desiredTime.getTime() - now.getTime()

const state = reactive({
  time: countDownTime,
  message: 'This is my custom message!'
})

watch(state, () => {
  if (state.time !== 0) incrementTime()
}, { immediate: true })

function incrementTime() {
  if (state.time > 0) setTimeout(() => { state.time-- }, ONE_SECOND);
  else clearInterval(interval)
}

</script>

<template>
  <header class="mb-6">
    <h1 class="font-bold text-center underline">My First Vue Clock</h1>
  </header>
  <main class="flex flex-col items-center justify-center w-full h-screen text-lg text-white bg-blue-600">
    <div class="text-3xl font-bold">
      {{ convertDisplayTime(state.time) }}
    </div>
    <p>
      {{ state.message }}
    </p>
  </main>
  <footer class="mt-6">
    <p class="text-base font-light text-center ">Created by Dakota Schramm</p>
  </footer>
</template>
