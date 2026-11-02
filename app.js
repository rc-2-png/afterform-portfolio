// EDITABLE CONFIGURATION — replace brand, contact, and sound defaults here.
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
};

const PORTFOLIO_LABELS = {
  ads: "广告短片",
  splash: "闪屏设计",
  guide: "引导页",
  detail: "详情长页",
  poster: "平面海报",
  series: "剧集影像",
};
const ASSET_BASE = "./assets/portfolio";
const videoItems = [
  { title: "TVC 广告一", description: "产品短片 · 竖版 9:16 · 约 30 秒", file: "tvc-01", orientation: "portrait" },
  { title: "TVC 广告二", description: "服饰短片 · 竖版 9:16 · 约 27 秒", file: "tvc-02", orientation: "portrait" },
  { title: "TVC 广告三", description: "家居短片 · 横版 16:9 · 约 35 秒", file: "tvc-03", orientation: "landscape" },
  { title: "公益广告", description: "公益主题短片 · 横版 16:9 · 约 53 秒", file: "public-service", orientation: "landscape" },
  { title: "广告四 / A", description: "广告短片 · 横版 16:9 · 约 30 秒", file: "tvc-04a", orientation: "landscape" },
  { title: "广告四 / B", description: "广告短片 · 横版 16:9 · 约 30 秒", file: "tvc-04b", orientation: "landscape" },
];
const seriesItems = [
  {
    title: "归零纪元",
    description: "第 01 集 · 本剧播放顺序 01 / 02",
    file: "zero-era-episode-01",
    sequence: "归零纪元 / EP 01 · PLAY 01/02",
  },
  {
    title: "归零纪元",
    description: "第 02 集 · 本剧播放顺序 02 / 02",
    file: "zero-era-episode-02",
    sequence: "归零纪元 / EP 02 · PLAY 02/02",
  },
  {
    title: "道士遇上丧尸",
    description: "第 02 集 · 本剧播放顺序 01 / 02",
    file: "zombie-taoist-episode-02",
    sequence: "道士遇上丧尸 / EP 02 · PLAY 01/02",
  },
  {
    title: "道士遇上丧尸",
    description: "第 03 集 · 本剧播放顺序 02 / 02",
    file: "zombie-taoist-episode-03",
    sequence: "道士遇上丧尸 / EP 03 · PLAY 02/02",
  },
];
const splashItems = [
  { title: "山水茶器", description: "水墨山景与茶器静物" },
  { title: "手账打卡", description: "轻快的日常记录界面" },
  { title: "帆布日常", description: "轻松明亮的生活方式视觉" },
  { title: "海面假日", description: "蓝色海岸与帆船" },
  { title: "黄山云海", description: "东方山岳意象" },
  { title: "九阳破壁机", description: "厨房小家电产品首屏" },
  { title: "积木世界", description: "彩色积木与创造力主题" },
  { title: "48dB 耳机", description: "降噪耳机产品视觉" },
  { title: "LUV 汽车", description: "未来感汽车主视觉" },
  { title: "云境酒", description: "琥珀色酒品与东方质感" },
];
const guideGroups = [
  { title: "轻暖羽绒服", description: "穿着体验与保暖功能", start: 1 },
  { title: "智能卫浴", description: "智能家居场景与功能", start: 5 },
  { title: "衣物洗护", description: "羽绒服洗护功能导览", start: 9 },
  { title: "数字产品引导", description: "产品界面与操作流程", start: 13 },
  { title: "云境酒品", description: "酒品故事与饮用场景", start: 17 },
  { title: "耳机体验", description: "佩戴、降噪与聆听体验", start: 21 },
  { title: "积木玩具", description: "搭建、专注与创造力", start: 25 },
  { title: "LUV 汽车", description: "智能座舱与车辆功能", start: 29 },
  { title: "九阳破壁机", description: "料理场景与产品功能", start: 33 },
];
const detailItems = [
  { title: "LUV 汽车", description: "汽车产品详情长页", file: "detail-01" },
  { title: "九阳破壁机", description: "破壁机产品详情长页", file: "detail-02" },
  { title: "云境", description: "云境酒品详情长页", file: "detail-03" },
  { title: "益智积木玩具", description: "积木玩具产品详情长页", file: "detail-04" },
  { title: "耳机", description: "耳机产品详情长页", file: "detail-05" },
];
const posterItems = [
  { title: "街头运动", description: "荧光笔触与街头运动主题" },
  { title: "轻薄旗舰", description: "手机与蓝色光效" },
  { title: "冰爽一口", description: "果汁与夏日饮品" },
  { title: "日常器物", description: "茶杯与东方生活意象" },
  { title: "醇香入礼", description: "酒品礼赠视觉" },
  { title: "时间之上", description: "腕表与经典质感" },
  { title: "破壁新食尚", description: "九阳破壁机与料理场景" },
  { title: "搭建无限想象", description: "积木玩具主题" },
  { title: "48dB 深度降噪", description: "耳机产品主视觉" },
  { title: "LUV 驭见未来", description: "汽车产品主视觉" },
];
const portfolioItems = [
  ...videoItems.map((item) => ({
    ...item,
    category: "ads",
    type: "video",
    src: `${ASSET_BASE}/ads/${item.file}.mp4`,
    preview: `${ASSET_BASE}/ads/${item.file}.webp`,
  })),
  ...seriesItems.map((item) => ({
    ...item,
    category: "series",
    type: "video",
    src: `${ASSET_BASE}/series/${item.file}.mp4`,
    preview: `${ASSET_BASE}/series/${item.file}.webp`,
    orientation: "landscape",
  })),
  ...splashItems.map((item, index) => {
    const file = `${ASSET_BASE}/splash/splash-${String(index + 1).padStart(2, "0")}.webp`;
    return { ...item, category: "splash", type: "image", assets: [file], preview: file };
  }),
  ...guideGroups.map((item) => {
    const assets = Array.from({ length: 4 }, (_, index) =>
      `${ASSET_BASE}/guide/guide-${String(item.start + index).padStart(2, "0")}.webp`);
    return {
      ...item,
      category: "guide",
      type: "image",
      assets,
      preview: assets[0],
      sequence: `${String(item.start).padStart(2, "0")}—${String(item.start + 3).padStart(2, "0")} / 36`,
    };
  }),
  ...detailItems.map((item) => {
    const file = `${ASSET_BASE}/detail/${item.file}.webp`;
    return { ...item, category: "detail", type: "image", assets: [file], preview: file };
  }),
  ...posterItems.map((item, index) => {
    const file = `${ASSET_BASE}/poster/poster-${String(index + 1).padStart(2, "0")}.webp`;
    return { ...item, category: "poster", type: "image", assets: [file], preview: file };
  }),
];

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
const portfolioGrid = document.querySelector("#portfolio-grid");
const portfolioVisibleCount = document.querySelector("#portfolio-visible-count");
const mediaDialog = document.querySelector("#media-dialog");
const mediaTitle = document.querySelector("#media-title");
const mediaViewer = document.querySelector("#media-viewer");
const mediaDescription = document.querySelector("#media-description");
const mediaStatus = document.querySelector("#media-status");
const mediaCounter = document.querySelector("#media-counter");
const mediaPrevious = document.querySelector("#media-previous");
const mediaNext = document.querySelector("#media-next");
let activeMediaItem;
let activeMediaIndex = 0;

