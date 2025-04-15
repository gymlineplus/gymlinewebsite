"use client"
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CardioProducts() {
  // This would typically come from a database or API
  const cardioProducts = [
    {
      id: 1,
      name: "Gymline Commercial Treadmill X9001A",
      image:
        "https://gymlineplus.com/cdn/shop/files/IMG-20240401-WA0035.jpg?v=1711982776",
      category: "Treadmills",
      description:
        "Commercial grade treadmill with advanced features for intense cardio workouts.",
      featured: true,
    },
    {
      id: 2,
      name: "Gymline Commercial Treadmill X7000",
      image: "https://gymlineplus.com/cdn/shop/files/X7000.jpg?v=1698665500",
      category: "Treadmills",
      description:
        "The Gymlineplus Commercial Treadmill Gymline X7000 is a high-performing piece of equipment designed for serious fitness enthusiasts. With a VFD driven AC motor and RHYMEBUS inverter, this treadmill offers a smooth and powerful workout experience with speeds up to 20kmph. The 0-15% incline system, multiplex-cushioning system, and reversible running deck provide a comfortable and versatile workout. With a user weight capacity of 150kg and a durable construction, this treadmill is perfect for intense training sessions.",
      featured: true,
    },
    {
      id: 3,
      name: "Gymline Commercial Treadmill X8200A",
      image:
        "https://gymlineplus.com/cdn/shop/files/X8200.png?v=1738664482&width=1100",
      category: "Treadmills",
      description:
        "The Gymlineplus Commercial Treadmill, X8200A-Treadmill, is the ideal choice for a high-quality workout experience. With a powerful Ac Variable Frequency Motor and G-Way - 2.2 KW inverter, it can reach speeds of up to 20kmph. The 1525*560mm running surface, 25mm thick reversible running deck, and multiplex-cushioning system provide optimal comfort. Its sturdy construction can support up to 150kg, making it suitable for all fitness levels. Plus, the LED display and precision engineering ensure a seamless workout",

      featured: true,
    },
    {
      id: 4,
      name: "Gymline Commercial Curve Treadmill CT100B",
      image: "https://gymlineplus.com/cdn/shop/files/IMG-20240401-WA0027.jpg?v=1711983272&width=1100",
      category: "Treadmills",
      description:
        "As an industry expert, I can confidently say the Gymlineplus Commercial Curve Treadmill is a durable and efficient workout machine. With its self-powered, zero maintenance technology and liquid crystal display, it offers high intensity workouts for all fitness levels. Featuring a curved design and resistance levels from 1 to 6, this treadmill is perfect for running, walking, lunges, and more. With a maximum user weight of 180kg and a crawler type belt, it's a top choice for fitness enthusiasts.",
      featured: false,
    },
    {
      id: 5,
      name: "Gymlline Commercial Upright Bike X9107",
      image: "https://gymlineplus.com/cdn/shop/files/X9107.png?v=1698665270&width=1100",
      category: "Excercise Bikes",
      description:
        "Upgrade your workout routine with the Gymline Plus Commercial Upright Bike. With a self-powered design, LED display, and heart rate monitoring, you can track your progress with precision. The keypad resistance control and maximum weight capacity of 150kg make it a efficient and durable choice for any gym.",
      featured: false,
    },
    {
      id: 6,
      name: "Gymline Commercial Spinning Bike S300",
      image: "https://gymlineplus.com/cdn/shop/files/PHONIXS300new.jpg?v=1698304949",
      category: "Exercise Bikes",
      description:
        "The Gymline Plus Spinning Bike offers a smooth and efficient workout with its 23kg main wheel weight and magnetic technology. With a maximum user weight of 150kg, this bike is built to support intense workouts. Weighing 42.5kg, its compact size of 1260*500*1000mm makes it perfect for home use.",
      featured: false,
    },
    {
      id: 7,
      name: "Gymline Home Series Upright Bike S500L",
      image: "https://gymlineplus.com/cdn/shop/files/S500_L.png?v=1697458462&width=1100",
      category: "Exercise Bikes",
      description:
        "Self-powered curved treadmill for natural running motion and intense workouts.",
      featured: true,
    },
    {
      id: 8,
      name: "Gymline Spinning Bike XN905 ",
      image: "https://gymlineplus.com/cdn/shop/files/XN905.png?v=1712052150",
      category: "Exercise Bikes",
      description:
        "Experience a smooth and challenging workout with the Gymlineplus Spinning Bike. With a 24kg main wheel weight and belt driven technology, it offers a realistic cycling experience. The sturdy flat elliptical and round stainless steel tube design can support up to 150kg user weight. Built with high-quality aluminum alloy, it weighs 68kg and measures 1088*560*1045-1300mm.",
      featured: false,
    },
    {
      id: 8,
      name: "Gymline Commercial Elliptical Trainer LDE-13",
      image: "https://gymlineplus.com/cdn/shop/files/LDE-13CrossTraniner.png?v=1712048250",
      category: "Exercise Bikes",
      description:
        "Experience a full-body workout with the Gymline Plus Commercial Elliptical Trainer. Its self-powered generator and automatic electromagnetic resistance system provide a challenging yet smooth exercise session. The LED screen displays real-time progress and the joystick allows for easy resistance control. With a max user weight of 150kg, this gym equipment is perfect for all fitness levels.",
      featured: false,
    },
    {
      id: 8,
      name: "Gymline Commercial Cross Trainer XZ117A",
      image: "https://gymlineplus.com/cdn/shop/files/XZ117A.jpg?v=1698664988",
      category: "Exercise Bikes",
      description:
        "The Gymline Plus Commercial Cross Trainer is a self-powered generator with 8 pre-set exercise programs. Its automatic electromagnetic resistance system allows for a maximum user weight of 149kg. The LED screen displays speed, calories, distance, time, and heart rate, while the joystick allows for easy resistance control. With a net weight of 162kg and dimensions of 2093*749*1643mm, this elliptical trainer offers a professional, efficient, and effective workout experience.",
      featured: false,
    },
  ];

  return (
    <section className="py-12 flex items-center justify-center mt-18 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Cardio Equipment
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elevate your heart rate and boost your endurance with our premium
              selection of cardio equipment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {cardioProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {product.featured && (
                  <Badge className="absolute left-2 top-2 bg-red-500 hover:bg-red-600">
                    Featured
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
              <Link href={`/cardio/${product.id}`} className="block">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-lg mt-1 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                </div>
                <p className="line-clamp-1 text-sm text-gray-500 mt-2">
                  {product.description}
                </p>
              </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0">
                {/* <Button className="w-full bg-black hover:bg-gray-800 text-white">Get details</Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
