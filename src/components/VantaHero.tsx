'use client';

import { useEffect, useRef } from 'react';
import styles from './VantaHero.module.css';

// ─── Constants ────────────────────────────────────────────────────────────────

const CELL_COUNT          = 32;
const FILAMENT_MAX_DIST   = 180;
const MOUSE_RADIUS        = 140;
const MOUSE_FORCE         = 0.25;
const TEXT_PADDING        = 24;   // extra clearance around the hero text block
const TEXT_FORCE          = 0.45;
const MAX_SPEED           = 0.5;
const DAMPING             = 0.992;
const PULSE_AMPLITUDE     = 0.04; // ±4% breathing scale
const BG_COLOR            = 'rgba(244, 248, 252, 1)'; // faint cool blue — microscope-slide tint

// ─── Types ────────────────────────────────────────────────────────────────────

type RGB = [number, number, number];

interface CellColor {
  membrane: RGB;
  nucleus:  RGB;
}

interface Cell {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  nucleusR: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: CellColor;
}

interface Rect {
  x1: number; y1: number;
  x2: number; y2: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SIZE_TIERS = [
  { r: 9,  nucleusR: 3.5, weight: 12 },
  { r: 17, nucleusR: 6,   weight: 11 },
  { r: 26, nucleusR: 9.5, weight: 9  },
];

const PALETTE: CellColor[] = [
  { membrane: [10,  77,  104], nucleus: [10,  77,  104] }, // deep teal
  { membrane: [26,  122,  90], nucleus: [26,  122,  90] }, // forest green
  { membrane: [13,  107, 144], nucleus: [13,  107, 144] }, // mid teal
  { membrane: [232, 145,  58], nucleus: [184, 108,  32] }, // amber (different nucleus shade)
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function rgba([r, g, b]: RGB, alpha: number): string {
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function pickWeighted(): { r: number; nucleusR: number } {
  const total = SIZE_TIERS.reduce((sum, t) => sum + t.weight, 0);
  let rnd = Math.random() * total;
  for (const tier of SIZE_TIERS) {
    rnd -= tier.weight;
    if (rnd <= 0) return tier;
  }
  return SIZE_TIERS[1];
}

function makeCell(w: number, h: number): Cell {
  const { r, nucleusR } = pickWeighted();
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.12 + Math.random() * 0.18;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r,
    nucleusR,
    pulsePhase: Math.random() * Math.PI * 2,
    pulseSpeed: 0.006 + Math.random() * 0.008,
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
  };
}

function makeCells(w: number, h: number): Cell[] {
  return Array.from({ length: CELL_COUNT }, () => makeCell(w, h));
}

// Reads the hero text element's position relative to the canvas.
// Called on mount and on resize — not every frame.
function readTextZone(canvas: HTMLCanvasElement): Rect | null {
  const textEl = document.getElementById('hero-text');
  if (!textEl) return null;
  const cr = canvas.getBoundingClientRect();
  const tr = textEl.getBoundingClientRect();
  return {
    x1: tr.left   - cr.left,
    y1: tr.top    - cr.top,
    x2: tr.right  - cr.left,
    y2: tr.bottom - cr.top,
  };
}

// ─── Physics ──────────────────────────────────────────────────────────────────

function applyMouseRepulsion(c: Cell, mouse: { x: number; y: number }) {
  const dx = c.x - mouse.x;
  const dy = c.y - mouse.y;
  const d  = Math.sqrt(dx * dx + dy * dy);
  if (d > 0 && d < MOUSE_RADIUS) {
    const force = ((MOUSE_RADIUS - d) / MOUSE_RADIUS) * MOUSE_FORCE;
    c.vx += (dx / d) * force;
    c.vy += (dy / d) * force;
  }
}

function applyTextZoneRepulsion(c: Cell, zone: Rect) {
  // Expand the zone by the cell radius + fixed padding so no part of the cell overlaps text
  const pad = c.r + TEXT_PADDING;
  const x1 = zone.x1 - pad, x2 = zone.x2 + pad;
  const y1 = zone.y1 - pad, y2 = zone.y2 + pad;
  if (c.x <= x1 || c.x >= x2 || c.y <= y1 || c.y >= y2) return;

  const dLeft   = c.x - x1;
  const dRight  = x2  - c.x;
  const dTop    = c.y - y1;
  const dBottom = y2  - c.y;
  const nearest = Math.min(dLeft, dRight, dTop, dBottom);

  if      (nearest === dLeft)   c.vx -= TEXT_FORCE;
  else if (nearest === dRight)  c.vx += TEXT_FORCE;
  else if (nearest === dTop)    c.vy -= TEXT_FORCE;
  else                          c.vy += TEXT_FORCE;
}

function updateCell(
  c: Cell,
  W: number, H: number,
  mouse: { x: number; y: number } | null,
  textZone: Rect | null,
) {
  c.pulsePhase = (c.pulsePhase + c.pulseSpeed) % (Math.PI * 2);

  if (mouse)    applyMouseRepulsion(c, mouse);
  if (textZone) applyTextZoneRepulsion(c, textZone);

  c.vx *= DAMPING;
  c.vy *= DAMPING;

  const spd = Math.sqrt(c.vx * c.vx + c.vy * c.vy);
  if (spd > MAX_SPEED) { c.vx *= MAX_SPEED / spd; c.vy *= MAX_SPEED / spd; }

  c.x += c.vx;
  c.y += c.vy;

  // Wrap around edges so cells re-enter from the opposite side
  const m = c.r + 4;
  if (c.x < -m)    c.x = W + m;
  if (c.x > W + m) c.x = -m;
  if (c.y < -m)    c.y = H + m;
  if (c.y > H + m) c.y = -m;
}

// ─── Drawing ──────────────────────────────────────────────────────────────────

function drawFilaments(ctx: CanvasRenderingContext2D, cells: Cell[]) {
  for (let i = 0; i < cells.length; i++) {
    for (let j = i + 1; j < cells.length; j++) {
      const a = cells[i], b = cells[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d > FILAMENT_MAX_DIST) continue;

      // Curved filament: bezier control point offset perpendicular to the line
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const px = -(b.y - a.y) * 0.18,  py = (b.x - a.x) * 0.18;

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.quadraticCurveTo(mx + px, my + py, b.x, b.y);
      ctx.strokeStyle = `rgba(10, 77, 104, ${(1 - d / FILAMENT_MAX_DIST) * 0.13})`;
      ctx.lineWidth   = 0.75;
      ctx.stroke();
    }
  }
}

function drawCell(ctx: CanvasRenderingContext2D, c: Cell) {
  const scale = 1 + Math.sin(c.pulsePhase) * PULSE_AMPLITUDE;
  const r  = c.r       * scale;
  const nr = c.nucleusR * scale;
  const { membrane, nucleus } = c.color;

  // Outer glow
  const glow = ctx.createRadialGradient(c.x, c.y, r * 0.4, c.x, c.y, r * 1.4);
  glow.addColorStop(0, rgba(membrane, 0.06));
  glow.addColorStop(1, rgba(membrane, 0));
  ctx.beginPath();
  ctx.arc(c.x, c.y, r * 1.4, 0, Math.PI * 2);
  ctx.fillStyle = glow;
  ctx.fill();

  // Cell body
  ctx.beginPath();
  ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
  ctx.fillStyle = rgba(membrane, 0.06);
  ctx.fill();

  // Outer membrane ring
  ctx.beginPath();
  ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
  ctx.strokeStyle = rgba(membrane, 0.28);
  ctx.lineWidth   = 1.2;
  ctx.stroke();

  // Inner membrane ring (slightly inset)
  ctx.beginPath();
  ctx.arc(c.x, c.y, r * 0.72, 0, Math.PI * 2);
  ctx.strokeStyle = rgba(membrane, 0.1);
  ctx.lineWidth   = 0.75;
  ctx.stroke();

  // Nucleus — offset from centre for a more natural look
  const nx = c.x + r * 0.12, ny = c.y - r * 0.08;
  const nucGrad = ctx.createRadialGradient(nx - nr * 0.3, ny - nr * 0.3, 0, nx, ny, nr);
  nucGrad.addColorStop(0, rgba(nucleus, 0.45));
  nucGrad.addColorStop(1, rgba(nucleus, 0.18));
  ctx.beginPath();
  ctx.arc(nx, ny, nr, 0, Math.PI * 2);
  ctx.fillStyle   = nucGrad;
  ctx.fill();
  ctx.strokeStyle = rgba(nucleus, 0.22);
  ctx.lineWidth   = 0.75;
  ctx.stroke();
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function VantaHero({ children }: { children: React.ReactNode }) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const cellsRef    = useRef<Cell[]>([]);
  const rafRef      = useRef<number>(0);
  const mouseRef    = useRef<{ x: number; y: number } | null>(null);
  const textZoneRef = useRef<Rect | null>(null);

  useEffect(() => {
    const canvas  = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas || !wrapper) return;
      canvas.width  = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;
      cellsRef.current  = makeCells(canvas.width, canvas.height);
      textZoneRef.current = readTextZone(canvas);
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = null; };
    wrapper.addEventListener('mousemove', onMouseMove);
    wrapper.addEventListener('mouseleave', onMouseLeave);

    function draw() {
      if (!canvas || !ctx) return;
      const { width: W, height: H } = canvas;

      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, W, H);

      const cells    = cellsRef.current;
      const mouse    = mouseRef.current;
      const textZone = textZoneRef.current;

      for (const c of cells) updateCell(c, W, H, mouse, textZone);
      drawFilaments(ctx, cells);
      for (const c of cells) drawCell(ctx, c);

      rafRef.current = requestAnimationFrame(draw);
    }
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      wrapper.removeEventListener('mousemove', onMouseMove);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />
      {children}
    </div>
  );
}
