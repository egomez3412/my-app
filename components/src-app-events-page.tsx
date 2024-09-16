'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input" // Updated path
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link'

type Event = {
  id: number
  title: string
  description: string
  date: string
  category: string
  image: string
}

const events: Event[] = [
  {
    id: 1,
    title: "Sarah & John's Wedding",
    description: "A beautiful summer wedding at Sunset Beach.",
    date: "June 15, 2023",
    category: "wedding",
    image: "/placeholder-image.jpg"
  },
  {
    id: 2,
    title: "Maria's Quinceañera",
    description: "A magical quinceañera celebration at Crystal Ballroom.",
    date: "May 3, 2023",
    category: "quinceanera",
    image: "/placeholder-image.jpg"
  },
  {
    id: 3,
    title: "Emily's Sweet 16",
    description: "A fun-filled sweet 16 party at Starlight Pavilion.",
    date: "April 22, 2023",
    category: "sweet16",
    image: "/placeholder-image.jpg"
  },
  {
    id: 4,
    title: "Baby Sophia's Baptism",
    description: "A heartwarming baptism ceremony at St. Mary's Church.",
    date: "March 10, 2023",
    category: "baptism",
    image: "/placeholder-image.jpg"
  },
  {
    id: 5,
    title: "Michael & Lisa's Wedding",
    description: "An elegant winter wedding at Pine Lodge.",
    date: "February 28, 2023",
    category: "wedding",
    image: "/placeholder-image.jpg"
  },
  {
    id: 6,
    title: "Carlos' Quinceañero",
    description: "A lively quinceañero celebration at Riverside Park.",
    date: "January 15, 2023",
    category: "quinceanera",
    image: "/placeholder-image.jpg"
  }
]

export function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filteredEvents, setFilteredEvents] = useState(events)

  useEffect(() => {
    const filtered = events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            event.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    setFilteredEvents(filtered)
  }, [searchTerm, selectedCategory])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Events</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="md:w-1/2">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="wedding">Weddings</SelectItem>
            <SelectItem value="quinceanera">Quinceañeras</SelectItem>
            <SelectItem value="sweet16">Sweet 16</SelectItem>
            <SelectItem value="baptism">Baptisms</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <Card key={event.id}>
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
              <p className="text-sm text-gray-500 mt-2">{event.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Custom Events</h2>
        <p className="mb-6">Don&apos;t see your event type listed? We also offer custom photography and videography services for a wide range of events. Contact us to discuss your specific needs.</p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}