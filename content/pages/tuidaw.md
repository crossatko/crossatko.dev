---
title: 'TUIDAW - Digital Audio Workstation for Terminal & Browser'
description: 'A full-featured DAW with a TUI and a Web UI. Practice guitar at half speed without pitch shift, record multi-track audio, and export mixdowns -- from your terminal or browser.'
---

::prose-h1{fontSize="8.7vw"}
tuidaw
::

::links{github="crossatko/tuidaw" links="Features|#features,Quick Start|#quick-start,Keyboard Shortcuts|#keyboard-shortcuts,Web UI|https://webdaw.crossatko.dev"}

::

## Digital Audio Workstation for Terminal & Browser

A full-featured DAW with a TUI and a Web UI, built with [OpenTUI](https://opentui.com), [Vue 3.6 Vapor](https://vuejs.org), and [miniaudio](https://miniaud.io). Practice guitar at half speed without pitch shift. Record multi-track audio. Export mixdowns. From your terminal or browser.

**[Try the Web UI](https://webdaw.crossatko.dev)**

![TUI](https://webdaw.crossatko.dev/tui.png)

![Web UI](https://webdaw.crossatko.dev/webui.png)

## Features

- **Two UIs** -- terminal (TUI) and browser (Web), sharing the same audio engine
- **Braille waveform display** -- 2x4 dot grid rendering in TUI, Canvas 2D in Web
- **Native audio engine** -- miniaudio C library via Bun FFI (TUI) or WebAssembly (Web)
- **WSOLA time-stretch** -- pitch-preserving speed control (0.25x - 2.0x)
- **Multi-track recording** -- simultaneous capture with per-track input device selection
- **Metronome click** -- sample-accurate, configurable volume and pan
- **Loop regions** -- sample-accurate looping
- **Beat-based timeline** -- navigate by beats/bars, auto BPM detection on import
- **WAV import** -- 16/24/32-bit, stereo downmix, automatic 48kHz resampling
- **Project save/open** -- `.tuidaw` project files (interoperable between TUI and Web)
- **Export mixdown** -- WAV export via ffmpeg (TUI) or offline WASM render (Web)
- **Mouse & touch controls** -- scroll, volume, pan via mouse wheel or touch

## Quick Start

```bash
git clone https://github.com/crossatko/tuidaw.git
cd tuidaw
./setup.sh
bun run start
```

The setup script will check for required system dependencies, download the Zig 0.14.0 toolchain, install JS dependencies, and build the native audio library.

### Pre-built binary (x86_64 Linux)

If you're on x86_64 Linux, the repo ships a pre-built native library. You can skip the native build:

```bash
git clone https://github.com/crossatko/tuidaw.git
cd tuidaw
bun install
bun run start
```

### TUI Requirements

- [Bun](https://bun.sh) (JavaScript runtime)
- Linux (x86_64 or aarch64) or macOS (x86_64 or aarch64)
- A terminal with Unicode support (Ghostty, Kitty, Alacritty, WezTerm, etc.)
- **ffmpeg** -- for export mixdown
- **zenity** -- for file dialogs (Linux only)

## Web UI

The Web UI runs entirely in the browser -- no server-side audio processing. The same C audio engine is compiled to WebAssembly via Emscripten, and miniaudio uses the Web Audio backend automatically.

- Works on desktop and mobile browsers (Chrome, Firefox, Safari)
- Uses your device's microphone for recording (permission requested on first use)
- Projects saved in the browser are fully compatible with the TUI and vice versa
- PWA installable -- works offline after first load

### Self-hosting

```bash
# Development (Vite dev server on port 3666)
bun run dev

# Production build
bun run build:web
# Serve web/dist/ with any static file server
# COOP/COEP headers required for SharedArrayBuffer
```

## Keyboard Shortcuts

Press **F1** in the TUI for the full reference.

| Key              | Action                                      |
| ---------------- | ------------------------------------------- |
| `Space`          | Play / Stop (record if tracks armed)        |
| `A`              | Add track                                   |
| `D`              | Delete track (two-step: clear, then delete) |
| `R`              | Arm/disarm track for recording              |
| `M`              | Mute/unmute track                           |
| `S`              | Solo/unsolo track                           |
| `C`              | Toggle metronome click                      |
| `+` / `-`        | Adjust BPM (changes speed via WSOLA)        |
| `<` / `>`        | Pan left / right                            |
| `V`              | Cycle volume (25/50/75/100%)                |
| `Up` / `Down`    | Select track                                |
| `Left` / `Right` | Scroll timeline (Shift: by bar)             |
| `[` / `]`        | Scrub playhead by 1 bar                     |
| `Home` / `0`     | Jump to beginning                           |
| `End`            | Jump to end                                 |
| `F1`             | Help overlay                                |
| `F2`             | Select input device                         |
| `F3`             | Select output device                        |
| `F5`             | Save project                                |
| `F6`             | Open project                                |
| `I`              | Import WAV                                  |
| `E`              | Export mixdown                              |
| `Q`              | Quit                                        |

## Mouse Controls

| Area              | Action       | Effect                    |
| ----------------- | ------------ | ------------------------- |
| Main waveform     | Scroll wheel | Scroll timeline by beats  |
| Main timeline     | Click        | Set playhead position     |
| Sidebar track     | Scroll wheel | Adjust volume             |
| Sidebar pan zone  | Scroll wheel | Adjust pan                |
| Sidebar click row | Scroll wheel | Adjust click volume / pan |

<a href="https://webdaw.crossatko.dev" target="_blank" rel="noopener" class="font-headline flex w-full max-w-3xl mx-auto items-center justify-center bg-zinc-300 px-8 py-6 text-center text-2xl text-black duration-200 hover:bg-white no-underline">Try the Web UI</a>
