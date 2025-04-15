import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProductPage() {
  const product = {
    name: "Summit Seeker Pack",
    price: "$120",
    colors: ["Black", "Orange", "Charcoal", "Durable"],
    description: "This compact and durable backpack is designed for adventurers and passion for exploration.",
    image: "/placeholder-backpack.jpg", // Replace with actual image URL or import
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto overflow-hidden shadow-lg">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-4">{product.price}</p>
          
          {/* Color Options */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-600">Colors:</p>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color, index) => (
                <Badge
                  key={index}
                  className="cursor-pointer hover:bg-gray-200"
                  variant={color.toLowerCase() === "black" ? "secondary" : "outline"}
                >
                  {color}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Details and Payments */}
          <div className="space-y-4">
            <Button variant="outline" className="w-full">
              Details
            </Button>
            <Button variant="outline" className="w-full">
              Payments
            </Button>
          </div>
        </CardContent>
        <CardFooter className="p-6 bg-gray-50 flex justify-between">
          <Button className="w-full">Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
}