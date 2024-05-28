import React from "react";

const PostCard = () => {
  return (
    <div className="flex flex-col rounded-lg shadow min-w-80">
      <div className="h-24 bg-orange-300 rounded-t-lg"></div>
      <div className="px-4 py-8">
        <h1 className="text-lg">Title</h1>
      </div>
    </div>
  );
};
export default PostCard;
