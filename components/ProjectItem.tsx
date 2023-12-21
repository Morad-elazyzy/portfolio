import React from "react";
import Link from "next/link";
type Props = { project: projectType };

function ProjectItem({ project }: Props) {
  return (
    <Link href={project.project_url}>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
        <div className="left-content flex flex-col justify-center gap-2 order-2 sm:order-1 ">
          <h2 className="text-gray-800 text-2xl font-semibold">
            {project.name}
          </h2>
          <span className="text-xl text-gray-900 font-medium">
            {project.creation_date}{" "}
          </span>
          <p className="text-lg text-gray-700">{project.descreption}</p>
          <div className="flex items-start">
            <p className="text-base text-gray-600 font-medium mr-2 whitespace-nowrap">
              used tools
            </p>
            <div className="flex gap-2 items-center flex-wrap ">
              {project.used_tools.map((tool) => (
                <span className="text-sm bg-fuchsia-950 text-white p-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="right-content flex justify-center rounded items-center bg-fuchsia-800 h-96 order-1 sm:order-2">
          <img
            src={project.image_src}
            style={{ width: "90%", height: "90%" }}
          />
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
