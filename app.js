

if (window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches) {
  window.addEventListener("pointermove", (event) => {
    const shiftX = ((event.clientX / window.innerWidth) - 0.5) * 18;
    const shiftY = ((event.clientY / window.innerHeight) - 0.5) * 18;
    root.style.setProperty("--pointer-shift-x", `${shiftX.toFixed(1)}px`);
    root.style.setProperty("--pointer-shift-y", `${shiftY.toFixed(1)}px`);
  }, { passive: true });

  document.querySelectorAll(".project-link").forEach((link) => {
    const art = link.querySelector(".project-art");
    link.addEventListener("pointermove", (event) => {
      const bounds = link.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      link.style.setProperty("--tilt-x", `${((0.5 - y) * 6).toFixed(2)}deg`);
      link.style.setProperty("--tilt-y", `${((x - 0.5) * 7).toFixed(2)}deg`);
      art.style.setProperty("--spot-x", `${(x * 100).toFixed(1)}%`);
      art.style.setProperty("--spot-y", `${(y * 100).toFixed(1)}%`);
    }, { passive: true });
    link.addEventListener("pointerleave", () => {
      link.style.setProperty("--tilt-x", "0deg");
      link.style.setProperty("--tilt-y", "0deg");
      art.style.setProperty("--spot-x", "50%");
      art.style.setProperty("--spot-y", "50%");
    });
  });
}
