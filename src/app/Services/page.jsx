'use client';

import React from 'react';
import PricingCard from '@/app/Components/PricingCard.jsx';

export default function Service() {

  const weddingFeatures = [
    '1 Photographer',
    '8hour coverage',
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
    'Seven edits',
    '5% off next shoot w/referral',
  ];

  return (
    <>
     
      <div className="flex relative text-center  md:text-left xl:flex-row xl:px-10 min-h-screen xl:space-y-0 xl:ml-10 snap-center">
        <h3 className="absolute ml-8 top-20 items-center uppercase tracking-[20px] text-2xl text-stone-200">
          Services
        </h3>
        <div className="flex flex-col items-center text-center min-h-screen space-y-4 mx-auto">
        <div className="flex flex-col relative gap-0 mt-20 mb-8 xl:mx-32">
          <PricingCard title="Weddings" price="" features={weddingFeatures} />
          <PricingCard title="Events" price="" features={eventFeatures} />
          <PricingCard title="Portraits" price="" features={portraitFeatures} />
        </div>
        </div>

      </div>
   
    </>
  );
}
