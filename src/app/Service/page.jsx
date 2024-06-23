'use client';

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
     
      <div className="flex relative text-center  md:text-left xl:flex-row xl:px-10 min-h-screen xl:space-y-0 xl:ml-10 snap-center">
        <h3 className="absolute ml-8 top-20 items-center uppercase tracking-[20px] text-2xl text-stone-200">
          Services
        </h3>
        <div className="flex relative flex-row text-start text-lg xl:flex-row max-w-[500px] items-center snap-center">
        <div className="flex flex-col items-center gap-2 mt-20 ml-6 mb-6 xl:mx-32">
          <PricingCard title="Weddings" price="1,500" features={weddingFeatures} />
          <PricingCard title="Events" price="500" features={eventFeatures} />
          <PricingCard title="Portraits" price="150" features={portraitFeatures} />
        </div>
        </div>

      </div>
   
    </>
  );
}
