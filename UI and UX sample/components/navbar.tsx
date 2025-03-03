"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  ChevronDown,
  FlaskRoundIcon as Flask,
  Atom,
  Dna,
  BookOpen,
  Home,
  Settings,
  Info,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-blue-500">KSN</span>
                <span className="text-red-500">Learn</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  >
                    <BookOpen className="w-4 h-4 mr-1" />
                    Subjects
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-black/90 border border-neon-blue/30">
                  <Link href="/subjects/biology">
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Dna className="w-4 h-4 mr-2 text-biology-from" />
                      <span className="gradient-text-biology">Biology</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/subjects/chemistry">
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Flask className="w-4 h-4 mr-2 text-chemistry-from" />
                      <span className="gradient-text-chemistry">Chemistry</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/subjects/physics">
                    <DropdownMenuItem className="flex items-center cursor-pointer">
                      <Atom className="w-4 h-4 mr-2 text-physics-from" />
                      <span className="gradient-text-physics">Physics</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/features"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Settings className="w-4 h-4 mr-1" />
                Features
              </Link>

              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Info className="w-4 h-4 mr-1" />
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Phone className="w-4 h-4 mr-1" />
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="relative overflow-hidden group">
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <div className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Subjects
              <div className="pl-4 mt-2 space-y-1">
                <Link
                  href="/subjects/biology"
                  className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Biology
                </Link>
                <Link
                  href="/subjects/chemistry"
                  className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Chemistry
                </Link>
                <Link
                  href="/subjects/physics"
                  className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                >
                  Physics
                </Link>
              </div>
            </div>
            <Link
              href="/features"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="px-2">
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

