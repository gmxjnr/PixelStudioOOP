// Grote baas van de app
class App {
  constructor(canvas, rows, cols, cellSize) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.grid = new Grid(rows, cols, cellSize);

    this.tools = {
      pen: new PenTool(),
      eraser: new EraserTool(),
    };

    this.currentTool = this.tools.pen;
    this.selectedColor = "#000000";

    this.isMouseDown = false; // voor drag-to-draw
  }

  // Zet het canvas op de juiste afmetingen, koppelt events en tekent het startbeeld
  init() {
    this.canvas.width = this.grid.cols * this.grid.cellSize;
    this.canvas.height = this.grid.rows * this.grid.cellSize;

    this.handleEvents();
    this.render();
  }

  // Vertaalt een muis-event naar canvas-coordinaten
  getCanvasCoordinates(event) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  // Past de huidige tool toe op de pixel onder de muis
  paintAt(event) {
    const { x, y } = this.getCanvasCoordinates(event);
    const pixel = this.grid.getPixelAt(x, y);

    if (pixel) {
      this.currentTool.apply(pixel, this.selectedColor);
      this.render();
    }
  }

  // Koppelt alle event listeners tekenen op het canvas en de UI-knoppen
  handleEvents() {
    // Tekenen met een klik
    this.canvas.addEventListener("mousedown", (event) => {
      this.isMouseDown = true;
      this.paintAt(event);
    });

    // blijven tekenen zolang de muisknop ingedrukt is
    this.canvas.addEventListener("mousemove", (event) => {
      if (this.isMouseDown) {
        this.paintAt(event);
      }
    });

    window.addEventListener("mouseup", () => {
      this.isMouseDown = false;
    });

    // Kleurkiezer
    const colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("input", (event) => {
      this.selectedColor = event.target.value;
    });

    // Toolknoppen
    const penButton = document.getElementById("penTool");
    const eraserButton = document.getElementById("eraserTool");

    penButton.addEventListener("click", () => {
      this.currentTool = this.tools.pen;
      penButton.classList.add("active");
      eraserButton.classList.remove("active");
    });

    eraserButton.addEventListener("click", () => {
      this.currentTool = this.tools.eraser;
      eraserButton.classList.add("active");
      penButton.classList.remove("active");
    });

    // Clear knop
    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
      this.grid.clearAll();
      this.render();
    });
  }

  // Tekent het volledige canvas
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.grid.render(this.ctx);
  }
}
