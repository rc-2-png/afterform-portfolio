// EDITABLE CONFIGURATION — replace brand, contact, project labels, and sound defaults here.
const SITE_CONFIG = {
  brand: "AFTERFORM",
  email: "hello@afterform.studio",
  audio: {
    volume: 0.18,
    baseFrequency: 110,
    filterBase: 460,
    delayTime: 0.34,
    feedback: 0.27,
  },
  projects: [
    { title: "深海档案", type: "IMMERSIVE WORLD", year: "2025" },
    { title: "气味显影", type: "GENERATIVE IDENTITY", year: "2024" },
    { title: "第七码头", type: "SYNTHETIC CINEMA", year: "2023" },
  ],
};

const root = document.documentElement;
const body = document.body;
const intro = document.querySelector("#intro-sequence");
const introScenes = [...document.querySelectorAll("[data-intro-scene]")];
const introDots = [...document.querySelectorAll("[data-intro-target]")];
const enterButton = document.querySelector("#enter-portfolio");
const soundToggle = document.querySelector("#sound-toggle");
const soundState = document.querySelector("#sound-state");
const audioStatus = document.querySelector("#audio-status");
const progressBar = document.querySelector("#scroll-progress-bar");
const contactEmail = document.querySelector("#contact-email");
const currentYear = document.querySelector("#current-year");

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
function resetToTop() {
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.removeProperty("scroll-behavior");
}
resetToTop();
window.addEventListener("pageshow", () => {
  if (introExited) return;
  resetToTop();
  updateScrollState();
}, { once: true });

