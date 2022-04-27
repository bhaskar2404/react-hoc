import { useEffect, useState } from "react";

export const useBlogs = (retrivalBlogs) => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    setBlogs(retrivalBlogs);
  }, []);

  return [blogs, setBlogs];
};
