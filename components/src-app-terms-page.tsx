'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Exclusive Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This studio is the exclusive photographer for the event. Additional photographers may only be allowed at the studio&apos;s discretion.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Use of Media</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The studio reserves the right to use any negatives or videos for sample reproduction or publications. All negatives and original video footage remain the property of the studio.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes & Cancellations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Any changes to the event schedule or location must be communicated to the studio at least 48 hours before the event. In the event of cancellation by the client, the deposit is non-refundable.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The studio will take all necessary precautions to ensure proper exposure, editing, and delivery of photographs/videos. In case of accidental damage or loss of negatives or original video footage, only the amount paid up to that point will be refunded.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Artistic Discretion</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The studio retains full creative control over photo composition, video sequence, and musical arrangements. Any specific requests from the client must be documented in this contract.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Photo Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p>On the day of the event, the client must inform the photographer of specific shots they would like. The studio is not responsible for shots not requested at the time of the event.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Event Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Photography and videography services will be provided until 9:30 PM on the event day.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No part of the order will be delivered until the total balance is paid in full. The final payment will only be accepted in cash.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Photos</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Clients have the option to purchase extra photographs not included in their original package. The studio will determine which photos are considered &quot;extra.&quot;</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Authorized Copies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Clients are authorized to make copies only of the photographs they have paid for. Unauthorized copies must be compensated to the studio.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Late Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <p>A late fee of 20% of the balance will be applied if payment is not completed within two months of the event date.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Package Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <p>An additional $50 fee will apply if enlargements, included in the package, are not ordered within 30 days of receiving the package.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}