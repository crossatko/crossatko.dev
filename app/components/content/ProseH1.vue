<script setup lang="ts">
defineProps<{
  fontSize: string
}>()
</script>

<template>
  <h1
    ref="heading"
    class="font-headline w-full text-center will-change-[font-size]"
    :style="{ fontSize }"
  >
    <slot></slot>
  </h1>
</template>
