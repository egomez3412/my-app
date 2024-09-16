'use client'

import Link from 'next/link'

export function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">Guerrero Foto Y Video</h3>
            <p className="mt-2">Capturing your special moments</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <p>© 2023 Guerrero Foto Y Video. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}