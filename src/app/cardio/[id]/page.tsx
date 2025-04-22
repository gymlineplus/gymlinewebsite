
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cardioProducts } from '@/lib/cardioProducts';

export function generateStaticParams() {
  return cardioProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const product = cardioProducts.find((item) => item.id === parseInt(params.id));

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
        <div className="relative h-[60vh] md:h-auto flex items-center justify-center p-8">
          <div className="relative w-full max-w-md h-full">
            <Image
              src={product?.image || '/placeholder.svg'}
              alt="Monstera Taeurii Plant"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="max-w-lg">
            <span className="text-sm uppercase tracking-wider text-gray-600">
              {product?.category}
            </span>

            <h1 className="text-2xl md:text-5xl lg:text-4xl mt-4 mb-10">
              {product.name}
            </h1>

            <div className="mb-10">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center">
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
   return cardioProducts.map((product) => ({
     id: product.id.toString(),
   }));
 }
 
 export default function Page({ params }: { params: { id: string } }) {
   const product = cardioProducts.find(
     (item) => item.id === parseInt(params.id),
   );
 
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
         <div className="relative h-[60vh] md:h-auto flex items-center justify-center p-8">
           <div className="relative w-full max-w-md h-full">
             <Image
               src={product?.image || '/placeholder.svg'}
               alt="Monstera Taeurii Plant"
               fill
               className="object-contain"
               priority
             />
           </div>
         </div>
 
         <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
           <div className="max-w-lg">
             <span className="text-sm uppercase tracking-wider text-gray-600">
               {product?.category}
             </span>
 
             <h1 className="text-2xl md:text-5xl lg:text-4xl mt-4 mb-10">
               {product.name}
             </h1>
 
             <div className="mb-10">
               <p className="text-gray-700 leading-relaxed">
                 {product.description}
               </p>
             </div>
 
             <div className="flex items-center">
               <a
                 href={`https://wa.me/919311771888?text=Hi, I'm interested in the ${encodeURIComponent(
                   product.name,
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
