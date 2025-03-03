import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-blue-500">KSN</span>
                <span className="text-red-500">Learn</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              The leading online learning platform for Sri Lankan A/L students, offering comprehensive courses in
              Biology, Chemistry, and Physics with cutting-edge interactive tools and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-gray-400 hover:text-white text-sm">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="text-gray-400 hover:text-white text-sm">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Subjects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/subjects/biology" className="text-gray-400 hover:text-white text-sm">
                  <span className="gradient-text-biology">Biology</span>
                </Link>
                <p className="text-gray-500 text-xs mt-1">Cell biology, genetics, human physiology, ecology</p>
              </li>
              <li>
                <Link href="/subjects/chemistry" className="text-gray-400 hover:text-white text-sm">
                  <span className="gradient-text-chemistry">Chemistry</span>
                </Link>
                <p className="text-gray-500 text-xs mt-1">Organic, inorganic, physical, analytical</p>
              </li>
              <li>
                <Link href="/subjects/physics" className="text-gray-400 hover:text-white text-sm">
                  <span className="gradient-text-physics">Physics</span>
                </Link>
                <p className="text-gray-500 text-xs mt-1">Mechanics, electromagnetism, thermodynamics, quantum</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Subscribe to Newsletter</h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Stay updated with our latest courses and features</p>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  →
                </Button>
              </div>
              <div className="text-gray-400 text-xs">
                <p>123 Science Avenue</p>
                <p>Colombo 07</p>
                <p>Sri Lanka</p>
                <p className="mt-2">+94 11 234 5678</p>
                <p>+94 76 123 4567</p>
                <p className="mt-2">info@ksnlearn.com</p>
                <p>support@ksnlearn.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2023 KSNLearn. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

