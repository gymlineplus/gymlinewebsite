"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Companies Who Trust Us",
  logos = [
    {
      id: "abs-fitness",
      description: "abs fitness",
      image: "/abs-fitness.png",
      className: "w-40",
    },
    {
      id: "af",
      description: "anytime fitness",
      image: "/af.png",
      className: "w-40",
    },
    {
      id: "cult-fit",
      description: "cult fit",
      image: "/cult-fit.webp", // fixed
      className: "w-40 invert",
    },
    {
      id: "gold",
      description: "gold gym",
      image: "/gold.svg",
      className: "w-20",
    },
    {
      id: "indofit",
      description: "indofit",
      image: "/indofit-logos.jpg", // fixed
      className: "w-40",
    },
    {
      id: "kenzo-fitness",
      description: "Kenzo fitness",
      image: "/kenzo-fitnesslogo.png", // fixed name with space
      className: "w-40",
    },
    {
      id: "taiso",
      description: "taiso",
      image: "/taiso-logo.png",
      className: "w-40",
    },
    {
      id: "classic-fitness",
      description: "classsic fitness",
      image: "/classic-fitness.svg",
      className: "w-20",
    },
  ],
}: Logos3Props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <section className="py-10">
        <div className="container flex flex-col items-center text-center">
          <h1 className="my-6 text-pretty text-4xl font-medium lg:text-6xl">
            {heading}
          </h1>
        </div>
        <div className="pt-10 md:pt-16 lg:pt-20">
          <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
            <Carousel
              opts={{ loop: true }}
              plugins={[AutoScroll({ playOnInit: true })]}
            >
              <CarouselContent className="ml-0">
                {logos?.map((logo) => (
                  <CarouselItem
                    key={logo.id}
                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                  >
                    <div className="mx-20 flex shrink-0 items-center justify-center">
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                        width={100}
                        height={100}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Logos3 };
