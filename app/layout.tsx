import "./globals.css"
//import { Inter } from "next/font/google"
import { Varela_Round } from "next/font/google";
import type React from "react" // Import React

//const inter = Inter({ subsets: ["latin"] })
const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Time Travel Experience",
  description: "Step into a world where the past meets the present",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={varelaRound.className}>{children}</body>
    </html>
  )
}

