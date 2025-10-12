<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const breakpoints = reactive({
  default: {
    enabled: true,
    value: 0
  },
  xs: {
    enabled: true,
    value: 360
  },
  sm: {
    enabled: true,
    value: 640
  },
  md: {
    enabled: true,
    value: 768
  },
  lg: {
    enabled: true,
    value: 1024
  },
  xl: {
    enabled: true,
    value: 1280
  },
  '2xl': {
    enabled: true,
    value: 1536
  }
})

const slaydoverDemo = useTemplateRef<HTMLIFrameElement | null>('slaydoverDemo')

const activeBreakpoint = ref<keyof typeof breakpoints>('default')

async function handleResize() {
  await nextTick()
  for (const b in breakpoints) {
    if (breakpoints[b as keyof typeof breakpoints].value >= width.value) {
      breakpoints[b as keyof typeof breakpoints].enabled = false
    } else {
      breakpoints[b as keyof typeof breakpoints].enabled = true
    }
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
</script>

<template>
  <div
    class="demo grid max-w-[100svw] grid-cols-2 justify-center gap-2 px-2 md:grid-cols-7 md:px-4"
  >
    <button
      v-for="(breakpoint, b) in breakpoints"
      :key="b"
      class="px-4 py-2 text-base font-bold text-black uppercase duration-200 will-change-[transition,width] hover:bg-zinc-300"
      :disabled="!breakpoint.enabled"
      @click="activeBreakpoint = b"
      :class="{
        'enabled pointer-events-none opacity-20': !breakpoint.enabled,
        'bg-white': activeBreakpoint === b,
        'bg-zinc-600': activeBreakpoint !== b,
        'col-span-2 md:col-span-1': b === 'default'
      }"
    >
      {{ b }}
    </button>

    <div
      class="text-cetner col-span-2 bg-zinc-800 p-4 text-center md:col-span-7"
      v-if="!breakpoints['2xl'].enabled"
    >
      To view full demo, please use a wider screen.
    </div>

    <div class="col-span-2 flex justify-center md:col-span-7">
      <iframe
        src="/slaydover-demo"
        ref="slaydoverDemo"
        frameborder="0"
        class="h-screen max-h-[70vh] min-h-[500px] w-full max-w-full resize-x border-4 border-zinc-600"
        :style="`width: ${
          (breakpoints[activeBreakpoint].value &&
            `${breakpoints[activeBreakpoint].value}px`) ||
          '100%'
        }`"
      ></iframe>
    </div>
  </div>
</template>
