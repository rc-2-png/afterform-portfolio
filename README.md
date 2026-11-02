# AFTERFORM — AIGC Creative Portfolio

A dependency-free, cinematic portfolio site built with semantic HTML, CSS, and native browser APIs.

## Run locally

Open `index.html` in a current desktop or mobile browser. For local server behavior, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

The opening sequence has four full-screen scenes. Scroll, swipe, or use the arrow/page keys to move one scene at a time; the final scene leads into the portfolio. The background score is synthesized in the browser with Web Audio API only after selecting **进入作品集** or the sound control. No audio files or autoplay media elements are used.

## Publish with GitHub Pages

The `main` branch deploys automatically through `.github/workflows/pages.yml`. After the first successful workflow run, the public site is available at `https://rc-2-png.github.io/afterform-portfolio/`.

## Replaceable content

- `app.js` — edit the `SITE_CONFIG` block for brand, contact address, and audio defaults; edit the media lists to change portfolio titles and descriptions.
- `index.html` — edit Chinese headlines, section copy, and navigation labels.
- `styles.css` — edit the color tokens in `:root` to adjust the near-black base, primary glow, and warm accent.
- `assets/portfolio/` — WebP artwork and H.264 MP4 videos optimized for web delivery, organized into `ads`, `series`, `splash`, `guide`, `detail`, and `poster`. Episode entries in `seriesItems` are grouped by show and ordered by playback position; update them when replacing series videos. Videos are only requested after a visitor opens one.

## Delivery self-check

1. Near-black base; exactly one primary glow color and one warm accent across the interface.
2. Display, body, and monospace typography have distinct roles; fine hairlines and restrained grain/scanline texture remain legible.
3. HUD indicators represent actual page state; no purple-blue blob gradients or full-page glass effects. The main glow is lunar blue with a restrained warm accent.
4. Entry/reveal motion uses blur, stagger, and the shared `cubic-bezier(.16, 1, .3, 1)` easing.
5. The four-scene opening advances on wheel/swipe/keyboard, then yields to natively scrollable portfolio sections; the progress indicator, perspective grid, and filter tone respond to scroll.
6. Audio starts only after the explicit ENTER gesture and uses oscillators, low-pass filtering, feedback delay, noise pad, and an analyser.
7. Audio defaults to 0.18, has a persistent accessible toggle, reacts visually to low frequencies, and fades when the tab is hidden.
8. Mobile layout, keyboard access, visible focus, and reduced-motion preferences are respected.
9. Verify all local links, browser console, and audio behavior in a current browser; confirm there is no `<audio autoplay>` element.
