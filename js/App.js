import Grid from "./Grid.js";

export default class App {
	constructor(canvasId, clearButtonId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
		this.clearButton = document.getElementById(clearButtonId);

		const pixelSize = 20;
		const columns = Math.floor(this.canvas.width / pixelSize);
		const rows = Math.floor(this.canvas.height / pixelSize);

		this.grid = new Grid(columns, rows, pixelSize, "#ffffff");

		this.attachEvents();
		this.render();
	}

	attachEvents() {
		this.clearButton.addEventListener("click", () => {
			this.grid.clear();
			this.render();
		});
	}

	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.grid.render(this.ctx);
	}
}
