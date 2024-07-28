import { set } from "mongoose";
import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, title, text }) => {
  if (!isOpen) return null;
  const dateTime = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{text}</p>
        <p className="block font-sans uppercase text-base antialiased font-normal leading-relaxed text-inherit">
          Posted on: {dateTime}
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2block w-full py-3 text-xs font-thin uppercase transition bg-slate-600 text-stone-200 rounded-lg shadow-md hover:shadow-lg hover:opacity-85 focus:opacity-85 active:opacity-85"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
