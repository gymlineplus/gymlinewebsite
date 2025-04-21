"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function StatsSection() {
  return (
    <div className="w-full flex items-center justify-center">
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* <h1 className="text-center uppercase font-semibold text-9xl mb-5">State</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
          <StatCard
            value="500+"
            title="Gyms Built"
            description="Successfully designed and equipped over 500 gyms across India, catering to commercial, home, and specialized fitness centers."
          />

          <StatCard
            value="200+"
            title="Happy Clients"
            description="Overlapping coverage and uninterrupted service across multiple networks."
          />

          <StatCard
            value="2000+"
            title="Products Delivered "
            description="From high-quality gym equipment to reliable fitness solutions, we ensure reliable delivery, every time."
          />
        </div>
      </div>
    </section>
    </div>
  )
}

interface StatCardProps {
  value: string
  title: string
  description: string
}

function StatCard({ value, title, description }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    const currentCardRef = cardRef.current

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef)
      }
    }
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <Card className="h-full overflow-hidden border-none bg-white rounded-lg" ref={cardRef}>
        <CardContent className="p-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">{value}</h3>
            <p className="text-sm uppercase tracking-wider font-bold text-gray-500">{title}</p>
            {/* <p className="text-sm text-gray-700">{description}</p> */}
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

