<script setup lang="ts">
const links = [
  { name: 'home', to: '/' },
  { name: 'paulcross', to: 'https://paulcross.cz', external: true },
  { name: 'github', to: 'https://github.com/crossatko', external: true },
  { name: 'x', to: 'https://twitter.com/crossatko', external: true }
]
</script>

<template>
  <div
    class="mx-auto flex w-full max-w-lg flex-wrap items-center justify-center gap-4 md:gap-8"
  >
    <NuxtLink
      class="font-headline grow-1 text-center text-sm text-white"
      v-for="link in links"
      :key="link.name"
      :to="link.to"
      :external="link.external || false"
      :target="link.external ? '_blank' : '_self'"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>
