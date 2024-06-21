"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";

export default function Gallery() {

  const events = [
    { image: "/Events/kids.jpg", description: "Kids enjoying a fun day." },
    { image: "/Events/yoba.JPG", description: "Community event with Yoba." },
    { image: "/Events/kids2.jpg", description: "Summertime Magic" },
    { image: "/Events/fight.JPG", description: "Train like no one is watching!" },
    { image: "/Events/train.JPG", description: "Capturing the stillness of motion, this shot freezes a train in time, a moment of power and grace captured in perfect detail." },
    { image: "/Events/dishonor.JPG", description: "'You were given the choice between war and dishonor. You choose dishonor and you will have war.' Winston Churchill" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
  
      <div className="flex flex-col items-center text-center min-h-screen space-y-4 mx-auto">
        <h3 className="mt-10 uppercase tracking-[10px] text-stone-200 text-md">
          Lifestyle/Events
        </h3>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
          className="flex relative text-center snap-center"
        >
          {events.slice(0, 3).map((event, index) => (
            <div key={index} className="relative mb-4 cursor-pointer" onClick={() => openModal(event)}>
              <Image
                src={event.image}
                alt={`Event ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.8 }}
          className="flex relative text-center snap-center"
        >
         {events.slice(3, 6).map((event, index) => (
            <div key={index} className="relative mb-4 cursor-pointer" onClick={() => openModal(event)}>
              <Image
                src={event.image}
                alt={`Event ${index + 1}`}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

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
              height={200}
              className="w-full h-full object-cover"
            />
            <p className="mt-4 font-light text-md max-w-[400px]">{selectedImage.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-slate-500 text-white rounded"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </>
  );
}
