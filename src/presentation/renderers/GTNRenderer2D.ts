import type { IGTNRenderer } from './IGTNRenderer';
import type { IGTNTurtleRepository } from '@domain/interfaces/IGTNTurtleRepository';
import { GTNTurtle } from '@domain/entities/GTNTurtle';
import type { GTNColor } from '@domain/value-objects';
import { toRadian } from '@domain/types';

export class GTNRenderer2D implements IGTNRenderer {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private width: number = 0;
  private height: number = 0;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.display = 'block';
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to create 2D context');
    this.ctx = ctx;
  }

  attach(container: HTMLElement): void {
    container.innerHTML = ''; // Clear container
    container.appendChild(this.canvas);
    // Initial size sync
    const rect = container.getBoundingClientRect();
    this.resize(rect.width, rect.height);
  }

  resize(width: number, height: number): void {
    const dpr = window.devicePixelRatio || 1;
    this.width = width;
    this.height = height;

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    this.ctx.scale(dpr, dpr);
  }

  dispose(): void {
    this.canvas.remove();
  }

  render(repo: IGTNTurtleRepository): void {
    const w = this.width;
    const h = this.height;
    const cx = w / 2;
    const cy = h / 2;

    this.ctx.clearRect(0, 0, w, h);

    this.ctx.save();
    this.ctx.translate(cx, cy);
    this.ctx.scale(1, -1); // Standard Cartesian (Y-up)

    repo.getAll().forEach((turtle) => {
      this.drawTurtleLines(turtle);
      if (turtle.isVisible) {
        this.drawTurtleSprite(turtle);
      }
    });

    this.ctx.restore();
  }

  private resolveColor(color: GTNColor): string {
    if (typeof color === 'number') {
      return '#' + color.toString(16).padStart(6, '0');
    }
    return color;
  }

  private drawTurtleLines(turtle: GTNTurtle) {
    turtle.lines.forEach((line) => {
      this.ctx.beginPath();
      this.ctx.moveTo(line.start.x, line.start.y);
      this.ctx.lineTo(line.end.x, line.end.y);

      this.ctx.strokeStyle = this.resolveColor(line.color);
      this.ctx.lineWidth = line.width;
      this.ctx.globalAlpha = line.opacity;
      this.ctx.lineCap = 'round';
      this.ctx.stroke();
    });
    this.ctx.globalAlpha = 1.0;
  }

  private drawTurtleSprite(turtle: GTNTurtle) {
    const { x, y } = turtle.state.position;
    const q = turtle.state.rotation;
    const angle = toRadian(2 * Math.atan2(q.z, q.w));

    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(angle);

    this.ctx.beginPath();
    this.ctx.moveTo(0, 15);
    this.ctx.lineTo(-10, -10);
    this.ctx.lineTo(10, -10);
    this.ctx.closePath();

    this.ctx.fillStyle = this.resolveColor(turtle.penState.color);
    this.ctx.fill();
    this.ctx.strokeStyle = '#333';
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.restore();
  }
}
