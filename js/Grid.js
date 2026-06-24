// bouwt raster op basis van rijen kolommen en grootte
class Grid {
  constructor(rows, cols, cellSize) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    this.pixels = [];
    this.createGrid();
  }

  // Maakt voor elke rij/kolom-combinatie nieuw Pixel-object
  createGrid() {
    this.pixels = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.pixels.push(new Pixel(col, row, this.cellSize));
      }
    }
  }

  // Zoekt de pixel die bij een canvas-coordinaat (in px) hoort
  getPixelAt(canvasX, canvasY) {
    const col = Math.floor(canvasX / this.cellSize);
    const row = Math.floor(canvasY / this.cellSize);

    return this.pixels.find((pixel) => pixel.x === col && pixel.y === row);
  }

  // Tekent elke pixel in het grid op het canvas
  render(ctx) {
    this.pixels.forEach((pixel) => pixel.draw(ctx));
  }

  // Zet alle pixels terug naar de standaardkleur (wit)
  clearAll() {
    this.pixels.forEach((pixel) => pixel.setColor("#ffffff"));
  }
}
