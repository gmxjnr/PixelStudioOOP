// tools die op een pixel kunnen worden toegepast
class Tool {
  constructor(name) {
    this.name = name;
  }

  // Moet door elke subclass overschreven worden
  apply(pixel, color) {
    throw new Error("apply() moet geïmplementeerd worden door een subclass van Tool");
  }
}

// pentool, geeft pixel kleur
class PenTool extends Tool {
  constructor() {
    super("pen");
  }

  apply(pixel, color) {
    pixel.setColor(color);
  }
}

// eraser tool spreekt voor zich
class EraserTool extends Tool {
  constructor() {
    super("eraser");
  }

  apply(pixel, color) {
    pixel.setColor("#ffffff");
  }
}
