<script setup lang="ts">
const props = defineProps<{
  github?: string
}>()
const links = reactive([
  {
    title: 'Installation',
    href: '#installation',
    external: false
  },
  {
    title: 'Example',
    href: '#example',
    external: false
  },
  {
    title: 'Demo',
    href: '#demo',
    external: false
  }
])

if (props.github) {
  links.push({
    title: 'GitHub',
    href: `https://github.com/${props.github}`,
    external: true
  })
}
</script>

<template>
  <div
    class="justify-cetner mx-auto flex w-full max-w-3xl flex-wrap items-center gap-2 px-2 md:px-4"
  >
    <NuxtLink
      v-for="link in links"
      :to="link.href"
      :external="link.external || false"
      :target="link.external ? '_blank' : '_self'"
      :key="link.title"
      class="font-headline flex grow-1 items-center justify-center bg-zinc-300 px-4 py-2 text-center text-sm text-black duration-200 hover:bg-white"
    >
      {{ link.title }}
    </NuxtLink>
  </div>
</template>
