'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Guerrero Foto Y Video</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Guerrero Foto Y Video was founded in 2010 with a passion for capturing life&apos;s most precious moments. Our team of skilled photographers and videographers has years of experience in immortalizing weddings, quinceañeras, baptisms, and other special events.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our mission is to provide high-quality photography and videography services that tell your unique story. We believe that every moment is special, and we strive to capture the emotion, beauty, and essence of your events in a way that you&apos;ll cherish for years to come.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <Image
            src="/placeholder-image.jpg"
            alt="John Guerrero"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>John Guerrero</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lead Photographer</p>
          </CardContent>
        </Card>

        <Card>
          <Image
            src="/placeholder-image.jpg"
            alt="Maria Guerrero"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>Maria Guerrero</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lead Videographer</p>
          </CardContent>
        </Card>

        <Card>
          <Image
            src="/placeholder-image.jpg"
            alt="Carlos Guerrero"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>Carlos Guerrero</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Editor & Post-production Specialist</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}