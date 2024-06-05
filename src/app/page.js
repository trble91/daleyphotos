"use client";

import "../app/globals.css";
import React from "react";
import Homepage from "./Homepage/page";
import Footer from "@/Footer/page";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex-col items-center">
        <Homepage />
      </main>
      <Footer />
    </>
  );
}
