"use client";

import Footer from "@/Footer/page";
import Navbar from "@/Navbar/page";
import React from "react";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-4 mb-8">Blog</div>
      <h1 className="text-xl ml-4">New Site</h1>
      <section className="flex max-w-[600px] snap-center ml-4 mb-4">
        <p className="flex text-m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          laoreet facilisis metus, id vulputate nisi dictum sed. In ornare
          turpis ac augue ultrices, sed pretium dui sodales. Cras tincidunt nisl
          vel velit mollis accumsan. Ut augue nunc, eleifend et blandit et,
          malesuada ac lorem. In vel feugiat nibh, vel sagittis ipsum. Vivamus
          hendrerit nisl id eros viverra, nec varius urna consequat. Vivamus
          finibus rutrum risus sit amet aliquet. Praesent fermentum consectetur
          ipsum, nec placerat nunc luctus ac. Etiam rhoncus blandit placerat.
          Integer ut vestibulum nulla. Mauris eget dapibus dolor.
        </p>
         </section>
     <div className="ml-8 uppercase">Date & Name</div>
      <h1 className="text-xl text-end mr-8">Photo Trends</h1>
      <section className="flex snap-center min-w-[600px] ml-96 mb-4">
        <p className="flex text-end mr-8">
          Pellentesque bibendum dolor lectus, vitae molestie nulla maximus non.
          Curabitur egestas velit fringilla dui dignissim, luctus pharetra dolor
          luctus. Sed ac scelerisque diam. Proin accumsan ut mauris sed
          eleifend. Nunc nunc ligula, ultrices sed euismod non, suscipit a
          lectus. Aenean lacinia mattis justo, et varius magna malesuada vel.
          Phasellus mollis diam et dui dapibus, in interdum sem vestibulum.
          Morbi at dapibus eros. Donec molestie consequat ante et auctor. In
          feugiat tristique elit, in faucibus dolor hendrerit sed. Fusce a
          auctor magna, at ultrices purus. Quisque porttitor augue non maximus
          pulvinar. Aliquam ut dignissim mi, ac semper leo. Fusce ultricies,
          purus ultricies finibus pellentesque, nisl erat lacinia leo, sed
          vehicula massa augue eu turpis. Cras lectus odio, rutrum a quam id,
          laoreet varius purus.
        </p>
      </section>
      <div className="text-end mr-8 uppercase">Date & Name</div>
      <Footer />
    </>
  );
}
