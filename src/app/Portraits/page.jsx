"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";

export default function Portraits() {
  const portraits = [
    { image: "/Portraits/bee1.jpg", description: "Capture the spirit of the season with our holiday and seasonal portraits, available both indoors and outdoors." },
    { image: "/Portraits/fellas.JPG", description: "Working on cover art for a project? Let us capture the perfect photo and create stunning artwork that brings your vision to life." },
    { image: "/Portraits/guy1.JPG", description: "Elevate your social presence with our professional portrait photography."},
    { image: "/Portraits/prom1.JPG", description: "Let us bring your prom and graduation memories to life with stunning portraits."},
    { image: "/Portraits/prom2.JPG", description: "Let us bring your prom and graduation memories to life with stunning portraits."},
    { image: "/Portraits/woman1.JPG", description: "Whether you're an artist, model, or content creator, our professional portrait photography can help you stand out." },
    { image: "/Portraits/woman2.JPG", description: "Elevate your social presence with our professional portrait photography." },
    { image: "/Portraits/woman3.JPG", description: "Trust us to create stunning visuals that'll capture your personality, leaving a lasting impression." },
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
          Portraits
        </h3>
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
          {portraits.slice(0, 4).map((portrait, index) => (
            <div key={index} className="relative mb-4 cursor-pointer" onClick={() => openModal(portrait)}>
              <Image
                src={portrait.image}
                alt={`Image ${index + 1}`}
                width={400}
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
          {portraits.slice(4, 8).map((portrait, index) => (
            <div key={index} className="relative mb-4 cursor-pointer" onClick={() => openModal(portrait)}>
              <Image
                src={portrait.image}
                alt={`Image ${index + 1}`}
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
              width={300}
              height={100}
              className="w-fit h-fit object-cover"
            />
            <p className="mt-4 font-light text-md max-w-[300px]">{selectedImage.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-zinc-500 text-white rounded"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </>
  );
}
