import { Suspense } from "react";

import Loading from "@/components/Loading";
import ProjectsList from "@/components/PorjectsList";
import BlogsList from "@/components/BlogsList";
import getProjects from "@/data/getProjects";
import getBlogs from "@/data/getBlogs";

type Props = {
  params: {
    category: String;
  };
};

export default function page({ params: { category } }: Props) {
  let renderhtml;

  if (category === "blogs") {
    const blogs: Promise<blogType[]> = getBlogs();
    renderhtml = <BlogsList promise={blogs} />;
  } else {
    const projects = getProjects(category);
    renderhtml = <ProjectsList promise={projects} />;
  }
  return (
    <main className="py-24 sm:pt-24 pt-36  px-4 ">
      <div className="bg-fuchsia-700 text-white py-8 my-8 text-3xl pl-2 ">
        <div className="container mx-auto">
          <h2>
            <span className="capitale">
              {category == "front-end" ? "Front End " : category}
            </span>
            & Projects
          </h2>
        </div>
      </div>

      <Suspense fallback={<Loading />}>{renderhtml}</Suspense>
    </main>
  );
}
