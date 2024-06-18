"use client";

import React from "react";
import Image from "next/image";

const BlogPost = ({ title, text, images }) => {
  const dateTime = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className="relative  ml-4 max-w-[24rem] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-4">
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
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
            {text}
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <p className="block font-sans uppercase text-base antialiased font-normal leading-relaxed text-inherit">
            Posted on: {dateTime}
          </p>
        </div>
      </div>
    </>
  );
};

const Blog = () => {
  const BlogPosts = [
    {
      title: "Photography",
      text: `
        The concept of still imagery revolves around composing shots, with the rule of thirds playing a crucial role. This technique often results in captivating and well-structured images, which can be enhanced through post-production editing.
        
        On the following page, you'll find my preferred camera settings for photography. Let’s briefly discuss some key terms and their interrelation:
        
        1. **Aperture**: The opening through which light enters, located where the lens attaches to the camera body.
        2. **Shutter Speed**: The duration the shutter remains open. Imagine blinking slowly versus quickly to understand the difference in exposure.
        3. **ISO**: Determines an image's brightness; higher ISO levels increase brightness but can add noise.
        
        When these elements work together, along with the appropriate lens (focal length), an image can truly come to life. Lighting and angles are also crucial. For example, when using a backdrop, place the subject 3 feet in front of it. For light backdrops, set the lights three stops higher than those on the subject, and for dark backdrops, do the opposite.
        
        By understanding and manipulating these settings, you can create stunning and well-composed shots.
      `,
      images: ["/assets/bride.jpg"],
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
        
        *These shots will be better when composed properly.
      `,
      images: ["/Portraits/woman3.JPG"],
    },
    {
      title: "Holiuday Shoots",
      text: `
   Step into a world of enchanting memories with our photography services. From weddings to family gatherings and holiday festivities, our skilled photographers specialize in transforming moments into timeless treasures. Embark on a journey with us to create magical memories that will forever warm your heart. Reserve your session today and let us weave your story through captivating images.
      `,
      images: ["/assets/Bailey-bw.png"],
    },
  ];

  return (
    <>
     
      <div className="text-center items-center mt-16 mb-20 uppercase text-xl font-bold tracking-[20px] text-stone-300">
        Blog
      </div>
        <div className="grid flex-col place-items-center min-h-screen py-12">
          {BlogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              text={post.text}
              images={post.images}
            />
          ))}
        </div>
   
    </>
  );
};

export default Blog;
