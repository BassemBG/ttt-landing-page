"use client"; // Needed for useState in Next.js App Router

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust path if using a UI library
import { Menu, X } from "lucide-react"; // Ensure you have Lucide icons installed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={65} height={10} />
        </Link>
        <nav
          className={`md:flex items-center gap-6 ${
            isMenuOpen
              ? "absolute top-full left-0 right-0 bg-white p-4 flex flex-col items-start gap-4 border-b shadow-lg"
              : "hidden"
          }`}
        >
          <Link href="/home" className="text-neutral-600 hover:text-neutral-900">Home</Link>
          <Link href="/explore" className="text-neutral-600 hover:text-neutral-900">Explore</Link>
          <Link href="/pricing" className="text-neutral-600 hover:text-neutral-900">Pricing</Link>
          <Link href="/contact" className="text-neutral-600 hover:text-neutral-900">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+21620000000" className="hidden md:block text-neutral-600">
            +216 55 566 629
          </a>
          <Link href="/contact">
            <Button className="hidden md:inline-flex bg-[#B45309] hover:bg-[#92400E] text-white">
              Contact Us
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
