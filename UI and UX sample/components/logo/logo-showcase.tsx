"use client"

import { useState } from "react"
import { KSNLearnLogo } from "./ksnlearn-logo"
import { KSNLearnTextLogo } from "./ksnlearn-text-logo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Download, Copy, Check } from "lucide-react"

export default function LogoShowcase() {
  const [variant, setVariant] = useState<"default" | "monochrome" | "outline" | "minimal">("default")
  const [size, setSize] = useState<"sm" | "md" | "lg" | "xl">("lg")
  const [animated, setAnimated] = useState(true)
  const [vertical, setVertical] = useState(false)
  const [copied, setCopied] = useState(false)
  const [bgColor, setBgColor] = useState("#111111")

  const handleCopyCode = () => {
    const code = `<KSNLearnTextLogo variant="${variant}" size="${size}" animated={${animated}} vertical={${vertical}} />`
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">KSNLearn Logo</h1>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="variations">Variations</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div
                className="flex items-center justify-center p-12 rounded-lg transition-colors duration-300"
                style={{ backgroundColor: bgColor }}
              >
                <KSNLearnTextLogo variant={variant} size={size} animated={animated} vertical={vertical} />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Style</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={variant === "default" ? "default" : "outline"}
                      onClick={() => setVariant("default")}
                      className="w-full"
                    >
                      Default
                    </Button>
                    <Button
                      variant={variant === "monochrome" ? "default" : "outline"}
                      onClick={() => setVariant("monochrome")}
                      className="w-full"
                    >
                      Monochrome
                    </Button>
                    <Button
                      variant={variant === "outline" ? "default" : "outline"}
                      onClick={() => setVariant("outline")}
                      className="w-full"
                    >
                      Outline
                    </Button>
                    <Button
                      variant={variant === "minimal" ? "default" : "outline"}
                      onClick={() => setVariant("minimal")}
                      className="w-full"
                    >
                      Minimal
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Size</h3>
                  <div className="grid grid-cols-4 gap-2">
                    <Button
                      variant={size === "sm" ? "default" : "outline"}
                      onClick={() => setSize("sm")}
                      className="w-full"
                    >
                      Small
                    </Button>
                    <Button
                      variant={size === "md" ? "default" : "outline"}
                      onClick={() => setSize("md")}
                      className="w-full"
                    >
                      Medium
                    </Button>
                    <Button
                      variant={size === "lg" ? "default" : "outline"}
                      onClick={() => setSize("lg")}
                      className="w-full"
                    >
                      Large
                    </Button>
                    <Button
                      variant={size === "xl" ? "default" : "outline"}
                      onClick={() => setSize("xl")}
                      className="w-full"
                    >
                      XL
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="animated">Animation</Label>
                      <Switch id="animated" checked={animated} onCheckedChange={setAnimated} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="vertical">Vertical Layout</Label>
                      <Switch id="vertical" checked={vertical} onCheckedChange={setVertical} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Background Color</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-5 gap-2">
                      <button
                        className="w-full h-8 rounded-md border border-gray-600 bg-black"
                        onClick={() => setBgColor("#000000")}
                      />
                      <button
                        className="w-full h-8 rounded-md border border-gray-600 bg-gray-900"
                        onClick={() => setBgColor("#111111")}
                      />
                      <button
                        className="w-full h-8 rounded-md border border-gray-600 bg-gray-800"
                        onClick={() => setBgColor("#1f2937")}
                      />
                      <button
                        className="w-full h-8 rounded-md border border-gray-600 bg-white"
                        onClick={() => setBgColor("#ffffff")}
                      />
                      <button
                        className="w-full h-8 rounded-md border border-gray-600 bg-blue-900"
                        onClick={() => setBgColor("#1e3a8a")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Usage</h3>
                  <div className="relative">
                    <pre className="p-4 rounded-md bg-gray-900 text-gray-300 text-sm overflow-x-auto">
                      {`<KSNLearnTextLogo
  variant="${variant}"
  size="${size}"
  animated={${animated}}
  vertical={${vertical}}
/>`}
                    </pre>
                    <Button size="sm" variant="ghost" className="absolute top-2 right-2" onClick={handleCopyCode}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="variations" className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-gray-900 p-4 rounded-lg mb-4 w-full flex justify-center">
                  <KSNLearnLogo variant="default" size="lg" />
                </div>
                <p className="text-sm font-medium">Default</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-gray-900 p-4 rounded-lg mb-4 w-full flex justify-center">
                  <KSNLearnLogo variant="monochrome" size="lg" />
                </div>
                <p className="text-sm font-medium">Monochrome</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-gray-900 p-4 rounded-lg mb-4 w-full flex justify-center">
                  <KSNLearnLogo variant="outline" size="lg" />
                </div>
                <p className="text-sm font-medium">Outline</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-gray-900 p-4 rounded-lg mb-4 w-full flex justify-center">
                  <KSNLearnLogo variant="minimal" size="lg" />
                </div>
                <p className="text-sm font-medium">Minimal</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-gray-900 p-4 rounded-lg mb-4 w-full flex justify-center">
                  <KSNLearnTextLogo variant="default" size="lg" />
                </div>
                <p className="text-sm font-medium">Horizontal Text Logo</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-gray-900 p-4 rounded-lg mb-4 w-full flex justify-center">
                  <KSNLearnTextLogo variant="default" size="lg" vertical />
                </div>
                <p className="text-sm font-medium">Vertical Text Logo</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Color Variations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg flex justify-center">
                  <KSNLearnTextLogo variant="default" size="md" />
                </div>
                <div className="bg-gray-900 p-4 rounded-lg flex justify-center">
                  <KSNLearnTextLogo variant="monochrome" size="md" />
                </div>
                <div className="bg-blue-900 p-4 rounded-lg flex justify-center">
                  <KSNLearnTextLogo variant="outline" size="md" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Export Options</h3>
              <p className="text-gray-400 mb-6">
                The logo is implemented as a React component using SVG, which makes it scalable and adaptable for
                various use cases. Here are some export options for different formats:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Vector Formats</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                      <span>SVG (Scalable Vector Graphics)</span>
                      <Button size="sm" disabled>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                      <span>AI (Adobe Illustrator)</span>
                      <Button size="sm" disabled>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                      <span>EPS (Encapsulated PostScript)</span>
                      <Button size="sm" disabled>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Raster Formats</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                      <span>PNG (Transparent Background)</span>
                      <Button size="sm" disabled>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                      <span>JPG (White Background)</span>
                      <Button size="sm" disabled>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </li>
                    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                      <span>WebP (Optimized for Web)</span>
                      <Button size="sm" disabled>
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Export Instructions</h4>
                <p className="text-gray-400 mb-4">To export the logo in different formats, you would typically:</p>
                <ol className="space-y-2 text-gray-400 list-decimal list-inside">
                  <li>Render the SVG component at the desired size</li>
                  <li>Use browser developer tools to copy the SVG code</li>
                  <li>Use a vector graphics editor like Adobe Illustrator or Inkscape to convert to other formats</li>
                  <li>For raster formats, render at 2x or 3x the intended display size for high-resolution displays</li>
                </ol>
                <p className="text-gray-400 mt-4">
                  Note: In a production environment, you would implement actual export functionality that generates and
                  downloads the files in various formats.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

