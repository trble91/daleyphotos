"use client";

import React from "react";
import Logo from "../Components/Logo";

export default function Bio() {
  const about = `My photography journey is a vibrant tapestry woven from my eclectic upbringing and artistic aspirations. Despite struggling in school, I was encouraged to explore creativity. Raised as a first-generation American to West Indian parents, music shaped my early years—from Al Green to Tupac, each note fueled my passion.
    Transitioning from music to photography, I found a new canvas to express emotions and stories. Each click of the shutter became a brushstroke in my visual narrative—a journey from capturing intimate portraits to vibrant landscapes.
    Driven by a thirst for knowledge and a desire to push boundaries, photography became my avenue to blend creativity and storytelling. Together, let's inspire and illuminate the world one click at a time.

    `;
    
  return (
    <>

      <div className="flex flex-col items-center space-y-6 min-h-screen py-12 snap-center">
        <h3 className="absolute top-24 items-center uppercase tracking-[20px] text-stone-200 text-2xl sm:text-stone-300">
          About
        </h3>
        <Logo />
        <div className="flex absolute flex-row text-start text-stone-200 sm:text-center text-lg top-56 xl:flex-row max-w-[700px] items-center snap-center">
          <p className="flex relative ml-1 text-left font-thin text-m mb-8">
            {about}
          </p>
        </div>
      </div>
      
    </>
  );
}
