'use client';

import Footer from '@/Footer/page';
import Navbar from '@/Navbar/page';
import React from 'react';
import PricingCard from '@/app/Components/PricingCard.jsx';

export default function Service() {
  const weddingFeatures = [
    '1 Photographer',
    '5hour coverage',
    'Two 30sec content reel',
    'Digital Wedding Album',
    'USB-C drive w/images',
  ];

  const eventFeatures = [
    '1 Photographer',
    '3hour coverage',
    '30sec content reel',
    'Digital Photo Collage',
    'USB-C drive w/images',
  ];

  const portraitFeatures = [
    'One locations',
    'Two hours',
    'Three Looks',
    'Four edits',
    '5% off next shoot w/referral',
  ];

  return (
    <>
      <Navbar />
      <div className="flex relative text-center md:text-left xl:flex-row xl:px-10 min-h-screen xl:space-y-0 xl:ml-10 snap-center">
        <h3 className="absolute ml-8 top-20 items-center uppercase tracking-[20px] text-2xl text-stone-300">
          Service
        </h3>
        <div className="flex absolute flex-row text-start text-lg top-56 xl:flex-row max-w-[500px] items-center snap-center">
          {/* <p className="flex relative text-left text-m text-stone-300">
            Embarking on a photography journey that captures the essence of weddings, special events, and creative design, I strive to tell unique stories through my lens, preserving cherished moments and crafting visually stunning memories.
          </p> */}
        </div>

        <div className="flex flex-row ml-44 items-center gap-8 mt-14">
          <PricingCard title="Weddings" price="1,500" features={weddingFeatures} />
          <PricingCard title="Events" price="500" features={eventFeatures} />
          <PricingCard title="Portraits" price="150" features={portraitFeatures} />
        </div>
      </div>
      <Footer />
    </>
  );
}
