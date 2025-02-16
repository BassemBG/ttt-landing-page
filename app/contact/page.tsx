"use client"

import { Button } from "@/components/ui/button";
import { Toggle } from "@radix-ui/react-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { FaEnvelopeOpen } from 'react-icons/fa'; // Example: Open envelope icon
import Link from "next/link";
import Navbar from "@/components/layout/navbar";


export default function ContactPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">

    <Navbar />

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
                <h2 className="text-5xl text-white font-bold drop-shadow-[4px_4px_0px_#8B4513] text-center mb-8">Get in touch</h2>

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
                    <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent rounded-md shadow-sm text-base font-extrabold text-black bg-white hover:bg-[#8B4513] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                    </button>
                </div>
                </form>

                {/* Envelope Icon (You'll need to install react-icons) */}
                <div className="absolute md:bottom-20 lg:bottom-20 bottom-40 right-[-10px] md:right-[-200px] lg:right-[-150px]">
                    <Image 
                        src="/envelope-realistic.png"  // Path to your image in the public directory
                        alt="Envelope Icon" 
                        width={120} // Adjust width as needed
                        height={64} // Adjust height as needed
                        style={{ transform: 'rotate(65deg)' }} // Inline style for extra rotation
                        className="md:w-64 lg:w-72 xl:w-80 sm:w-48 xs:w-40" // Responsive sizes

                    />
                </div>


            </div>

      </section>
    </div>
  );
};
