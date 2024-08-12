"use client";

import React, { useState } from "react";
import BlogPost from "../Components/BlogPost.jsx";
import Modal from "../Components/Modal.jsx";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const BlogPosts = [
    {
      title: "The Meaning of Photography",
      text: `
        The concept of still imagery revolves around composing shots, with the rule of thirds playing a crucial role. This technique often results in captivating and well-structured images, which can be enhanced through post-production editing.
        1. **Aperture**
        2. **Shutter Speed**
        3. **ISO**

        By understanding and manipulating these settings, you can create stunning and well-composed shots.
      `,
      images: ["/assets/bride.jpg"],
      date: "Posted on: 27 Jul 2024",
    },
    {
      title: "Photography Camera Settings",
      text: `
       Portraits:
        - ISO: 100
        - Aperture: F/1.8
        - Shutter: 1/1250

        Lifestyle:
        - ISO: Adjust as needed
        - Aperture: F/1.8
        - Shutter: 1/1200

        *These shots are better when composed properly.
      `,
      images: ["/Portraits/woman3.JPG"],
      date: "Posted on: 01 Aug 2024",
    },
    {
      title: "Holiday Shoots",
      text: `
        Step into a world of enchanting memories with our photography services. From weddings to family gatherings and holiday festivities, our skilled photographers specialize in transforming moments into timeless treasures. Embark on a journey with us to create magical memories that will forever warm your heart. Reserve your session today and let us weave your story through captivating images.
      `,
      images: ["/assets/Bailey-bw.png"],
      date: "Posted on: 07 Aug 2024",
    },
    {
      title: "Content Creation",
      text: `
    .
      `,
      images: ["/assets/Bailey-bw.png"],
      date: "Posted on: 12 Aug 2024",
    },
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="text-center items-center mt-16 -mb-2 uppercase text-xl font-bold tracking-[20px] text-stone-300">
        Blog
      </div>
      <p className="text-center text-sm text-stone-200 font-thin mt-7 -mb-8">Click text to view details</p>
      <div className="flex flex-col place-items-center min-h-screen py-12">
        {BlogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            images={post.images}
            onClick={() => openModal(post)}
          />
        ))}
      </div>
      {selectedPost && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedPost.title}
          text={selectedPost.text}
          date={selectedPost.date}
        />
      )}
    </>
  );
};

export default Blog;
