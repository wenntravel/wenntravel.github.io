"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

const packages = [
  {
    id: 1,
    title: "Kashmir Group Departure 3 Nights with 4 star",
    nights: 3,
    places: "3N Srinagar",
    features: ["Fixed Departure", "Houseboat in Srinagar", "Mugal Garden"],
    price: 34999,
    oldPrice: 41999,
    emi: 6590,
    image: "/images/kashmir1.jpg",
  },
  {
    id: 2,
    title: "Group Departure of Kashmir 3 Nights with 4 star",
    nights: 3,
    places: "2N Srinagar | 1N Gulmarg",
    features: ["Fixed Departure", "Houseboat in Srinagar", "Mugal Garden"],
    price: 37001,
    oldPrice: 41999,
    emi: 6923,
    image: "/images/kashmir1.jpg",
  },
  {
    id: 3,
    title: "Kashmir Group Departure 3 Nights with 4 star",
    nights: 3,
    places: "2N Srinagar | 1N Pahalgam",
    features: ["Fixed Departure", "Houseboat in Srinagar", "Mugal Garden"],
    price: 39001,
    oldPrice: 60999,
    emi: 7257,
    image: "/images/kashmir2.jpg",
  },
];

export default function DestinationDetail() {
  const { city } = useParams();
  // For now, only Kashmir mockup
  const isKashmir = city === "kashmir";
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/images/kashmir-hero.jpg"
          alt="Kashmir Holidays Packages"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Kashmir Holidays Packages</h1>
        </div>
      </div>
      {/* Packages Grid */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg p-4 pt-0 border border-gray-100 flex flex-col">
              <div className="relative h-40 rounded-xl overflow-hidden mt-4">
                <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                <span className="absolute top-2 left-2 bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold">Add to Compare</span>
                <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">{pkg.nights} NIGHTS</span>
              </div>
              <div className="mt-4 flex-1 flex flex-col">
                <h2 className="font-bold text-lg mb-1">{pkg.title}</h2>
                <div className="text-gray-500 text-sm mb-2">{pkg.places}</div>
                <div className="flex gap-2 text-xl mb-2">
                  <span>🏨</span><span>🚗</span><span>🚕</span><span>🛥️</span><span>✈️</span>
                </div>
                <ul className="mb-2 text-sm text-gray-700 space-y-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-green-600">✔</span> {f}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="text-xs text-gray-400 line-through">Starting From ₹ {pkg.oldPrice.toLocaleString()}</div>
                  <div className="text-2xl font-bold text-gray-900">₹ {pkg.price.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 mb-2">Per Person on twin sharing</div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">No Cost EMI Starts from ₹ {pkg.emi.toLocaleString()} <span className="text-blue-600 underline cursor-pointer ml-1">See option</span></div>
                    <Link href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition">View Package →</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 