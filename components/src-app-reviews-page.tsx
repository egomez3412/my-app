'use client'

import { Star, User } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const reviews = [
  {
    id: 1,
    name: "Maria Rodriguez",
    rating: 5,
    date: "June 15, 2023",
    content: "Guerrero Foto Y Video captured our wedding beautifully! The team was professional, creative, and made us feel comfortable throughout the day. The photos and video exceeded our expectations!"
  },
  {
    id: 2,
    name: "John Smith",
    rating: 5,
    date: "May 3, 2023",
    content: "We hired Guerrero for our daughter's quinceañera, and we couldn't be happier with the results. They truly captured the essence of the celebration, and the video brings tears to our eyes every time we watch it."
  },
  {
    id: 3,
    name: "Sofia Gonzalez",
    rating: 4,
    date: "April 22, 2023",
    content: "The team at Guerrero Foto Y Video did an amazing job at our family reunion. They were patient with our large group and managed to get everyone in the photos. The only reason for 4 stars instead of 5 is that we wished the turnaround time was a bit quicker."
  },
  {
    id: 4,
    name: "Michael Chen",
    rating: 5,
    date: "March 10, 2023",
    content: "We used Guerrero for our engagement photos and couldn't be more thrilled. They found the perfect locations and made us feel at ease in front of the camera. We'll definitely be using them for our wedding!"
  },
  {
    id: 5,
    name: "Emily Johnson",
    rating: 5,
    date: "February 28, 2023",
    content: "Guerrero Foto Y Video did an outstanding job at my sister's sweet 16 party. They captured all the special moments and the video montage they created was absolutely perfect. Highly recommend!"
  },
  {
    id: 6,
    name: "David Thompson",
    rating: 4,
    date: "January 15, 2023",
    content: "We had a great experience with Guerrero for our corporate event. The photos were high-quality and they delivered them promptly. The only suggestion would be to offer more package options for business events."
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  )
}

export function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Client Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <User className="w-8 h-8 text-gray-400" />
                <div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.date}</CardDescription>
                </div>
              </div>
              <StarRating rating={review.rating} />
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">{review.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}