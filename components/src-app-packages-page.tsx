'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { VideoCameraIcon, DevicePhoneMobileIcon, PhotoIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const packages = [
  {
    name: "Photography Package",
    features: [
      "Full event coverage",
      "High-resolution digital files",
      "Online gallery",
      "Professional editing",
    ],
  },
  {
    name: "Videography Package",
    features: [
      "Full event coverage",
      "Professional editing",
      "Background music",
      "Digital delivery",
    ],
  },
  {
    name: "Complete Package",
    features: [
      "Full photography coverage",
      "Full videography coverage",
      "High-resolution digital files",
      "Professionally edited video",
      "Online gallery",
      "Digital delivery",
    ],
  },
]

const addOns = [
  { name: "Digital Album (11 x 14)", icon: PhotoIcon },
  { name: "Blu-Ray", icon: DevicePhoneMobileIcon },
  { name: "Texturized Acrylic USB", icon: DevicePhoneMobileIcon },
  { name: "Framed Entrance Photo (20 x 24)", icon: PhotoIcon },
  { name: "Beach Session", icon: PhotoIcon },
  { name: "16 x 20 Photo", icon: PhotoIcon },
  { name: "20 x 24 Photo", icon: PhotoIcon },
  { name: "Slide-Show", icon: VideoCameraIcon },
  { name: "Pictures Backup USB", icon: CloudArrowUpIcon },
]

export function PackagesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Packages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 mt-auto">
              <Button className="w-full" onClick={() => window.location.href='/contact'}>Book Now</Button>
            </div>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">Add-Ons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {addOns.map((addon, index) => {
          const Icon = addon.icon;
          return (
            <Card key={index} className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <Icon className="mr-2 h-6 w-6 text-gray-700" />
                <CardTitle className="text-lg">{addon.name}</CardTitle>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Notices</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>A non-refundable deposit of $500 is required to secure your date.</li>
          <li>All prices are in USD.</li>
          <li>Packages can be customized to fit your specific needs. Please contact us for more information.</li>
          <li>Travel fees may apply for locations outside our service area.</li>
        </ul>
      </div>
    </div>
  )
}