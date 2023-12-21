import React from "react";
import BlogItem from "./BlogItem";
type Props = {
  promise: Promise<blogType[]>;
};

async function BlogsList({ promise }: Props) {
  const blogs = await promise;
  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export default BlogsList;
