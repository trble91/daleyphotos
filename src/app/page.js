"use client";

import "../app/globals.css";
import React from "react";
import Homepage from "./Homepage/page";

export default function Home() {
  return (
    <>
        <main className="min-h-screen flex-col items-center">
          <Homepage />
        </main>
    </>
  );
}