contactEmail.href = `mailto:${SITE_CONFIG.email}`;
currentYear.textContent = String(new Date().getFullYear());
document.querySelectorAll("[data-site-brand]").forEach((element) => {
  element.textContent = SITE_CONFIG.brand;
});
document.querySelector(".intro-wordmark").childNodes[0].textContent = `${SITE_CONFIG.brand} `;
document.querySelector(".enter-art-label").textContent = `${SITE_CONFIG.brand} / CREATIVE LAB`;
document.querySelectorAll(".project-card").forEach((card, index) => {
  const project = SITE_CONFIG.projects[index];
  if (!project) return;
  card.querySelector(".project-info h3").textContent = project.title;
  card.querySelector(".project-number").textContent =
    `${String(index + 1).padStart(2, "0")} / ${project.type} · ${project.year}`;
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealElements = document.querySelectorAll(".reveal");
let audioContext;
let masterGain;
let analyser;
let frequencyData;
let filterNode;
let audioEnabled = false;
let audioStarted = false;
let animationFrame = 0;
let scrollFrame = 0;
let introIndex = 0;
let introLocked = false;
let introExited = false;
let touchStartY = 0;

function showIntroScene(nextIndex) {
  const clampedIndex = Math.max(0, Math.min(introScenes.length - 1, nextIndex));
  if (clampedIndex === introIndex) return;
  introIndex = clampedIndex;
  introScenes.forEach((scene, index) => {
    const active = index === introIndex;
    scene.classList.toggle("is-active", active);
    scene.classList.toggle("is-before", index < introIndex);
    scene.classList.toggle("is-after", index > introIndex);
    scene.setAttribute("aria-hidden", String(!active));
  });
  introDots.forEach((dot, index) => {
    const active = index === introIndex;
    dot.classList.toggle("is-active", active);
    if (active) dot.setAttribute("aria-current", "step");
    else dot.removeAttribute("aria-current");
  });
}

function leaveIntro() {
  if (introExited) return;
  introExited = true;
  resetToTop();
  intro.classList.add("is-leaving");
  body.classList.remove("is-intro-active");
  body.classList.add("is-intro-exiting");
  updateScrollState();
  document.querySelector(".site-header").setAttribute("aria-hidden", "false");
  document.querySelector("#main").setAttribute("aria-hidden", "false");
  window.setTimeout(() => {
    body.classList.remove("is-intro-exiting");
    root.classList.remove("is-intro-active");
    intro.hidden = true;
    document.querySelector("#hero-title").focus({ preventScroll: true });
  }, 900);
}

function moveIntro(direction) {
  if (introExited) return;
  if (direction > 0 && introIndex === introScenes.length - 1) {
    leaveIntro();
    return;
  }
  if (introLocked) return;
  if (direction < 0 && introIndex === 0) return;
  introLocked = true;
  showIntroScene(introIndex + direction);
  window.setTimeout(() => { introLocked = false; }, reducedMotion.matches ? 420 : 880);
}

function setAudioStatus(message) {
  audioStatus.textContent = message;
  if (message) {
    window.setTimeout(() => {
      if (audioStatus.textContent === message) audioStatus.textContent = "";
    }, 6000);
  }
}

function makeNoiseBuffer(context) {
  const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const channel = buffer.getChannelData(0);
  for (let index = 0; index < channel.length; index += 1) {
    channel[index] = (Math.random() * 2 - 1) * 0.45;
  }
  return buffer;
}

async function startSynth() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    throw new Error("此浏览器不支持 Web Audio API。");
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
    masterGain = audioContext.createGain();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;
    analyser.smoothingTimeConstant = 0.86;
    frequencyData = new Uint8Array(analyser.frequencyBinCount);
    masterGain.gain.value = 0;
    masterGain.connect(analyser);
    analyser.connect(audioContext.destination);

    const voiceFilter = audioContext.createBiquadFilter();
    voiceFilter.type = "lowpass";
    voiceFilter.frequency.value = SITE_CONFIG.audio.filterBase;
    voiceFilter.Q.value = 0.7;
    filterNode = voiceFilter;

    const voiceGain = audioContext.createGain();
    voiceGain.gain.value = 0.24;
    const delay = audioContext.createDelay(1.5);
    delay.delayTime.value = SITE_CONFIG.audio.delayTime;
    const feedbackGain = audioContext.createGain();
    feedbackGain.gain.value = SITE_CONFIG.audio.feedback;
    const delayReturn = audioContext.createGain();
    delayReturn.gain.value = 0.28;

    voiceFilter.connect(voiceGain);
    voiceGain.connect(masterGain);
    voiceGain.connect(delay);
    delay.connect(delayReturn);
    delayReturn.connect(masterGain);
    delay.connect(feedbackGain);
    feedbackGain.connect(delay);

    const notes = [
      { frequency: SITE_CONFIG.audio.baseFrequency, type: "sine", gain: 0.54 },
      { frequency: SITE_CONFIG.audio.baseFrequency * 1.498, type: "triangle", gain: 0.19 },
      { frequency: SITE_CONFIG.audio.baseFrequency * 2.01, type: "sine", gain: 0.08 },
    ];
    notes.forEach((note) => {
      const oscillator = audioContext.createOscillator();
      const noteGain = audioContext.createGain();
      oscillator.type = note.type;
      oscillator.frequency.value = note.frequency;
      noteGain.gain.value = note.gain;
      oscillator.connect(noteGain);
      noteGain.connect(voiceFilter);
      oscillator.start();
    });

    const noiseSource = audioContext.createBufferSource();
    const noiseFilter = audioContext.createBiquadFilter();
    const noiseGain = audioContext.createGain();
    noiseSource.buffer = makeNoiseBuffer(audioContext);
    noiseSource.loop = true;
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = 520;
    noiseGain.gain.value = 0.035;
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    noiseSource.start();
    audioStarted = true;
  }

  await audioContext.resume();
  const now = audioContext.currentTime;
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.setTargetAtTime(
    audioEnabled ? SITE_CONFIG.audio.volume : 0,
    now,
    0.72,
  );
  if (!animationFrame) animateAudio();
}

function animateAudio() {
  if (!analyser || !audioEnabled || document.hidden) {
    animationFrame = 0;
    root.style.setProperty("--audio-energy", "0");
    return;
  }

  analyser.getByteFrequencyData(frequencyData);
  const bins = Math.max(1, Math.floor(frequencyData.length * 0.08));
  let lowEnergy = 0;
  for (let index = 0; index < bins; index += 1) lowEnergy += frequencyData[index];
  const normalized = lowEnergy / (bins * 255);
  root.style.setProperty("--audio-energy", normalized.toFixed(3));
  animationFrame = window.requestAnimationFrame(animateAudio);
}

function setAudioEnabled(enabled) {
  audioEnabled = enabled;
  soundToggle.setAttribute("aria-pressed", String(enabled));
  soundToggle.setAttribute("aria-label", enabled ? "关闭背景声音" : "开启背景声音");
  soundState.textContent = enabled ? "ON" : "OFF";
  if (masterGain && audioContext) {
    const now = audioContext.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setTargetAtTime(
      enabled && !document.hidden ? SITE_CONFIG.audio.volume : 0,
      now,
      0.5,
    );
  }
  if (enabled && !animationFrame) animateAudio();
  if (!enabled) {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    root.style.setProperty("--audio-energy", "0");
  }
}

