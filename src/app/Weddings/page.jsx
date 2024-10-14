"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";
import Link from "next/link";

export default function Weddings() {
  const weddings = [
    { image: "/Weddings/photos.JPG", description: "Capturing the joyous moments of the wedding in photographs." },
    { image: "/Weddings/bliss.jpg", description: "The newlyweds share a moment of pure bliss and joy." },
    { image: "/Weddings/cake2.jpg", description: "The beautiful wedding cake, a centerpiece of the celebration." },
    { image: "/Weddings/fun.jpg", description: "Guests enjoying the fun and festivities of the wedding reception." },
    { image: "/Weddings/rings.jpg", description: "A close-up shot of the wedding rings, symbolizing eternal love." },
    { image: "/Weddings/blissful.jpg", description: "A tender moment with The newlyweds." },
    { image: "/Weddings/cake.jpg", description: "Another angle of the stunning wedding cake." },
    { image: "/Weddings/church.jpg", description: "God's greatest gift to Man, his Wife." },
    { image: "/Weddings/groom.jpg", description: "The groom, looking dapper and ready for the big day." },
    { image: "/Weddings/baby.jpg", description: "A tender moment with the youngest guest at the wedding." },
  ];


  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const featureLink = {
    href: "/Photography",
  };

  return (
    <>
     
      <div className="flex flex-col items-center text-center min-h-screen space-y-4 mx-auto">
        <h3 className="mt-10 uppercase tracking-[10px] text-red-800 text-md sm:text-red-800 sm:text-base">
          Weddings
        </h3>
        <p className="text-sm text-slate-700 font-thin mt-7 -mb-8">
        Click image to enlarge
      </p>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="flex relative text-center snap-center"
        >
         {weddings.slice(0, 4).map((wedding, index) => (
            <div key={index} className="relative mb-4 cursor-pointer" onClick={() => openModal(wedding)}>
              <Image
                src={wedding.image}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="flex relative text-center snap-center"
        >
         {weddings.slice(4, 8).map((wedding, index) => (
            <div key={index} className="relative mb-4 cursor-pointer" onClick={() => openModal(wedding)}>
              <Image
                src={wedding.image}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
        <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0"
      >
        {selectedImage && (
          <div className="bg-white p-4 rounded-lg text-center">
            <Image
              src={selectedImage.image}
              alt="Selected Image"
              width={400}
              height={100}
              className="w-fit h-fit object-cover"
            />
            <p className="mt-4 font-light text-md max-w-[400px]">{selectedImage.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-zinc-500 text-white rounded"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
      </div>
      <Link href={featureLink.href}>
          <button
            className="align-middle select-none text-white font-sans font-thin text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-zinc-500 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            type="button"
          >
            Back
          </button>
          </Link>

    </>
  );
}
