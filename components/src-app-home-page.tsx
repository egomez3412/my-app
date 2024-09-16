'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from 'lucide-react'


const events = [
  {
    id: 1,
    title: "Sarah & John's Wedding",
    description: "A beautiful summer wedding at Sunset Beach.",
    date: "June 15, 2023",
    image: "/placeholder-image.jpg"
  },
  {
    id: 2,
    title: "Maria's Quinceañera",
    description: "A magical quinceañera celebration at Crystal Ballroom.",
    date: "May 3, 2023",
    image: "/placeholder-image.jpg"
  },
  {
    id: 3,
    title: "Emily's Sweet 16",
    description: "A fun-filled sweet 16 party at Starlight Pavilion.",
    date: "April 22, 2023",
    image: "/placeholder-image.jpg"
  }
]

const reviews = [
  {
    id: 1,
    content: "Guerrero Foto Y Video captured our wedding beautifully! The team was professional, creative, and made us feel comfortable throughout the day.",
    author: "Maria Rodriguez",
    rating: 5
  },
  {
    id: 2,
    content: "We hired Guerrero for our daughter's quinceañera, and we couldn't be happier with the results. They truly captured the essence of the celebration.",
    author: "John Smith",
    rating: 5
  },
  {
    id: 3,
    content: "The team at Guerrero Foto Y Video did an amazing job at our family reunion. They were patient with our large group and managed to get everyone in the photos.",
    author: "Sofia Gonzalez",
    rating: 4
  }
]

export function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="container mx-auto px-4 pt-16 md:pt-0"> {/* Added pt-16 for mobile view */}
      <div className="relative h-screen md:h-screen mb-12 flex items-center justify-center"> {/* Adjusted height and centering */}
        <div className="relative w-full h-full max-w-xs md:max-w-7xl rounded-xl overflow-hidden"> {/* Set max width for video container and added rounded-xl */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-xl" // Added rounded-xl
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center rounded-xl"> {/* Added rounded-xl */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Guerrero Foto Y Video</h1>
              <p className="text-xl md:text-2xl text-white">Capturing your special moments with passion and creativity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Events Section */}
      <section className="mb-12 px-4 md:px-0"> {/* Added padding for mobile view */}
        <h2 className="text-3xl font-bold text-center mb-6">Our Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-xl" // Added rounded-t-xl
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="mb-12 px-4 md:px-0"> {/* Added padding for mobile view */}
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-center text-lg mb-6">
          Guerrero Foto Y Video is dedicated to capturing your most precious moments with creativity and passion. 
          Our team of skilled photographers and videographers brings years of experience to every event.
        </p>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="mb-12 px-4 md:px-0"> {/* Added padding for mobile view */}
        <h2 className="text-3xl font-bold text-center mb-6">Client Reviews</h2>
        {isClient && (
          <div className="relative max-w-xl mx-auto overflow-hidden"> {/* Added overflow-hidden */}
            <Carousel>
              <CarouselContent>
                {reviews.map((review) => (
                  <CarouselItem key={review.id}>
                    <Card>
                      <CardContent className="p-6">
                        <p className="mb-4">{review.content}</p>
                        <h5 className="font-semibold">{review.author}</h5>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 md:block hidden z-10" /> {/* Ensure visibility on desktop */}
              <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 md:block hidden z-10" /> {/* Ensure visibility on desktop */}
            </Carousel>
          </div>
        )}
        <div className="text-center mt-6"> {/* Added button for more client reviews */}
          <Button asChild>
            <Link href="/reviews">More Reviews</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}