import React, { useEffect, useRef, useMemo } from 'react';

interface DynamicBackgroundProps {
  lineColor?: string;
  speed?: number;
  lineCount?: number;
  opacity?: number;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  lineColor = '#3b82f6',
  speed = 25,
  lineCount = 12,
  opacity = 0.15,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const lines = useMemo(() => {
    return Array.from({ length: lineCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      length: Math.random() * 200 + 150,
      speed: (Math.random() * 0.5 + 0.2) * speed,
      angle: Math.random() * Math.PI * 0.25 - Math.PI * 0.125,
    }));
  }, [lineCount, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;
      
      lines.forEach((line) => {
        ctx.beginPath();
        const endX = line.x - Math.cos(line.angle) * line.length;
        const endY = line.y + Math.sin(line.angle) * line.length;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(endX, endY);
        
        const gradient = ctx.createLinearGradient(
          line.x, line.y,
          line.x - Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        gradient.addColorStop(0, lineColor);
        gradient.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.shadowColor = lineColor;
        ctx.shadowBlur = 12;
        ctx.stroke();

        line.x -= line.speed;
        if (line.x < -line.length) {
          line.x = canvas.width + line.length;
          line.y = Math.random() * canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [lineColor, speed, lineCount, opacity, lines]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%)',
        filter: 'blur(0.8px)',
      }}
    />
  );
};

export { DynamicBackground };
export default DynamicBackground;