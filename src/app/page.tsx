"use client";
import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/layout/Header';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useEffect } from 'react';

// Mock data for popular destinations (Indian cities)
const popularDestinations = [
  {
    id: 'mumbai',
    title: 'Mumbai',
    destination: 'Mumbai',
    price: 310,
    imageSrc: '/images/cities/mumbai.jpg',
  },
  {
    id: 'delhi',
    title: 'Delhi',
    destination: 'Delhi',
    price: 250,
    imageSrc: '/images/cities/delhi.jpg',
  },
  {
    id: 'jaipur',
    title: 'Jaipur',
    destination: 'Jaipur',
    price: 440,
    imageSrc: '/images/cities/jaipur.jpg',
  },
  {
    id: 'goa',
    title: 'Goa',
    destination: 'Goa',
    price: 450,
    imageSrc: '/images/cities/goa.jpg',
  },
  {
    id: 'kochi',
    title: 'Kochi',
    destination: 'Kochi',
    price: 390,
    imageSrc: '/images/cities/kochi.jpg',
  },
  {
    id: 'varanasi',
    title: 'Varanasi',
    destination: 'Varanasi',
    price: 370,
    imageSrc: '/images/cities/varanasi.jpg',
  },
];

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    comment: 'Our trip to Bali was perfectly organized by Wenn Travel. The accommodations were excellent and the tour guides were knowledgeable and friendly.',
    imageSrc: '/images/testimonial-1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    comment: 'The Dubai tour package exceeded all my expectations. Everything was well planned and the itinerary included all the major attractions.',
    imageSrc: '/images/testimonial-2.jpg',
    rating: 4.8
  },
];

export default function Home() {
  // Keen-slider setup
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 24 },
    breakpoints: {
      '(max-width: 1024px)': { slides: { perView: 2, spacing: 16 } },
      '(max-width: 640px)': { slides: { perView: 1, spacing: 8 } },
    },
    drag: true,
    created(s) {
      setTimeout(() => s.moveToIdx(0, true), 0);
    },
  });

  // Auto-slide
  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;
    
    const interval = setInterval(() => {
      slider.next();
    }, 2500);
    
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-white flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Dream, Explore, Discover Your<br />
          Travel Begins Here
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
          Journey to where your heart desires with our tailored experiences.<br />
          Because every great adventure starts with a single step.
        </p>
      </section>
      
      {/* Popular Destinations Section */}
      <section id="popular-destinations" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-medium mb-4">Popular Destinations</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Traveler&apos;s Favorite</h2>
          </div>
          <div ref={sliderRef} className="keen-slider">
            {popularDestinations.map((tour) => (
              <div className="keen-slider__slide flex justify-center" key={tour.id}>
                <Link href={`/destinations/${tour.id}`} className="block w-full h-full">
                  <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg group">
                    <Image
                      src={tour.imageSrc}
                      alt={tour.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl font-semibold mb-1">{tour.title}</h3>
                      <p className="text-white text-lg font-medium">Starting From <span className="font-bold">${tour.price}</span></p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {popularDestinations.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${instanceRef.current?.track?.details?.rel === idx ? 'bg-green-600' : 'bg-gray-300'}`}
                onClick={() => instanceRef.current?.moveToIdx?.(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Unfiltered journeys, stamped with ❤️</h2>
            <div className="flex justify-center gap-8 mt-3">
              <div>
                <span className="font-bold text-lg">4.5/5</span>
                <p className="text-sm text-gray-600">6000+ reviews</p>
              </div>
              <div>
                <span className="font-bold text-lg">4.8/5</span>
                <p className="text-sm text-gray-600">1400+ reviews</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.comment}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Wenn Travel Company</h3>
              <p className="text-gray-300">
                Providing unforgettable travel experiences since 2010.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href="/packages" className="text-gray-300 hover:text-white">Tour Packages</Link></li>
                <li><Link href="/destinations" className="text-gray-300 hover:text-white">Destinations</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-300">
                <p>Email: <a href="mailto:wenntravels@gmail.com" className="hover:underline text-green-400">wenntravels@gmail.com</a></p>
                <p>Phone: <a href="tel:+917025292902" className="hover:underline text-green-400">+91 70252 92902</a></p>
                <p>Instagram: <a href="https://instagram.com/wenn.travel" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-400">@wenn.travel</a></p>
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>Wenn Travel Company © {new Date().getFullYear()} all rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
