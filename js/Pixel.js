// Elk vakje van de grid
class Pixel {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = "#ffffff"; // wit (standaard)
  }

  // Tekent dit vakje op het canvas + rand
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);

    ctx.strokeStyle = "#dddddd";
    ctx.lineWidth = 1;
    ctx.strokeRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }

  // Past de kleur van dit vakje aan
  setColor(newColor) {
    this.color = newColor;
  }
}
