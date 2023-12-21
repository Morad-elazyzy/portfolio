import React from "react";
import Link from "next/link";
type Props = { blog: blogType };

export default function BlogItem({ blog }: Props) {
  return (
    <Link href={blog.blog_url} target="_blank">
      <div>
        <div>
          <img
            src={blog.image_src}
            style={{ width: "100%", height: "350px" }}
          />
        </div>
        <div>
          <h2 className="mt-4 mb-1 text-gray-800 text-2xl font-semibold">
            {blog.name}
          </h2>
          <p className="text-lg text-gray-700">{blog.descreption}</p>
        </div>
      </div>
    </Link>
  );
}
