import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { LeadForm } from '@/components/LeadForm'
import ScrollAnimation from '@/components/ScrollAnimation'
import { Card } from '@/components/ui/card'
import React from 'react'

function BookADemo() {
  return (
    <div className="min-h-screen font-inter" id="bookademo">
      <Header />
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-purple-green relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">

          <ScrollAnimation>
            <h1 className="font-bebas text-6xl md:text-8xl leading-[0.85]">
              BOOK
              <span className="block text-purple">A DEMO</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6">
              Get in touch and let's grow your business.
            </p>
            <ScrollAnimation>
              {/* Page Content */}
              <div className="pt-10 bg-background">
                  <div className="sm:w-1/2 w-200 mx-auto">
                <Card className="sm:p-5 p-4">
                  <LeadForm />
                </Card>
                </div>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BookADemo