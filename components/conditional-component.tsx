'use client'

import { usePathname } from 'next/navigation'
import { HomePage } from '@/components/src-app-home-page'

export default function ConditionalContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return pathname === '/' ? <HomePage /> : children
}