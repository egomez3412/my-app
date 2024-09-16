'use client'

import { useState } from 'react'
import Link from 'next/link'

export function NavigationComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-gray-800">
          Guerrero Foto Y Video
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
          <Link href="/reviews" className="text-gray-800 hover:text-gray-600">Reviews</Link>
          <Link href="/packages" className="text-gray-800 hover:text-gray-600">Packages</Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">About Us</Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
          <Link href="/events" className="text-gray-800 hover:text-gray-600 active:font-bold">
            Events
          </Link>
          <Link href="/terms" className="text-gray-800 hover:text-gray-600">Terms</Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-30 p-6">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none mb-4">
              Close
            </button>
            <nav className="space-y-4">
              <Link href="/" className="block text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Home</Link>
              <Link href="/reviews" className="block text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Reviews</Link>
              <Link href="/packages" className="block text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Packages</Link>
              <Link href="/about" className="block text-gray-800 hover:text-gray-600" onClick={toggleMenu}>About Us</Link>
              <Link href="/contact" className="block text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Contact</Link>
              <Link href="/events" className="block text-gray-800 hover:text-gray-600 active:font-bold" onClick={toggleMenu}>Events</Link>
              <Link href="/terms" className="block text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Terms</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}