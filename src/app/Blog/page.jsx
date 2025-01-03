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

On the following page, you'll find my preferred camera settings for photography. Let’s briefly discuss some key terms and their interrelation:

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
The intensity of inspiration, your energy and focus levels, the complexity of the project, and external factors all play a significant role in how long you can sustain your creative drive. Since inspiration can ebb and flow, it's crucial to develop habits and routines that help you keep creating, even when that initial spark begins to fade.
      `,
      images: ["/assets/God.jpg"],
      date: "Posted on: 12 Aug 2024",
    },
    {
      title: "Summertime",
      text: `
For a time, I spent my summers working at a summer camp. During this period, I discovered the beauty of photography and began using this skill to create art. This journey allowed me to tap into a world of imagination, where everything I once thought was possible, and even the "impossible," came to life.
      `,
      images: ["/Events/kids2.jpg"],
      date: "Posted on: 16 Aug 2024",
    },
    {
      title: "Passion & Dreams",
      text: `
      From a young age, I’ve been immersed in the world of the arts, surrounded by friends who share the same passion. My journey began in middle school as an actor and dancer, and I spent my formative years singing in the church choir. As I grew, my artistic expression evolved. I delved into rap, performing in various churches while honing my skills to be clever and impactful, all while respecting my faith. A special shoutout to Mr. B for guiding me through that phase.
      
      During my senior year of high school, I discovered DJing, which quickly became a new passion. I continued to develop my skills throughout my brief time in college. Returning home, I turned DJing into a source of income, blending creativity with entrepreneurship.

      -@itsTRBLE
      `,
      images: ["/assets/savior.jpg"],
      date: "Posted on: 08 Sep 2024",
    },
    {
      title: "Studio Portraits",
      text: `
    Started experimenting with a single lighting source and flash technique.
      `,
      images: ["/assets/soloportrait.jpg"],
      date: "Posted on: 03 Oct 2024",
    },
    {
      title: "A Special Day",
      text: `
For my first same day marriage, my goal was to capture the intricate details typically found in a traditional wedding while incorporating the aesthetics and natural backdrops of outdoor portraits. I aimed to emphasize stylistic choices and subtle details throughout the process.
      `,
      images: ["/assets/tuckers.jpg"],
      date: "Posted on: 03 Oct 2024",
    },
    {
      title: "TYMELESS",
      text: `
We often find ourselves hesitating to fully embrace the present, letting the moment slip through our fingers like grains of sand. Yet, it is in this fleeting now that joy and passion bloom, inviting us to plunge in and relish their vibrant essence.
      `,
      images: ["/Events/t3.jpg"],
      date: "Posted on: 16 Oct 2024",
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
      <div className="text-center items-center mt-16 -mb-2 uppercase text-xl tracking-[20px] text-red-800">
        Blog
      </div>
      <p className="text-center text-sm text-slate-700 font-thin mt-7 -mb-8">
        Click text to view details
      </p>
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
