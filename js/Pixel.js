export default class Pixel {
	constructor(x, y, color, size) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.size = size;
	}

	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
	}
}
