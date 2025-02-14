"use client"

import { Button } from "@/components/ui/button";
import { Toggle } from "@radix-ui/react-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link";
import Navbar from "@/components/layout/navbar";

export default function ExplorePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const images = [
      "/innovation-hub-bg-image.jpeg",
      "/alone-image-after-key-milestone.jpeg",
      "/explore-1.jpeg",
      "/explore-2.jpeg",
      "/explore-3.jpeg",
      "/explore-4.jpeg",
    ];
    

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

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
              <div className="lg:w-2/3 flex flex-col sm:flex-row gap-4 items-center sm:items-stretch justify-center">
                  <div className="rotate_gallery relative w-[250px] h-[250px] flex items-center justify-center">
                    {images.map((src, i) => (
                      <div
                        key={i}
                        className="absolute"
                        style={{
                          transform: `rotateY(${i * (360 / images.length)}deg) translateZ(var(--distance))`,
                        }}
                        data-size="responsive"
                      >
                        <Image src={src} alt={`image-${i}`} width={0} height={0} className="hover:scale-125 transition-transform duration-700 ease-in-out rounded-lg aspect-square object-cover w-[120px] sm:w-[100px] md:w-[120px] lg:w-[200px]" />
                      </div>
                    ))}
                  </div>
              </div>


          </div>
      </section>
    </div>
  );
};
