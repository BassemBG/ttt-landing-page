"use client"

import { Button } from "@/components/ui/button";
import { Toggle } from "@radix-ui/react-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image"
import { useState } from "react";
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function PricingPage() {
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
            backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.8), rgba(44, 24, 16, 0.3)), url('bg-pricing.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container md:mx-10 md:pl-10 z-10 pt-24 flex justify-between flex-col md:flex-row lg:flex-row max-w-full mx-auto gap-10 lg:gap-20 items-center">
            {/* left side with text*/}
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-4xl font-bold lg:text-8xl mb-6">
              Packages
              <br />
              and Pricing
              </h1>
            <p className="text-lg md:text-lg font-thin opacity-90 mb-8">
              With our Pro plan, <br /> you can take your design knowledge <br />  to the next level faster.
            </p>
            <div className="flex items-center space-x-3">
                <div 
                    className={`w-12 h-6 flex items-center bg-blue-500 rounded-full p-1 cursor-pointer transition-all duration-300 ${
                    isMonthly ? "bg-blue-500" : "bg-gray-400"
                    }`} 
                    onClick={() => setIsMonthly(!isMonthly)}
                >
                    <div 
                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ${
                            isMonthly ? "translate-x-6" : "translate-x-0"
                        }`}
                        />
                </div>
                <span className="text-white text-sm font-medium">{isMonthly ? "Billed Monthly" : "Billed Annually"}</span>
                
            </div>
            <div className="flex items-end gap-5 m-6">
                    <span className="text-8xl opacity-85">&#10553;</span>
                    <p> Get 2 months free <br /> if you pay annually</p>
                </div>

          </div>

            {/* right side with cards*/}
            <div className="p-5 lg:w-2/3 flex flex-col sm:flex-row gap-4 items-center sm:items-stretch m-0">
          {plans.map((plan, i) => (
            <Card
              key={plan.title}
              className={cn(
                "relative overflow-hidden p-6 rounded-3xl border-0 text-center w-full sm:w-1/3 flex flex-col justify-between",
                "transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl",
                plan.isPro
                  ? "bg-slate-800 sm:-my-4 sm:px-6 sm:py-10 hover:bg-slate-700"
                  : "bg-slate-900 hover:bg-slate-800",
              )}
            >
              {/* Continuous shine effect */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent",
                  plan.isPro ? "animate-shine-fast" : "animate-shine",
                )}
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "100% 0",
                }}
              />

              {/* Gradient border effect for Pro plan */}
              {plan.isPro && (
                <div className="absolute inset-[1px] rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent animate-border-shine" />
                </div>
              )}

              <div className="relative z-10">
                <p className="text-4xl font-bold mb-1 text-white">{plan.price}</p>
                <p className="text-sm text-white/60 mb-6">per month</p>
                <h3 className="text-xl font-bold mb-4 text-white">{plan.title}</h3>
                <hr className="opacity-30 mb-4"/>
                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-white/80">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`relative z-10 w-full py-2 px-4 rounded-lg font-medium transition-colors text-sm ${plan.ctaClass} hover:bg-[#A67B5B]`}
              >
                {plan.cta}
              </button>
            </Card>
          ))}
        </div>


        </div>
      </section>
    </div>
  );
};
