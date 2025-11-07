"use client"

import Image from "next/image"

const prices = [
  { name: "Plastik", price: "Rp 5000/kg", image: "/images/plastik.png" },
  { name: "Kardus", price: "Rp 5000/kg", image: "/images/kardus.png" },
  { name: "Kaca", price: "Rp 5000/kg", image: "/images/kaca.png" },
]

export default function PricesPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow flex w-full">
        
        <div className="flex-[6] bg-emerald-500 flex flex-col items-center justify-center p-8">
          <h2 className="text-5xl font-bold text-white text-center">
            Harga Barang Daur Ulang
          </h2>
        </div>

        <div className="flex-[4] bg-white flex flex-col items-center justify-center p-4">
          <Image
            src={prices[0].image}
            alt={prices[0].name}
            width={200}
            height={200}
            className="object-contain mb-4 h-48 w-48"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200")} 
          />
          <h3 className="text-xl font-bold text-black">{prices[0].name}</h3>
          <p className="text-black font-medium mt-1">{prices[0].price}</p>
        </div>

        <div className="flex-[1] bg-emerald-500"></div>

        <div className="flex-[4] bg-white flex flex-col items-center justify-center p-4">
          <Image
            src={prices[1].image}
            alt={prices[1].name}
            width={200}
            height={200}
            className="object-contain mb-4 h-48 w-48"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200")} 
          />
          <h3 className="text-xl font-bold text-black">{prices[1].name}</h3>
          <p className="text-black font-medium mt-1">{prices[1].price}</p>
        </div>

        <div className="flex-[1] bg-emerald-500"></div>

        <div className="flex-[4] bg-white flex flex-col items-center justify-center p-4">
          <Image
            src={prices[2].image}
            alt={prices[2].name}
            width={200}
            height={200}
            className="object-contain mb-4 h-48 w-48"
            onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200")} 
          />
          <h3 className="text-xl font-bold text-black">{prices[2].name}</h3>
          <p className="text-black font-medium mt-1">{prices[2].price}</p>
        </div>

        <div className="flex-[1] bg-emerald-500"></div>

      </main>
    </div>
  )
}