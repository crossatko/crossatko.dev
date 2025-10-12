<script setup lang="ts">
import ContentProseH1 from '~/components/content/ProseH1.vue'
</script>
<template>
  <div class="flex min-h-screen flex-col py-[4vw]">
    <ContentProseH1>crossatko.dev</ContentProseH1>

    <div
      class="relative grid w-full grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        class="absolute inset-0 bg-radial-[at_30%_50%] from-white/50 via-white/40 to-white/0"
      ></div>
      <NuxtLink
        to="slaydover"
        class="relative z-2 flex aspect-16/10 items-center justify-center bg-black/90 duration-200 hover:bg-black"
      >
        <h2
          class="font-headline text-4xl text-[6vw] text-white sm:text-[3vw] md:text-[2vw]"
        >
          slaydover
        </h2>
      </NuxtLink>
      <div
        v-for="i in 5"
        class="font-headline relative z-2 flex aspect-16/10 items-center justify-center bg-black/90 text-white/20"
      >
        coming soon
      </div>
    </div>
  </div>
</template>
