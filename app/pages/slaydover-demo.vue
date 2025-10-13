<script setup lang="ts">
import { ref } from 'vue'
import Slaydover from '@crossatko/slaydover'
import '@crossatko/slaydover/dist/slaydover.css'

definePageMeta({
  title: 'slaydover demo',
  layout: 'empty'
})

const open = ref(false)
</script>

<template>
  <div
    class="flex h-screen max-h-[100svh] w-full items-center justify-center bg-zinc-950 text-black"
  >
    <button
      @click="open = true"
      class="font-headline bg-zinc-100 p-6 text-base duration-100 hover:bg-white sm:px-8 sm:text-xl"
    >
      show slaydover
    </button>

    <Slaydover v-model="open" position="bottom sm:top lg:right" :speed="300">
      <div
        class="mx-auto flex max-w-xl flex-col gap-8 bg-white p-8 text-black lg:p-16"
      >
        <h2 class="font-headline text-2xl">slaydover content</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident
          quas similique ducimus illo rerum consequuntur, at cumque dicta
          voluptatem nesciunt quos, numquam eveniet? Debitis vitae eligendi
          illum repudiandae earum.
        </p>

        <button
          type="button"
          @click="open = false"
          class="font-headline bg-zinc-950 p-3 text-white duration-200 hover:bg-black sm:px-8"
        >
          close
        </button>
      </div>
    </Slaydover>
  </div>
</template>
