import Pixel from "./Pixel.js";

export default class Grid {
	constructor(columns, rows, pixelSize, defaultColor = "#ffffff") {
		this.columns = columns;
		this.rows = rows;
		this.pixelSize = pixelSize;
		this.defaultColor = defaultColor;
		this.pixels = [];

		this.generate();
	}

	generate() {
		this.pixels = [];

		for (let y = 0; y < this.rows; y += 1) {
			for (let x = 0; x < this.columns; x += 1) {
				this.pixels.push(new Pixel(x, y, this.defaultColor, this.pixelSize));
			}
		}
	}

	render(ctx) {
		for (const pixel of this.pixels) {
			pixel.draw(ctx);
		}
	}

	clear(color = this.defaultColor) {
		for (const pixel of this.pixels) {
			pixel.color = color;
		}
	}
}
