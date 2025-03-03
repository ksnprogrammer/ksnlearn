"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface DynamicBackgroundProps {
  lineColor?: string
  speed?: number
  lineCount?: number
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  lineColor = "#3b82f6",
  speed = 20,
  lineCount = 5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const lines: { x: number; y: number; length: number; speed: number }[] = []

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: (Math.random() + 0.5) * speed,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x - line.length, line.y)
        ctx.strokeStyle = lineColor
        ctx.lineWidth = 2
        ctx.stroke()

        line.x -= line.speed
        if (line.x < -line.length) {
          line.x = canvas.width + line.length
          line.y = Math.random() * canvas.height
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [lineColor, speed, lineCount])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-20" />
}

