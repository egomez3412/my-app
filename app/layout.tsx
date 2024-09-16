import { NavigationComponent } from '@/components/src-app-navigation'
import { FooterComponent } from '@/components/src-components-footer'
import ConditionalContent from '../components/conditional-component'
import Head from 'next/head'
import './globals.css'

export const metadata = {
  title: 'Guerrero Foto Y Video',
  description: 'Professional photography and video services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <NavigationComponent />
        <main className="flex-grow mt-16 p-4 pt-20">
          <ConditionalContent>{children}</ConditionalContent>
        </main>
        <FooterComponent />
      </body>
    </html>
  )
}
