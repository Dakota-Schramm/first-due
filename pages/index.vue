<script setup>
import { reactive, watch, onMounted } from 'vue'
import convertDisplayTime from '~/utils/convertDisplayTime'

const ONE_SECOND = 1000

const addSecondsToTime = (date, seconds) => {
  return new Date(date.getTime() + seconds)
}

// const now = new Date()
// const desiredTime = addSecondsToTime(now, 15)

// const countDownTime = desiredTime.getTime() - now.getTime()

const state = reactive([
  { time: 15, message: 'NUMBAH ONE' },
  { time: 15, message: 'Number two :^)' }
])

watch(state, () => {
  if (state.length < 0) return;

  const time = state[0].time;
  if (0 <= time) incrementTime()
  else if (time === -1) state.shift()
  else console.log('No more messages to display.')
}, { immediate: true })


function incrementTime() {
  const timerIsActive =  -1 <= state[0].time;
  if (timerIsActive) setTimeout(() => { state[0].time-- }, ONE_SECOND);
}

</script>

<template>
  <header class="mb-6">
    <h1 class="font-bold text-center underline">My First Vue Clock</h1>
  </header>
  <main class="flex flex-col items-center justify-center w-full h-screen text-lg text-white bg-blue-600">
    <div class="text-3xl font-bold">
      {{ convertDisplayTime(state[0].time) }}
    </div>
    <p>
      {{ state[0].message }}
    </p>
  </main>
  <footer class="mt-6">
    <p class="text-base font-light text-center ">Created by Dakota Schramm</p>
  </footer>
</template>
