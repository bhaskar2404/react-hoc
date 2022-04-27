import React from "react";

export const BlogsContainer = ({ blogs }) => {
  return blogs?.map(({ id, title, content, authorId }) => (
    <div key={id}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{authorId}</p>
    </div>
  ));
};
