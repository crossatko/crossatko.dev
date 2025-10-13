---
title: 'Slaydover - Responsive SlideOver Component for Vue & Nuxt'
description: 'A lightweight, swipeable slide-over component for Vue and Nuxt, perfect for modals, drawers, and overlays with responsive positioning and smooth gestures.'
---

::prose-h1{fontSize="8.7vw"}
slaydover
::

::links{github="crossatko/slaydover"}

::

## Responsive SlideOver Component for Vue & Nuxt

A lightweight, swipeable slide-over component for Vue and Nuxt, perfect for modals, drawers, and overlays with responsive positioning and smooth gestures.

### Installation

```bash
npm install @crossatko/slaydover
```

### Props

| Prop        | Type                  | Default                                                                          | Description                                                                    |
| ----------- | --------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| v-model     | boolean               | false                                                                            | Toggles the slide-over open/closed state.                                      |
| position    | string                | bottom md:right                                                                  | Sets slide-over side <br /> (e.g., `top`, `right`, `bottom md:right`, `left`). |
| breakpoints | Record<string,number> | xs: 360<br />sm: 480<br /> md: 768<br /> lg: 1024<br /> xl: 1280<br /> 2xl: 1536 | Custom breakpoints in pixels.                                                  |
| speed       | number                | 300                                                                              | Animation speed in ms                                                          |

### Position Syntax Examples

- `bottom` → Always slides from bottom.
- `top md:right` → Top on small screens, right on medium and larger.
- `left md:bottom xl:right` → Left on mobile, bottom on tablets, right on large screens.

### Slots

- **Default**: Main content inside the slide-over.
- **Overlay**: Custom overlay background (defaults to semi-transparent dark backdrop).

## Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Slaydover from '@crossatko/slaydover'
import '@crossatko/slaydover/dist/slaydover.css'

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open slaydover</button>

  <Slaydover
    v-model="open"
    position="bottom sm:top lg:right"
    :speed="300"
  >
    <div class="content">Your awesome content 👌</div>
  </Slaydover>
</template>

<style>
.content {
  padding: 1rem;
  background: white;
}
</style>
```

<h2 id="demo"> 
  <span>Demo</span>
<a href="https://github.com/crossatko/crossatko.dev/blob/main/app/pages/slaydover-demo.vue" target="_blank" rel="noopener" class="ml-2 text-xs py-2"> Source </a>
</h2>

::slaydover-demo

::

::links{github="crossatko/slaydover"}

::
