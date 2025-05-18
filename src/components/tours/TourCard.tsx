"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

interface TourCardProps {
  id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  imageSrc: string;
  rating?: number;
  tag?: string;
}

const TourCard: React.FC<TourCardProps> = ({
  id,
  title,
  destination,
  price,
  duration,
  imageSrc,
  rating,
  tag,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
            {tag}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">
          <span className="inline-block mr-2">
            <svg className="w-4 h-4 inline-block text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          {destination}
        </p>
        <p className="text-gray-600 text-sm mt-1">
          <span className="inline-block mr-2">
            <svg className="w-4 h-4 inline-block text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          {duration}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-green-600 font-bold">₹{price.toLocaleString()}</p>
          </div>
          <Link href={`/tours/${id}`}>
            <Button variant="primary" size="sm">View Deal</Button>
          </Link>
        </div>
        {rating && (
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center text-yellow-500">
              <span className="mr-1 text-sm font-medium">{rating}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <span className="text-xs text-gray-500">per person</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourCard; 