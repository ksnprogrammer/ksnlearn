"use client"

import { useState } from "react"
import { DynamicBackground } from "@/components/DynamicBackground"
import Link from "next/link"

export default function Customize() {
  const [lineColor, setLineColor] = useState("#3b82f6")
  const [speed, setSpeed] = useState(20)
  const [lineCount, setLineCount] = useState(5)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <DynamicBackground lineColor={lineColor} speed={speed} lineCount={lineCount} />
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Customize Background</h1>
        <div className="space-y-4">
          <div>
            <label htmlFor="lineColor" className="block text-sm font-medium text-gray-700">
              Line Color
            </label>
            <input
              type="color"
              id="lineColor"
              value={lineColor}
              onChange={(e) => setLineColor(e.target.value)}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label htmlFor="speed" className="block text-sm font-medium text-gray-700">
              Speed: {speed}
            </label>
            <input
              type="range"
              id="speed"
              min="1"
              max="50"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label htmlFor="lineCount" className="block text-sm font-medium text-gray-700">
              Line Count: {lineCount}
            </label>
            <input
              type="range"
              id="lineCount"
              min="1"
              max="20"
              value={lineCount}
              onChange={(e) => setLineCount(Number(e.target.value))}
              className="mt-1 block w-full"
            />
          </div>
        </div>
        <div className="mt-8">
          <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

