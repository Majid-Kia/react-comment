// src/components/YourComponent.js
import React from "react";

const Comments = () => {
  return (
    <div className="px-6">
      <div className="flex items-center">
        <span className="w-9 h-9 rounded-full bg-gray-600 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-user text-white"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
          </svg>
        </span>
        <span className="ml-3 text-gray-600"> MatthewsFXT </span>
      </div>
      <p className="mt-2 text-gray-700">
        Excuse me, but is there such a thing as a MetaTrader 5 VPS?
      </p>
      <button className="flex mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-bubble-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12.4 19a4.2 4.2 0 0 1 -1.57 -.298l-3.83 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.335 5.335 0 0 1 9.194 1.078a5.333 5.333 0 0 1 4.45 6.89" />
          <path d="M16 19h6" />
          <path d="M19 16v6" />
        </svg>
        <span className="ml-2">REPLY</span>
      </button>
    </div>
  );
};

export default Comments;