async function enterPortfolio() {
  setAudioEnabled(true);
  try {
    await startSynth();
  } catch (error) {
    setAudioEnabled(false);
    console.error("Background sound could not be started:", error);
    setAudioStatus(`声音无法启动：${error.message}`);
  }
  leaveIntro();
}

enterButton.addEventListener("click", enterPortfolio);
document.querySelectorAll('a[href="#main"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    leaveIntro();
  });
});
intro.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (Math.abs(event.deltaY) < 14) return;
  moveIntro(event.deltaY > 0 ? 1 : -1);
}, { passive: false });
intro.addEventListener("touchstart", (event) => {
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });
intro.addEventListener("touchend", (event) => {
  const delta = touchStartY - event.changedTouches[0].clientY;
  if (Math.abs(delta) > 42) moveIntro(delta > 0 ? 1 : -1);
}, { passive: true });
introDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    if (introExited || introLocked || index === introIndex) return;
    introLocked = true;
    showIntroScene(index);
    window.setTimeout(() => { introLocked = false; }, reducedMotion.matches ? 420 : 880);
  });
});
document.addEventListener("keydown", (event) => {
  if (introExited) return;
  const forwardKeys = ["ArrowDown", "PageDown", " "];
  const backwardKeys = ["ArrowUp", "PageUp"];
  if (forwardKeys.includes(event.key)) {
    event.preventDefault();
    moveIntro(1);
  } else if (backwardKeys.includes(event.key)) {
    event.preventDefault();
    moveIntro(-1);
  } else if (event.key === "Home") {
    event.preventDefault();
    if (!introLocked) {
      introLocked = true;
      showIntroScene(0);
      window.setTimeout(() => { introLocked = false; }, 880);
    }
  } else if (event.key === "End") {
    event.preventDefault();
    if (!introLocked) {
      introLocked = true;
      showIntroScene(introScenes.length - 1);
      window.setTimeout(() => { introLocked = false; }, 880);
    }
  } else if (event.key === "Enter" && introIndex === introScenes.length - 1
      && event.target !== enterButton) {
    enterPortfolio();
  }
});

soundToggle.addEventListener("click", async () => {
  if (!audioStarted) {
    setAudioEnabled(true);
    try {
      await startSynth();
    } catch (error) {
      setAudioEnabled(false);
      console.error("Background sound could not be started:", error);
      setAudioStatus(`声音无法启动：${error.message}`);
    }
    return;
  }
  if (audioContext?.state === "suspended") {
    try {
      await audioContext.resume();
    } catch (error) {
      console.error("Audio context could not resume:", error);
      setAudioStatus(`声音无法恢复：${error.message}`);
      return;
    }
  }
  setAudioEnabled(!audioEnabled);
});

document.addEventListener("visibilitychange", () => {
  if (!masterGain || !audioContext) return;
  const now = audioContext.currentTime;
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.setTargetAtTime(
    document.hidden || !audioEnabled ? 0 : SITE_CONFIG.audio.volume,
    now,
    document.hidden ? 0.22 : 0.9,
  );
  if (document.hidden) {
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    root.style.setProperty("--audio-energy", "0");
  } else if (audioEnabled && !animationFrame) {
    animateAudio();
  }
});

function updateScrollState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  const clampedProgress = Math.max(0, Math.min(1, progress));
  root.style.setProperty("--scroll-progress", clampedProgress.toFixed(4));
  progressBar.style.transform = `scaleX(${clampedProgress})`;
  body.classList.toggle("has-scrolled", window.scrollY > 24);

  if (filterNode && audioContext) {
    const targetFrequency = SITE_CONFIG.audio.filterBase + clampedProgress * 1500;
    filterNode.frequency.setTargetAtTime(targetFrequency, audioContext.currentTime, 0.35);
  }
  scrollFrame = 0;
}

window.addEventListener("scroll", () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollState);
}, { passive: true });
window.addEventListener("resize", updateScrollState, { passive: true });
updateScrollState();

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

reducedMotion.addEventListener?.("change", (event) => {
  if (event.matches) revealElements.forEach((element) => element.classList.add("is-visible"));
});

if (window.matchMedia("(pointer: fine)").matches) {
  body.classList.add("has-pointer");
  const reticle = document.querySelector(".pointer-reticle");
  window.addEventListener("pointermove", (event) => {
    reticle.style.left = `${event.clientX}px`;
    reticle.style.top = `${event.clientY}px`;
  }, { passive: true });
  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("pointerenter", () => body.classList.add("pointer-hover"));
    element.addEventListener("pointerleave", () => body.classList.remove("pointer-hover"));
  });
}
