import { useEffect, useState } from "react";

export const withBlogs = (Component, retrivalBlogs) => (props) => {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    setBlogs(retrivalBlogs);
  }, []);

  return <Component blogs={blogs} {...props} />;
};
