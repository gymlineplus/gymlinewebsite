import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cardioProducts } from "@/lib/cardioProducts";

export default async function Page({ params }) {
  const id = await params.id; // Await the params.id
  const product = cardioProducts.find((item) => item.id === parseInt(id));

  // Optional: Handle case where product is not found
  if (!product) {
    return (
      <div className="w-full flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center">
      <main className="grid mt-12 grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-88px)]">
        {/* Product Image */}
        <div className="relative h-[60vh] md:h-auto flex items-center justify-center p-8">
          <div className="relative w-full max-w-md h-full">
            <Image
              src={product?.image || "/placeholder.svg"}
              alt="Monstera Taeurii Plant"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="max-w-lg">
            <span className="text-sm uppercase tracking-wider text-gray-600">
              {product?.category}
            </span>

            <h1 className="text-2xl md:text-5xl lg:text-4xl mt-4 mb-10">
              {/* Product Name */}
              {product.name}
            </h1>

            {/* Care Instructions */}
            {/* <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#bad420] flex items-center justify-center mb-2">
                  <span className="text-xl">💧</span>
                </div>
                <h3 className="text-xs uppercase font-medium mb-1">WATERING</h3>
                <p className="text-xs text-gray-600">Keep soil moist at all times</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#bad420] flex items-center justify-center mb-2">
                  <span className="text-xl">🌱</span>
                </div>
                <h3 className="text-xs uppercase font-medium mb-1">POTTING</h3>
                <p className="text-xs text-gray-600">Special potting mix, well drained soil</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#bad420] flex items-center justify-center mb-2">
                  <span className="text-xl">☀️</span>
                </div>
                <h3 className="text-xs uppercase font-medium mb-1">LIGHT</h3>
                <p className="text-xs text-gray-600">Indirect sunlight, soft shade, shade</p>
              </div>
            </div> */}

            {/* Product Description */}
            <div className="mb-10">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center">
              {/* <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6">
                Get expert advice
              </Button> */}
              <a
                href={`https://wa.me/919311771888?text=Hi, I'm interested in the ${encodeURIComponent(
                  product.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-6">
                  Get expert advice
                </Button>
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 opacity-20">
            <div className="w-4 h-4 rounded-full bg-[#e8f3f3] mb-2"></div>
            <div className="w-4 h-4 rounded-full bg-[#e8f3f3] mb-2"></div>
            <div className="w-4 h-4 rounded-full bg-[#e8f3f3]"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
