import { useEffect, useRef } from "react";

type Pointer = { x: number; y: number; active: boolean };
type Ripple = { x: number; y: number; born: number };

export default function PatternCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const pointer: Pointer = { x: -1000, y: -1000, active: false };
    const ripples: Ripple[] = [];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(performance.now());
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const spacing = width < 600 ? 68 : 90;
      const radius = width < 600 ? 15 : 19;
      const offsetX = (width % spacing) / 2;
      const offsetY = (height % spacing) / 2;

      for (let x = offsetX; x <= width + spacing; x += spacing) {
        for (let y = offsetY; y <= height + spacing; y += spacing) {
          const dx = pointer.x - x;
          const dy = pointer.y - y;
          const distance = Math.hypot(dx, dy);
          const influence = pointer.active ? Math.max(0, 1 - distance / 190) : 0;
          const drift = reducedMotion ? 0 : Math.sin(time / 2700 + x * 0.015 + y * 0.02) * 0.05;
          const alpha = 0.11 + drift + influence * 0.2;
          const shift = influence * 3;
          context.save();
          context.translate(x + shift, y);
          context.rotate(Math.PI / 4);
          context.strokeStyle = `rgba(185, 157, 102, ${alpha})`;
          context.lineWidth = 0.7 + influence * 0.35;
          context.strokeRect(-radius, -radius, radius * 2, radius * 2);
          context.rotate(Math.PI / 4);
          context.strokeStyle = `rgba(92, 178, 143, ${alpha * 0.7})`;
          context.strokeRect(-radius * 0.66, -radius * 0.66, radius * 1.32, radius * 1.32);
          context.restore();

          if (influence > 0.2) {
            context.beginPath();
            context.arc(x, y, 1.4 + influence * 1.7, 0, Math.PI * 2);
            context.fillStyle = `rgba(201, 226, 205, ${influence * 0.65})`;
            context.fill();
          }
        }
      }

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        const age = (time - ripple.born) / 1250;
        if (age >= 1) {
          ripples.splice(index, 1);
          continue;
        }
        context.beginPath();
        context.arc(ripple.x, ripple.y, 12 + age * 110, 0, Math.PI * 2);
        context.strokeStyle = `rgba(197, 166, 106, ${(1 - age) * 0.28})`;
        context.lineWidth = 1;
        context.stroke();
      }

      if (!reducedMotion || ripples.length > 0) frame = requestAnimationFrame(draw);
      else frame = 0;
    };

    const updatePointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
    };
    const clearPointer = () => { pointer.active = false; };
    const addRipple = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      ripples.push({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, born: performance.now() });
      if (frame === 0) frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", updatePointer);
    canvas.addEventListener("pointerleave", clearPointer);
    canvas.addEventListener("pointerdown", addRipple);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", updatePointer);
      canvas.removeEventListener("pointerleave", clearPointer);
      canvas.removeEventListener("pointerdown", addRipple);
    };
  }, []);

  return <canvas aria-hidden="true" className="pattern-canvas" ref={canvasRef} />;
}
