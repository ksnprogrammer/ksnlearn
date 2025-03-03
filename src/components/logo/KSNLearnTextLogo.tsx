import React, { useState } from 'react';
import { KSNLearnLogo } from './KSNLearnLogo';

interface KSNLearnTextLogoProps {
  variant?: "default" | "monochrome" | "outline" | "minimal";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
  vertical?: boolean;
}

export function KSNLearnTextLogo({
  variant = "default",
  size = "md",
  className = "",
  animated = true,
  vertical = false,
}: KSNLearnTextLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: vertical ? "h-20" : "h-8",
    md: vertical ? "h-32" : "h-12",
    lg: vertical ? "h-48" : "h-16",
    xl: vertical ? "h-64" : "h-24",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-5xl",
  };

  return (
    <div
      className={`flex items-center ${vertical ? "flex-col" : "flex-row"} ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <KSNLearnLogo variant={variant} size={size} animated={animated} />

      <div className={`font-bold ${textSizeClasses[size]} ${vertical ? "mt-4" : "ml-4"}`}>
        <span
          className={`transition-colors duration-300 ${
            variant === "default"
              ? isHovered
                ? "text-blue-400"
                : "text-blue-500"
              : "text-white"
          }`}
        >
          KSN
        </span>
        <span
          className={`transition-colors duration-300 ${
            variant === "default"
              ? isHovered
                ? "text-red-400"
                : "text-red-500"
              : "text-gray-300"
          }`}
        >
          Learn
        </span>
      </div>
    </div>
  );
}

export default KSNLearnTextLogo;