# Dropbox Link Converter

A lightweight PWA that converts standard Dropbox sharing links into direct download links. No backend, no sign-up — just paste, convert, and copy.

## Features

- **Link Conversion** — Converts `www.dropbox.com` links to `dl.dropboxusercontent.com` direct download links and strips `?dl=0` params.
- **Copy to Clipboard** — One-click copy with toast notification.
- **Conversion History** — Stored locally via IndexedDB. Copy, delete individual entries, or clear all.
- **Multi-language (i18n)** — English, 中文, 日本語, Bahasa Melayu. Auto-detects browser language, persists choice in localStorage.
- **PWA / Offline Support** — Installable as a standalone app. Service worker caches all assets for offline use with an offline status banner.
- **Dark Mode** — Follows system `prefers-color-scheme` automatically.
- **Responsive** — Adapts from 320px mobile to desktop. Small-screen optimizations for < 360px.
- **SEO Optimized** — Open Graph, Twitter Cards, JSON-LD structured data (`WebApplication` schema), canonical URL, robots meta, hreflang tags.
- **Accessible** — Semantic HTML, `aria-live` regions, visible focus states, labeled form controls.

## How It Works

1. Paste a Dropbox shared link (e.g. `https://www.dropbox.com/s/abc123/file.zip?dl=0`)
2. Click **Convert**
3. The tool replaces the domain → `https://dl.dropboxusercontent.com/s/abc123/file.zip`
4. Click **Copy Link** to copy to clipboard

## Tech Stack

- Single HTML file — no build step, no dependencies
- Vanilla JavaScript (ES2017+)
- IndexedDB for persistent history
- Service Worker for offline caching
- CSS with dark mode via `prefers-color-scheme`

## Project Structure

```
├── index.html          # App (HTML + CSS + JS)
├── manifest.json       # PWA web app manifest
├── sw.js               # Service worker
├── og_img.jpg          # Open Graph preview image
├── icons/
│   ├── icon-192.svg    # PWA icon (192x192)
│   └── icon-512.svg    # PWA icon (512x512)
└── README.md
```

## Demo

**Codepen:** https://codepen.io/yapweijun1996/pen/ExqWEgm

**GitHub Pages:** https://yapweijun1996.github.io/Dropbox-Link-Converter/

### Preview

![image](https://github.com/user-attachments/assets/4e5152e4-48df-4d1b-a7e7-1779ecbdc4c7)

## License

MIT
