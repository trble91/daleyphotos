"use client";

import Footer from "@/Footer/page";
import Navbar from "@/Navbar/page";
import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-16 mb-20 uppercase text-xl text-bold tracking-[20px] text-stone-300">Blog</div>

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
          Best F-stop
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
            It&apos;s all opionated! However, the sweet spot for many lenses are within tht 2.0-4.0 range.
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
              My First Wedding
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              The day I shot my first wedding, and the tools I had with me at the time.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
      
            </div>
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
