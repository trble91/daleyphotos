"use client";

import Footer from "@/Footer/page";
import Navbar from "@/Navbar/page";
import Image from "next/image";
import React from "react";

export default function Blog() {
  const BlogPost1 = `
  The concept of still imagery revolves around composing shots, with the rule of thirds playing a crucial role. This technique often results in captivating and well-structured images, which can be enhanced through post-production editing.
  
  On the following page, you'll find my preferred camera settings for photography. Let’s briefly discuss some key terms and their interrelation:
  
  1. **Aperture**: The opening through which light enters, located where the lens attaches to the camera body.
  2. **Shutter Speed**: The duration the shutter remains open. Imagine blinking slowly versus quickly to understand the difference in exposure.
  3. **ISO**: Determines an image's brightness; higher ISO levels increase brightness but can add noise.
  
  When these elements work together, along with the appropriate lens (focal length), an image can truly come to life. Lighting and angles are also crucial. For example, when using a backdrop, place the subject 3 feet in front of it. For light backdrops, set the lights three stops higher than those on the subject, and for dark backdrops, do the opposite.
  
  By understanding and manipulating these settings, you can create stunning and well-composed shots.
  `;

  const BlogPost2 = `
  Portraits 

  -ISO: 100
  -Aperture: F/1.8 
  -Shutter: 1/1250

  Lifestyle 

  -ISO: Adjust as needed
  -Aperture: F/1.8 
  -Shutter: 1/1200


  *These shots will be better when composed properly. 
  `;

  return (
    <>
      <Navbar />
      <div className="text-center mt-16 mb-20 uppercase text-xl text-bold tracking-[20px] text-stone-300">
        Blog
      </div>

      {/* Blog Card 1 */}
      <div className="relative ml-4 flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <Image
            src="/assets/yankee-Large.jpeg"
            alt=""
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Photography
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
            {BlogPost1}
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center -space-x-3">
            {/* <Image 
              alt=""
              src=""
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              layout="fixed"
              width={36}
              height={36}
            /> */}
            {/* <Image 
              alt=""
              src=""
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              layout="fixed"
              width={36}
              height={36}
            /> */}
          </div>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
            27 Jul
          </p>
        </div>
      </div>

      {/* Blog Card 2 */}
      <div className="mb-4 mr-4 mt-4 flex justify-end">
        <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <Image
              src="/Weddings/rings.jpg"
              alt=""
              layout="responsive"
              width={700}
              height={475}
            />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Photography Camera Settings
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              {BlogPost2}
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3"></div>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              01 Oct
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
