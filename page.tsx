"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/time-home%20(1)-2D2mHRgT0z40P8VizNDnFyWzlJYdyt.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <nav
            className={`
            md:flex items-center gap-6
            ${
              isMenuOpen
                ? "absolute top-full left-0 right-0 bg-white p-4 flex flex-col items-start gap-4 border-b shadow-lg"
                : "hidden"
            }
          `}
          >
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Home
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Services
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              About Us
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+1-888-555-5555" className="hidden md:block text-neutral-600">
              +1 888 555 5555
            </a>
            <Button variant="ghost" className="hidden md:inline-flex text-neutral-600">
              Sign in
            </Button>
            <Button className="hidden md:inline-flex bg-[#B45309] hover:bg-[#92400E] text-white">Contact Us</Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Map Background */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.7)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-image-2A0yOGP3DojEjUBzdjEKdPmlGZMCLc.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">A little place of time travel</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Step into a world where the past meets the present. Experience history like never before through our
              immersive virtual journeys.
            </p>
            <Button className="bg-[#B45309] hover:bg-[#92400E] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg">
              Start Your Journey
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120V50C1440 50 1088 120 720 120C352 120 0 50 0 50V120Z" /> {/* Updated SVG path */}
          </svg>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alone-image-after-key-milestone-samzzFpR0Gwxvqy9KvfQlG44ELrXEi.jpeg"
              alt="Experience"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2C1810]">Experiences</h2>
            <p className="text-neutral-600 mb-6">
              Our team is composed of experienced historians and VR developers. We offer engaging educational
              experiences for all ages, designed to spark curiosity and foster a love for history through interactive VR
              adventures.
            </p>
            <Button variant="outline" className="border-[#B45309] text-[#B45309] hover:bg-[#B45309] hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/key-milestones-bg-image-GFbP5ArDLbk6vdXzNPgQy0PH5x4hwf.jpeg"
                alt="Key Milestone"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Key Milestone</h3>
                <p className="text-white/80">Reach a significant milestone in our journey</p>
              </div>
            </div>
            <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/innovation-hub-bg-image-6Hnj3X87e0Mm6x9r4cyUrXTHNm3BuI.jpeg"
                alt="Innovation Hub"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Innovation Hub</h3>
                <p className="text-white/80">Where transformation begins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our mission",
                description:
                  "Our aim is to make your journey through history an enjoyable, enlightening, and transformative experience.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/our-mission-image-86Whl9OVCxPyKIxvmGtrlCK8WUbvYW.jpeg",
              },
              {
                title: "For every explorer",
                description:
                  "Each experience is tailored to meet the interests and learning styles of our users, ensuring a journey of discovery that produces knowledge and understanding.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/for-every-explorer-image-iNbsBPMK5wfQL6qMT6HCOzgIo4QO7w.jpeg",
              },
              {
                title: "Open-door policy",
                description:
                  "We invite you to explore our VR experiences and make up your own opinion at any time through our open-door policy.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-door-policy-image-TiuUW24cUJclHosntS68I8BcgzvB9S.jpeg",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-48 md:w-48 md:h-48 mx-auto mb-6 rounded-[2rem] overflow-hidden bg-[#F3E8E2]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#2C1810]">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Icons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8 text-[#2C1810]">Our finest selection</h2>
          <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-12">
            {["About us", "Our team", "Virtual Destinations", "Events", "Visit us"].map((item) => (
              <div key={item} className="text-center group cursor-pointer">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 bg-[#F3E8E2] rounded-full flex items-center justify-center transition-colors group-hover:bg-[#B45309]">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#B45309] group-hover:text-white" />
                </div>
                <p className="text-xs md:text-sm text-neutral-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-[#FDF7F4] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-[#2C1810]">2,000 explorers</h2>
          <p className="text-neutral-600 mb-6 md:mb-8">have embarked on our virtual journeys.</p>
          <Button className="bg-[#B45309] hover:bg-[#92400E] text-white">Contact Us</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/time-home%20(1)-2D2mHRgT0z40P8VizNDnFyWzlJYdyt.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white">
                <span className="sr-only">Facebook</span>
                {/* Facebook icon */}
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <span className="sr-only">Twitter</span>
                {/* Twitter icon */}
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <span className="sr-only">Instagram</span>
                {/* Instagram icon */}
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <p className="text-center md:text-left">
                789 Executive Park Blvd, Suite 500 - San Francisco CA 94124, United States
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <p>+1 888 555 5555</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>Copyright © Company name</p>
            <p className="mt-2">
              Powered by <span className="font-medium">Next</span> • Create a free website
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

