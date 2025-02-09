"use client"

import { Button } from "@/components/ui/button";
import { Toggle } from "@radix-ui/react-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function ExplorePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMonthly, setIsMonthly] = useState(true);
    const plans = [
        {
          title: "Free",
          price: "$0",
          features: ["Access to 200+ free lessons", "Access to our social media community"],
          cta: "Join for Free",
          ctaClass: "bg-[#C4A484] hover:bg-[#B8937A]",
          isPro: false,
        },
        {
          title: "Pro",
          price: "$9",
          features: [
            "Access to our 500+ free and premium lessons",
            "Weekly live stream and exclusive Q&As",
            "Access to our exclusive insider group",
          ],
          cta: "Join Pro",
          ctaClass: "bg-[#C4A484] hover:bg-[#B8937A]",
          isPro: true,
        },
        {
          title: "Pro Plus",
          price: "$19",
          features: ["Everything in Pro", "30 minutes 1-on-1 mentorship with our Senior Designer"],
          cta: "Join Pro Plus",
          ctaClass: "bg-[#C4A484] hover:bg-[#B8937A]",
          isPro: false,
        },
      ]


  return (
    <div className="min-h-screen bg-white">

    <header className="fixed top-0 w-full bg-white backdrop-blur-sm z-50">
    <div className="container mx-auto px-4  flex items-center justify-between">
      <Image
        src="logo.png"
        alt="Logo"
        width={65}
        height={10}
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
        <a href="/" className="text-neutral-600 hover:text-neutral-900">
          Home
        </a>
        <a href="/explore" className="text-neutral-600 hover:text-neutral-900">
          Explore
        </a>
        <a href="/pricing" className="text-neutral-600 hover:text-neutral-900">
          Pricing
        </a>
        <a href="/contact" className="text-neutral-600 hover:text-neutral-900">
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <a href="tel:+1-888-555-5555" className="hidden md:block text-neutral-600">
          +216 20 000 000
        </a>
        {/* <Button variant="ghost" className="hidden md:inline-flex text-neutral-600">
          Sign in
        </Button> */}
        <Button className="hidden md:inline-flex bg-[#B45309] hover:bg-[#92400E] text-white">Contact Us</Button>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
    </div>
  </header>

    <section className="relative min-h-[100vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.1), rgba(44, 24, 16, 0.1)), url('bg-pricing.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container md:mx-10 md:pl-10 z-10 pt-24 flex justify-between flex-col md:flex-row lg:flex-row max-w-full mx-auto gap-10 lg:gap-20 items-center">
            {/* left side with text*/}
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl md:text-4xl font-bold text-amber-950 lg:text-8xl mb-6">
              Explore History
              </h1>
              <h3 className="text-xl md:text-2xl font-normal text-black lg:text-4xl mb-6">
              Travel Through Time with us !
              </h3>
            <p className="text-lg md:text-lg font-thin text-white opacity-90 mb-8">
              Discover Tunisia's fascinating history like never before. Dive into immersive AR/VR experiences and relive the great moments of our historical heritage.
            </p>
            <Button className="bg-[#3c220d] hover:bg-[#d2a27c] text-white px-6 py-7 md:px-6 md:py-7 text-lg md:text-xl">
                Explore More
            </Button>

          </div>

            {/* right side with cards*/}
            <div className="lg:w-2/3 flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
                <p>The ring way of showing images is still in research.  :-)</p>
            </div>


        </div>
      </section>
    </div>
  );
};
