import React from "react";
import { getRecentBlogs, getArchivedBlogs, getPopularBlogs } from "../api";
import { BlogsContainer } from "../components/BlogsContainer";
import { withBlogs } from "../genericcomponet/withBlogs";
import { useBlogs } from "../hook/useBlogs";
// import { getArchivedBlogs } from "./api/archivedBlogs";
// import { getPopularBlogs } from "./api/popularBlogs";

export const Home = () => {
  /*  
 // HOC component 
 const RecentBlogs = withBlogs(BlogsContainer, getRecentBlogs);
  const ArchivedBlogs = withBlogs(BlogsContainer, getArchivedBlogs);
  const PopularBlogs = withBlogs(BlogsContainer, getPopularBlogs); */

  const RecentBlogs = (props) => {
    const [blogs] = useBlogs(getRecentBlogs);
    return <BlogsContainer blogs={blogs} {...props} />;
  };

  const ArchivedBlogs = (props) => {
    const [blogs] = useBlogs(getArchivedBlogs);
    return <BlogsContainer blogs={blogs} {...props} />;
  };

  const PopularBlogs = (props) => {
    const [blogs] = useBlogs(getPopularBlogs);
    return <BlogsContainer blogs={blogs} {...props} />;
  };
  return (
    <div>
      <section>
        <h2>Recent blogs</h2>
        <RecentBlogs />
      </section>
      <section>
        <h2>Popular blogs</h2>
        <PopularBlogs />
      </section>
      <section>
        <h2>Archived blogs</h2>
        <ArchivedBlogs />
      </section>
    </div>
  );
};