function createPortfolioCard(item, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `portfolio-card portfolio-card--${item.category} portfolio-card--${item.type} ${item.orientation ? `portfolio-card--${item.orientation}` : ""} reveal`;
  card.dataset.category = item.category;
  card.style.setProperty("--card-index", String(index % 12));
  card.setAttribute("aria-label", `打开${item.title}：${item.description}`);

  const frame = document.createElement("span");
  frame.className = "portfolio-card__frame";
  const image = document.createElement("img");
  image.className = "portfolio-card__image";
  image.src = item.preview;
  image.alt = item.title;
  image.loading = "lazy";
  image.decoding = "async";
  image.addEventListener("error", () => {
    image.alt = `${item.title} 预览加载失败`;
    card.classList.add("has-preview-error");
  });

  const category = document.createElement("span");
  category.className = "portfolio-card__category mono";
  category.textContent = PORTFOLIO_LABELS[item.category];
  const action = document.createElement("span");
  action.className = "portfolio-card__action mono";
  action.textContent = item.type === "video" ? "PLAY FILM" : "OPEN / VIEW";
  const detail = document.createElement("span");
  detail.className = "portfolio-card__detail mono";
  detail.textContent = item.sequence || (item.type === "video" ? "VIDEO / MP4" : "IMAGE / WEBP");
  frame.append(image, category, action, detail);

  const info = document.createElement("span");
  info.className = "portfolio-card__info";
  const indexLabel = document.createElement("span");
  indexLabel.className = "portfolio-card__index mono";
  indexLabel.textContent = `${String(index + 1).padStart(2, "0")} / ${PORTFOLIO_LABELS[item.category]}`;
  const title = document.createElement("span");
  title.className = "portfolio-card__title";
  title.textContent = item.title;
  const description = document.createElement("span");
  description.className = "portfolio-card__description";
  description.textContent = item.description;
  info.append(indexLabel, title, description);
  card.append(frame, info);
  card.addEventListener("click", () => openMedia(item));
  return card;
}

const portfolioFragment = document.createDocumentFragment();
portfolioItems.forEach((item, index) => {
  portfolioFragment.append(createPortfolioCard(item, index));
});
portfolioGrid.append(portfolioFragment);
document.querySelectorAll("[data-filter]").forEach((button) => {
  const category = button.dataset.filter;
  const count = category === "all"
    ? portfolioItems.length
    : portfolioItems.filter((item) => item.category === category).length;
  button.querySelector("[data-filter-count]").textContent = String(count).padStart(2, "0");
});

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

