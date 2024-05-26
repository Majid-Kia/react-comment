import React, { useState } from "react";

const CommentSection = () => {
  return (
    <div className="max-w-xl p-6 bg-white rounded-lg">
      <form className="flex flex-col ">
        <div className="mb-4 flex items-center">
          <input
            type="email"
            id="email"
            class="mt-1 p-2 block w-full border sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Name"
          />
        </div>
        <div className="mb-4 flex items-center">
          <textarea
            placeholder="Comment"
            className="mt-1 resize-none min-h-28 p-2 block w-full border sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div>
          <button className="bg-orange-500 flex text-white px-6 h-10 w-auto items-center rounded">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
