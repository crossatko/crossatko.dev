<script setup lang="ts">
const route = useRoute()
const { data: page, error } = await useAsyncData(
  `page:${route.params.page}`,
  () => {
    return queryCollection('pages').path(`/pages/${route.params.page}`).first()
  }
)

if (error.value || !page.value) {
  throw createError(
    error.value || { statusCode: 404, statusMessage: 'Page not found' }
  )
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    class="mx-auto grid w-full max-w-[100svw] gap-y-4 text-base md:gap-y-8 md:text-lg [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:bg-zinc-900 [&_pre]:p-4 [&>*:not(.demo,h1)]:mx-auto [&>*:not(.demo,h1)]:w-full [&>*:not(.demo,h1)]:max-w-3xl [&>*:not(h1)]:px-4"
  />
</template>
