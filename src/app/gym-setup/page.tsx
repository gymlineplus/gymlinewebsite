"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const GymSetup = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col mt-15 items-center justify-center min-h-screen px-4 py-10 space-y-10">
      <h1 className="text-4xl md:text-6xl font-semibold text-center">
        Gym Setup Packages
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        {/* Commercial Package */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="flex flex-col items-center md:items-start md:flex-row p-6 gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="w-full md:w-1/2 flex justify-center cursor-pointer"
                  onClick={() => setSelectedImage("/2.jpeg")}
                >
                  <Image
                    src="/2.jpeg"
                    width={500}
                    height={500}
                    alt="Commercial Gym"
                    className="rounded-xl object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-4">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    width={1000}
                    height={800}
                    alt="Quick View"
                    className="rounded-xl object-contain w-full h-auto"
                  />
                )}
              </DialogContent>
            </Dialog>

            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-semibold">Commercial Gym Package</h2>
              <p className="text-lg text-muted-foreground">
                High-end equipment setup for large commercial gyms. Includes strength,
                cardio, and free weights for full-scale fitness centers.
              </p>
              {/* <button className=" cursor-pointer underline">Get Info</button> */}
            </div>
          </CardContent>
        </Card>

        {/* Silver Package */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="flex flex-col items-center md:items-start md:flex-row p-6 gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="w-full md:w-1/2 flex justify-center cursor-pointer"
                  onClick={() => setSelectedImage("/3.jpeg")}
                >
                  <Image
                    src="/3.jpeg"
                    width={500}
                    height={500}
                    alt="Silver Gym"
                    className="rounded-xl object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-4">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    width={1000}
                    height={800}
                    alt="Quick View"
                    className="rounded-xl object-contain w-full h-auto"
                  />
                )}
              </DialogContent>
            </Dialog>

            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-semibold">Silver Gym Package</h2>
              <p className="text-lg text-muted-foreground">
                A compact yet powerful setup ideal for small studios or budget gyms.
                Includes essential machines and functional training tools.
              </p>
              {/* <button className=" cursor-pointer underline">Get Info</button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GymSetup;
