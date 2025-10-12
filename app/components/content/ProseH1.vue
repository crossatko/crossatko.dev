<script setup lang="ts">
const heading = ref<HTMLHeadingElement | null>(null)
const fontSize = ref(16) // Initial font size in pixels

const adjustFontSize = () => {
  if (!heading.value) return

  const containerWidth = heading.value.clientWidth * 0.98 // Target 90% of container width to prevent clipping
  const text = heading.value.textContent?.trim()
  if (!text) return

  // Create a temporary span to measure text width
  const tempSpan = document.createElement('span')
  tempSpan.style.fontFamily = getComputedStyle(heading.value).fontFamily
  tempSpan.style.fontWeight = getComputedStyle(heading.value).fontWeight
  tempSpan.style.position = 'absolute'
  tempSpan.style.visibility = 'hidden'
  tempSpan.textContent = text
  document.body.appendChild(tempSpan)

  // Binary search for optimal font size
  let minSize = 10
  let maxSize = 500
  let optimalSize = minSize

  while (minSize <= maxSize) {
    const midSize = Math.floor((minSize + maxSize) / 2)
    tempSpan.style.fontSize = `${midSize}px`
    const textWidth = tempSpan.getBoundingClientRect().width

    if (Math.abs(textWidth - containerWidth) < 5) {
      optimalSize = midSize
      break
    } else if (textWidth < containerWidth) {
      minSize = midSize + 1
      optimalSize = midSize
    } else {
      maxSize = midSize - 1
    }
  }

  fontSize.value = optimalSize
  document.body.removeChild(tempSpan)
}

// Adjust font size on mount and window resize
onMounted(() => {
  adjustFontSize()
  window.addEventListener('resize', adjustFontSize)
})

// Clean up event listener on unmount
onUnmounted(() => {
  window.removeEventListener('resize', adjustFontSize)
})
</script>

<template>
  <h1
    ref="heading"
    class="font-headline w-full text-center will-change-[font-size]"
    :style="{ fontSize: `${fontSize}px` }"
  >
    <slot></slot>
  </h1>
</template>
