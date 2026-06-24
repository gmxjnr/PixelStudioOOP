// main startpubnt

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("pixelCanvas");
  const app = new App(canvas, 16, 16, 24); // 16x16 grid 24px per pixel
  app.init();
});
