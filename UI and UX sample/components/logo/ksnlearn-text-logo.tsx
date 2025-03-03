"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { KSNLearnLogo } from "./ksnlearn-logo"

interface KSNLearnTextLogoProps {
  variant?: "default" | "monochrome" | "outline" | "minimal"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animated?: boolean
  vertical?: boolean
}

export function KSNLearnTextLogo({
  variant = "default",
  size = "md",
  className,
  animated = true,
  vertical = false,
}: KSNLearnTextLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    sm: vertical ? "h-20" : "h-8",
    md: vertical ? "h-32" : "h-12",
    lg: vertical ? "h-48" : "h-16",
    xl: vertical ? "h-64" : "h-24",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-5xl",
  }

  return (
    <div
      className={cn("flex items-center", vertical ? "flex-col" : "flex-row", sizeClasses[size], className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <KSNLearnLogo variant={variant} size={size} animated={animated} />

      <div className={cn("font-bold", textSizeClasses[size], vertical ? "mt-4" : "ml-4")}>
        <span
          className={cn("transition-colors duration-300", {
            "text-blue-500": variant === "default" && !isHovered,
            "text-blue-400": variant === "default" && isHovered,
            "text-white": variant !== "default",
          })}
        >
          KSN
        </span>
        <span
          className={cn("transition-colors duration-300", {
            "text-red-500": variant === "default" && !isHovered,
            "text-red-400": variant === "default" && isHovered,
            "text-gray-300": variant !== "default",
          })}
        >
          Learn
        </span>
      </div>
    </div>
  )
}

