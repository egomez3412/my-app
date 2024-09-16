'use client'

import { Inter } from 'next/font/google'
import { NavigationComponent } from './src-app-navigation'
import { FooterComponent } from './src-components-footer'

const inter = Inter({ subsets: ['latin'] })

export function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  )
}