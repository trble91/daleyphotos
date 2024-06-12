"use client";

import Footer from "@/Footer/page";
import Navbar from "@/Navbar/page";
import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-16 mb-20 uppercase text-bold tracking-[20px] text-stone-300">Blog</div>

      {/* Blog Card 1 */}
      <div className="relative ml-4 flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          <Image
            src=""
            alt="ui/ux review check"
            layout="responsive"
            width={700}
            height={475}
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            UI/UX Review Check
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
            Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center -space-x-3">
            <Image 
              alt="natali craig"
              src=""
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              layout="fixed"
              width={36}
              height={36}
            />
            <Image 
              alt="Tania Andrew"
              src=""
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              layout="fixed"
              width={36}
              height={36}
            />
          </div>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
            January 10
          </p>
        </div>
      </div> 

      {/* Blog Card 2 */}
      <div className="mb-4 mr-4 flex justify-end">
        <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <Image
              src=""
              alt="ui/ux review check"
              layout="responsive"
              width={700}
              height={475}
            />
          </div>
          <div className="p-6">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              UI/UX Review Check
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
            </p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center -space-x-3">
              <Image 
                alt="natali craig"
                src=""
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                layout="fixed"
                width={36}
                height={36}
              />
              <Image 
                alt="Tania Andrew"
                src=""
                className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                layout="fixed"
                width={36}
                height={36}
              />
            </div>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              January 10
            </p>
          </div>
        </div>  
      </div>

      <Footer />
    </>
  );
}
