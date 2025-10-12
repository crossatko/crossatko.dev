<script setup lang="ts">
import type { NuxtError } from '#app'
import ContentProseH1 from '~/components/content/ProseH1.vue'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex flex-col items-center justify-start py-[4vw]">
    <ContentProseH1 fontSize="22vw">{{ error?.statusCode }}</ContentProseH1>

    <button
      @click="handleError"
      class="font-headline inline-flex bg-zinc-300 px-8 py-6 text-black duration-200 focus-within:ring-4 focus-within:ring-zinc-400 hover:bg-white"
    >
      Go back home
    </button>
  </div>
</template>
