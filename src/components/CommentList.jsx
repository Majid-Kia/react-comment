// src/components/YourComponent.js
import React from "react";
import axiosInstance from "../services/axiosInstance";
import CommentSection from "./CommentSection";
import Comment from "./Comment";
import PostCard from "./PostCard";

const CommentList = () => {
  return (
    <div className="px-4">
      <CommentSection />
      <Comment />
      <PostCard />
    </div>
  );
};

export default CommentList;
