"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Menu, X, Mail, ScanSearch, UsersRound, MonitorPlay, CalendarClock, Telescope } from "lucide-react"
import { useState } from "react"
import { FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { GrGroup } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link"
import Navbar from "@/components/layout/navbar"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section with Map Background */}
      <section className="relative min-h-[100vh] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.8), rgba(44, 24, 16, 0.3)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-image-2A0yOGP3DojEjUBzdjEKdPmlGZMCLc.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container md:mx-20 px-4 md:pl-10 relative z-10 pt-24">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-5xl lg:text-6xl mb-6">
              A little place
              <br />
              of time travel
              </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Step into a world where the past meets the present. Experience history like never before through our
              immersive virtual journeys.
            </p>
            <Button className="bg-[#D2996C] hover:bg-[#d2a27c] text-[#212529] px-6 py-7 md:px-6 md:py-7 text-lg md:text-xl">
              Start Your Journey <span className="ml-4"><IoIosArrowForward /></span>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F7F3F3" fillOpacity="1" d="M0,320L24,298.7C48,277,96,235,144,234.7C192,235,240,277,288,261.3C336,245,384,171,432,149.3C480,128,528,160,576,165.3C624,171,672,149,720,133.3C768,117,816,107,864,133.3C912,160,960,224,1008,218.7C1056,213,1104,139,1152,106.7C1200,75,1248,85,1296,74.7C1344,64,1392,32,1416,16L1440,0L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-20 bg-[#F7F3F3]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden h-[400px]">
            <Image
              src="experiences-image.jpeg"
              alt="Experience"
              width={600}
              height={300}
              className="w-full object-cover"
            />
          </div>
          <div className="md:pl-[80px] flex flex-col gap-6 md:pt-[80px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#2C1810]">Experiences</h2>
            <p className="text-neutral-700 mb-6">
              Our team is composed of experienced historians and VR developers. 
              <br />
              <br />
              We offer engaging educational
              experiences for all ages, designed to spark curiosity and foster a love for history through interactive VR
              adventures.
            </p>
            <Button variant="outline" className=" w-fit text-md p-5 rounded-3xl text-black bg-[#cac8c8] hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-4">
            <div className="relative h-[250px] md:h-[550px] rounded-2xl overflow-hidden group">
              <Image
                src="key-milestones-bg-image.jpeg"
                alt="Key Milestone"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8 flex flex-col justify-start">
                <h3 className="text-xl md:text-7xl font-thin text-white mb-2">
                  Key
                  <br />
                  Milestone
                  </h3>
                <p className="text-white/80">Reach a significant milestone in our journey</p>
              </div>
            </div>
            <div className="relative h-[250px] md:h-[550px] rounded-2xl overflow-hidden group">
              <Image
                src="innovation-hub-bg-image.jpeg"
                alt="Innovation Hub"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8 flex flex-col justify-start">
                <h3 className="text-xl md:text-7xl font-thin text-white mb-2">
                  Innovation
                  <br />
                  Hub
                  </h3>
                <p className="text-white/80">Where transformation begins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-12 md:py-20">
        <div className="container md:h-[70vh] mx-auto px-4">
          <div className="grid md:grid-cols-3 md:h-full gap-8">
            {[
              {
                title: "Our mission",
                description:
                  "Our aim is to make your journey through history an enjoyable, enlightening, and transformative experience.",
                image:
                  "our-mission-image.jpeg",
                class: "img-blob-1",
              },
              {
                title: "For every explorer",
                description:
                  "Each experience is tailored to meet the interests and learning styles of our users, ensuring a journey of discovery that produces knowledge and understanding.",
                image:
                  "for-every-explorer-image.jpeg",
                  class: "img-blob-2",
              },
              {
                title: "Open-door policy",
                description:
                  "We invite you to explore our VR experiences and make up your own opinion at any time through our open-door policy.",
                image:
                  "open-door-policy-image.jpeg",
                  class: "img-blob-3",
              },
            ].map((item, index) => (
              <div key={index} className="text-center md:h-full flex flex-col">
                <div className="h-48 md:w-80 md:h-[350px] mx-auto overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className={`w-full h-full object-cover ${item.class}`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#2C1810]">{item.title}</h3>
                <p className="text-neutral-600 justify-end px-11 pt-5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Icons */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-4xl text-center mb-8 text-[#2C1810]">Our finest selection</h2>
          <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:gap-12">
            {[
              {
                title: "About us",
                icon: <ScanSearch className="text-yellow-700 w-full"/>,
              },
              {
                title: "Our Team",
                icon: <UsersRound className="text-yellow-700 w-full"/>,
              },
              {
                title: "Virtual Destinations",
                icon: <MonitorPlay className="text-yellow-700 w-full"/>,
              }, 
              {
                title: "Events",
                icon: <CalendarClock className="text-yellow-700 w-full"/>,
              },
              {
                title: "Visit us",
                icon: <Telescope className="text-yellow-700 w-full"/>,
              }
            ].map((item) => (
              <div key={item} className="text-center group cursor-pointer border-4 border-dotted border-black/50 p-4 rounded-3xl">
                <div className="w-14 h-12 md:w-20 md:h-20 mx-auto mb-2 bg-[#F3E8E2] rounded-full flex items-center justify-center transition-colors group-hover:bg-[#B45309]">
                  {item.icon}
                </div>
                <h2 className="text-xs md:text-xl text-neutral-600">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-[#FDF7F4] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl mb-4 text-[#2C1810]">
            2,000 explorers
            <br /> 
            have embarked on our virtual journeys. 
          </h2>
          <p className="text-neutral-600 mb-6 md:mb-8">Entrust us with your curiosity and explore history with peace of mind.</p>
          <Button className="bg-[#D2996C] hover:bg-[#d2a27c] text-[#212529] px-6 md:px-8 py-4 md:py-7 text-lg">Contact Us</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c0f0a] text-white py-8 md:py-12">
        <div className="container px-4">
        <div className="flex gap-4 justify-center items-center mb-4 mx-auto">
          <a
            href="#" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label="facebook"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 transition duration-300">
              <FaFacebook />
            </div>
          </a>

          <a
            href="#" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label="x"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 transition duration-300">
              <FaXTwitter />
            </div>
          </a>

          <a
            href="#" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label="linkedin"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-gray-100 transition duration-300">
              <FaLinkedin />
            </div>
          </a>
        </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row mb-4 items-center justify-center gap-4 text-md text-white">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <p className="text-center md:text-left">
                  789 Executive Park Blvd, Suite 500 - San Francisco CA 94124, United States
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10">
              <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <p className="text-[#dfb797]">+1 888 555 5555</p>
              </div>
              <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <p className="text-[#dfb797]">info@tunisianTimeTraveler.com</p>
              </div>
            </div>
          </div>
          
          <div className=" text-center text-sm text-white/60">
            <Image
              src="logo-white.png"
              alt="Logo"
              width={120}
              height={10}
              className="mx-auto"
            />  
            <p>Copyright © Tunisian-Time-Traveler</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

