<script setup lang="ts">
const props = defineProps<{
  github?: string
  links?: string
}>()

const parsedLinks = computed(() => {
  const result: { title: string; to: string; external: boolean }[] = []

  if (props.links) {
    for (const entry of props.links.split(',')) {
      const [title, to] = entry.split('|').map((s) => s.trim())
      if (title && to) {
        const external = to.startsWith('http')
        result.push({ title, to, external })
      }
    }
  }

  if (props.github) {
    result.push({
      title: 'GitHub',
      to: `https://github.com/${props.github}`,
      external: true
    })
  }

  return result
})
</script>

<template>
  <div
    class="justify-cetner mx-auto flex w-full max-w-3xl flex-wrap items-center gap-2 px-2 md:px-4"
  >
    <NuxtLink
      v-for="link in parsedLinks"
      :to="link.to"
      :external="link.external || false"
      :target="link.external ? '_blank' : '_self'"
      :key="link.title"
      class="font-headline flex grow-1 items-center justify-center bg-zinc-300 px-4 py-2 text-center text-sm text-black duration-200 hover:bg-white"
    >
      {{ link.title }}
    </NuxtLink>
  </div>
</template>
