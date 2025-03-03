import React, { useState } from 'react';

interface KSNLearnLogoProps {
  variant?: "default" | "monochrome" | "outline" | "minimal";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
}

export function KSNLearnLogo({ 
  variant = "default", 
  size = "md", 
  className = "", 
  animated = true 
}: KSNLearnLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const getVariantColors = () => {
    switch (variant) {
      case "monochrome":
        return {
          primary: "white",
          secondary: "#cccccc",
          accent: "#999999",
          text: "white",
        };
      case "outline":
        return {
          primary: "none",
          secondary: "none",
          accent: "none",
          text: "white",
          stroke: "white",
        };
      case "minimal":
        return {
          primary: "none",
          secondary: "none",
          accent: "none",
          text: "white",
        };
      case "default":
      default:
        return {
          primary: "#10B981", // Biology green
          secondary: "#3B82F6", // Blue
          accent: "#8B5CF6", // Purple
          text: "white",
        };
    }
  };

  const colors = getVariantColors();

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary || "transparent"} />
            <stop offset="100%" stopColor={colors.secondary || "transparent"} />
          </linearGradient>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.secondary || "white"} />
            <stop offset="100%" stopColor={colors.accent || "white"} />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background hexagon */}
        <polygon
          points="50,10 90,30 90,70 50,90 10,70 10,30"
          fill={variant === "outline" ? "none" : "url(#bgGradient)"}
          stroke={colors.stroke || "none"}
          strokeWidth={variant === "outline" ? 2 : 0}
          className={animated ? "transition-all duration-300" : ""}
          transform={isHovered && animated ? "rotate(30)" : ""}
        />

        {/* DNA Helix */}
        <g
          className={animated ? "transition-transform duration-500" : ""}
          transform={isHovered && animated ? "translate(0, -5)" : ""}
        >
          {/* DNA Strand 1 */}
          <path
            d="M35,30 C45,40 55,35 65,45 C75,55 65,60 75,70"
            fill="none"
            stroke={colors.stroke || "url(#dnaGradient)"}
            strokeWidth={variant === "outline" ? 2 : 3}
            strokeLinecap="round"
            filter={variant !== "outline" && variant !== "minimal" ? "url(#glow)" : ""}
          />

          {/* DNA Strand 2 */}
          <path
            d="M35,70 C45,60 55,65 65,55 C75,45 65,40 75,30"
            fill="none"
            stroke={colors.stroke || "url(#dnaGradient)"}
            strokeWidth={variant === "outline" ? 2 : 3}
            strokeLinecap="round"
            filter={variant !== "outline" && variant !== "minimal" ? "url(#glow)" : ""}
          />

          {/* DNA Rungs */}
          <line
            x1="35"
            y1="30"
            x2="35"
            y2="70"
            stroke={colors.stroke || colors.accent || "white"}
            strokeWidth={variant === "outline" ? 1 : 2}
          />
          <line
            x1="45"
            y1="40"
            x2="45"
            y2="60"
            stroke={colors.stroke || colors.accent || "white"}
            strokeWidth={variant === "outline" ? 1 : 2}
          />
          <line
            x1="55"
            y1="35"
            x2="55"
            y2="65"
            stroke={colors.stroke || colors.accent || "white"}
            strokeWidth={variant === "outline" ? 1 : 2}
          />
          <line
            x1="65"
            y1="45"
            x2="65"
            y2="55"
            stroke={colors.stroke || colors.accent || "white"}
            strokeWidth={variant === "outline" ? 1 : 2}
          />
          <line
            x1="75"
            y1="30"
            x2="75"
            y2="70"
            stroke={colors.stroke || colors.accent || "white"}
            strokeWidth={variant === "outline" ? 1 : 2}
          />
        </g>

        {/* Lotus Flower (Sri Lankan cultural element) */}
        <g
          className={animated ? "transition-transform duration-500" : ""}
          transform={isHovered && animated ? "translate(0, 5) rotate(45)" : ""}
        >
          <circle cx="30" cy="50" r={variant === "minimal" ? 3 : 5} fill={colors.stroke || colors.primary || "white"} />
          {variant !== "minimal" && (
            <>
              <path
                d="M30,45 C25,40 20,42 25,50 C20,58 25,60 30,55"
                fill="none"
                stroke={colors.stroke || colors.primary || "white"}
                strokeWidth={variant === "outline" ? 1 : 2}
              />
              <path
                d="M30,45 C35,40 40,42 35,50 C40,58 35,60 30,55"
                fill="none"
                stroke={colors.stroke || colors.primary || "white"}
                strokeWidth={variant === "outline" ? 1 : 2}
              />
            </>
          )}
        </g>

        {/* K letter */}
        <text
          x="50"
          y="58"
          fontSize="24"
          fontWeight="bold"
          fontFamily="sans-serif"
          textAnchor="middle"
          fill={colors.text}
          className={animated ? "transition-all duration-300" : ""}
          transform={isHovered && animated ? "scale(1.1)" : ""}
        >
          K
        </text>
      </svg>
    </div>
  );
}

export default KSNLearnLogo;