function renderMediaFrame() {
  const item = activeMediaItem;
  if (!item) return;

  mediaViewer.replaceChildren();
  mediaViewer.classList.toggle("is-detail", item.category === "detail");
  mediaDialog.classList.toggle("is-portrait", item.orientation === "portrait");
  mediaTitle.textContent = item.title;
  mediaDescription.textContent = item.description;
  mediaStatus.textContent = "";
  const frameCount = item.assets?.length || 0;
  mediaPrevious.hidden = frameCount < 2;
  mediaNext.hidden = frameCount < 2;

  if (item.type === "video") {
    const video = document.createElement("video");
    video.className = "media-dialog__video";
    video.controls = true;
    video.preload = "none";
    video.playsInline = true;
    video.poster = item.preview;
    const source = document.createElement("source");
    source.src = item.src;
    source.type = "video/mp4";
    video.append(source);
    video.addEventListener("error", () => {
      mediaStatus.textContent = "视频加载失败，请检查网络后重试。";
    });
    mediaViewer.append(video);
    mediaCounter.textContent = "VIDEO / MP4";
    return;
  }

  const image = document.createElement("img");
  image.className = "media-dialog__image";
  image.src = item.assets[activeMediaIndex];
  image.alt = item.category === "guide"
    ? `${item.title}，第 ${activeMediaIndex + 1} 屏`
    : item.title;
  image.decoding = "async";
  image.addEventListener("error", () => {
    mediaStatus.textContent = "作品图片加载失败，请检查网络后重试。";
  });
  mediaViewer.append(image);

  const sequenceLabel = item.sequence ? ` · ${item.sequence}` : "";
  mediaCounter.textContent =
    `${String(activeMediaIndex + 1).padStart(2, "0")} / ${String(frameCount).padStart(2, "0")}${sequenceLabel}`;
}

function openMedia(item) {
  activeMediaItem = item;
  activeMediaIndex = 0;
  renderMediaFrame();
  mediaDialog.showModal();
}

function moveMediaFrame(direction) {
  if (!activeMediaItem?.assets || activeMediaItem.assets.length < 2) return;
  const count = activeMediaItem.assets.length;
  activeMediaIndex = (activeMediaIndex + direction + count) % count;
  renderMediaFrame();
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((filterButton) => {
      const active = filterButton === button;
      filterButton.classList.toggle("is-active", active);
      filterButton.setAttribute("aria-pressed", String(active));
    });

    let visibleCount = 0;
    document.querySelectorAll(".portfolio-card").forEach((card) => {
      const visible = category === "all" || card.dataset.category === category;
      card.hidden = !visible;
      if (!visible) return;
      visibleCount += 1;
      card.classList.add("is-visible");
      card.classList.remove("is-filtered-in");
    });
    portfolioVisibleCount.textContent = String(visibleCount).padStart(2, "0");
    window.requestAnimationFrame(() => {
      document.querySelectorAll(".portfolio-card:not([hidden])").forEach((card) => {
        card.classList.add("is-filtered-in");
      });
    });
  });
});

document.querySelector("#media-close").addEventListener("click", () => mediaDialog.close());
document.querySelector("#media-previous").addEventListener("click", () => moveMediaFrame(-1));
document.querySelector("#media-next").addEventListener("click", () => moveMediaFrame(1));
mediaDialog.addEventListener("click", (event) => {
  if (event.target === mediaDialog) mediaDialog.close();
});
mediaDialog.addEventListener("close", () => {
  if (mediaDialog.open) return;
  mediaViewer.querySelector("video")?.pause();
  mediaViewer.replaceChildren();
  mediaDialog.classList.remove("is-portrait");
  activeMediaItem = undefined;
  activeMediaIndex = 0;
});
mediaDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && activeMediaItem?.assets?.length > 1) {
    event.preventDefault();
    moveMediaFrame(-1);
  } else if (event.key === "ArrowRight" && activeMediaItem?.assets?.length > 1) {
    event.preventDefault();
    moveMediaFrame(1);
  }
});

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

if (window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
  window.addEventListener("pointermove", (event) => {
    const shiftX = ((event.clientX / window.innerWidth) - 0.5) * 18;
    const shiftY = ((event.clientY / window.innerHeight) - 0.5) * 18;
    root.style.setProperty("--pointer-shift-x", `${shiftX.toFixed(1)}px`);
    root.style.setProperty("--pointer-shift-y", `${shiftY.toFixed(1)}px`);
  }, { passive: true });

  document.querySelectorAll(".portfolio-card").forEach((card) => {
    const art = card.querySelector(".portfolio-card__frame");
    card.addEventListener("pointermove", (event) => {
      const bounds = art.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      card.style.setProperty("--tilt-x", `${((0.5 - y) * 4).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${((x - 0.5) * 5).toFixed(2)}deg`);
      art.style.setProperty("--spot-x", `${(x * 100).toFixed(1)}%`);
      art.style.setProperty("--spot-y", `${(y * 100).toFixed(1)}%`);
    }, { passive: true });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      art.style.setProperty("--spot-x", "50%");
      art.style.setProperty("--spot-y", "50%");
    });
  });
}
