import { Suspense } from "react";

import Loading from "@/components/Loading";
import ProjectsList from "@/components/PorjectsList";
import BlogsList from "@/components/BlogsList";
import getProjects from "@/data/getProjects";
import getBlogs from "@/data/getBlogs";

type Props = {
  params: {
    category: string;
  };
};

export default async function page({ params: { category } }: Props) {
  let renderhtml;

  if (category === "blogs") {
    const blogs: any = getBlogs();
    renderhtml = <BlogsList promise={blogs} />;
  } else {
    const projects = getProjects(category);
    renderhtml = <ProjectsList promise={projects as Promise<projectType[]>} />;
  }
  return (
    <main className="px-4">
      <header className="container mx-auto ">
        <h2 className="text-gray-800 mt-32 text-3xl font-bold capitalize">
          {category == "blogs" ? "Blogs" : `${category} Projects`}
        </h2>
      </header>
      <Suspense fallback={<Loading />}>{renderhtml}</Suspense>
    </main>
  );
}
