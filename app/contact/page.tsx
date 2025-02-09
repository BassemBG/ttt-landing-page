"use client"

import { Button } from "@/components/ui/button";
import { Toggle } from "@radix-ui/react-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { FaEnvelopeOpen } from 'react-icons/fa'; // Example: Open envelope icon


export default function PricingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <a href="#" className="text-neutral-600 hover:text-neutral-900">
          Services
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

    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.2), rgba(44, 24, 16, 0.2)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-image-2A0yOGP3DojEjUBzdjEKdPmlGZMCLc.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
            <div className="relative w-full max-w-4xl mx-auto rounded-lg shadow-lg p-5 mt-10">
                {/* Title */}
                <h2 className="text-5xl font-black text-amber-950 text-center mb-8">Get in touch</h2>

                {/* Form */}
                <form className="space-y-4 bg-transparent/35 p-10 rounded-3xl">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="firstName" className="block text-white font-bold">First Name</label>
                    <input type="text" id="firstName" className="p-3 mt-1 w-full border-b-2 border-gray-300 focus:border-amber-950 focus:outline-none bg-transparent text-black sm:text-sm" placeholder="First Name" required />
                    </div>
                    <div>
                    <label htmlFor="lastName" className="block text-white font-bold">Last Name</label>
                    <input type="text" id="lastName" className="p-3 mt-1 w-full border-b-2 border-gray-300 focus:border-amber-950 focus:outline-none bg-transparent text-black sm:text-sm" placeholder="Last Name" required />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-white font-bold">Email</label>
                    <input type="email" id="email" className="p-3 mt-1 w-full border-b-2 border-gray-300 focus:border-amber-950 focus:outline-none bg-transparent text-black sm:text-sm" placeholder="Email" required />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-white font-bold">Phone Number</label>
                    <input type="tel" id="phone" className="p-3 mt-1 w-full border-b-2 border-gray-300 focus:border-amber-950 focus:outline-none bg-transparent text-black sm:text-sm" placeholder="Phone Number" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-white font-bold">Messages</label>
                    <textarea id="message" rows="4" className="p-3 mt-1 w-full border-b-2 border-gray-300 focus:border-amber-950 focus:outline-none bg-transparent text-black sm:text-sm" placeholder="Write your message here..." required></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent rounded-md shadow-sm text-base font-extrabold text-black bg-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                    </button>
                </div>
                </form>

                {/* Envelope Icon (You'll need to install react-icons) */}
                <div className="absolute md:bottom-20 lg:bottom-20 bottom-40 right-[-30px] md:right-[-200px] lg:right-[-200px]">
                    <Image 
                        src="/enveloppe.png"  // Path to your image in the public directory
                        alt="Envelope Icon" 
                        width={150} // Adjust width as needed
                        height={64} // Adjust height as needed
                        style={{ transform: 'rotate(25deg)' }} // Inline style for extra rotation
                        className="md:w-64 lg:w-72 xl:w-80 sm:w-48 xs:w-40" // Responsive sizes

                    />
                </div>


            </div>

      </section>
    </div>
  );
};
