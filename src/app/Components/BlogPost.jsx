"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";

const BlogPost = ({ title, text, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dateTime = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative max-w-[24rem] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-4">
        <div className="relative m-0 overflow-scroll text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt=""
              layout="responsive"
              width={700}
              height={475}
            />
          ))}
        </div>
        <div className="p-6">
          <h4
            onClick={handleOpenModal}
            className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-pointer"
          >
            {title}
          </h4>
          <div className="mt-3">
            <button
              className="block w-full py-3 text-xs font-thin uppercase transition bg-slate-600 text-stone-200 rounded-lg shadow-md hover:shadow-lg hover:opacity-85 focus:opacity-85 active:opacity-85"
              type="button"
              onClick={handleOpenModal}
            >
              View More
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between p-6">
          <p className="block font-sans uppercase text-base antialiased font-normal leading-relaxed text-inherit">
            Posted on: {dateTime}
          </p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        text={text}
      />
    </>
  );
};

export default BlogPost;
