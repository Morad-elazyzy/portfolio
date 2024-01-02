import React from "react";
import Link from "next/link";
type Props = { project: projectType };

function ProjectItem({ project }: Props) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
      <div className="left-content flex flex-col justify-center gap-2 order-2 sm:order-1 ">
        <h2 className="text-gray-800 text-2xl font-semibold">{project.name}</h2>
        <span className="text-xl text-gray-900 font-medium">
          {project.creation_date}{" "}
        </span>
        <p className="text-lg text-gray-700">{project.descreption}</p>
        <div className="flex items-start">
          <div className="flex gap-2 items-center flex-wrap ">
            <span className="flex gap-2 items-center font-medium flex-wrap">
              used tools :
            </span>
            {project.used_tools.map((tool) => (
              <span
                key={tool}
                className="text-sm bg-fuchsia-950 text-white p-1"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        <button className="bg-fuchsia-800 mt-6 self-start text-white sm:text-2xl text-base rounded py-2 px-4">
          <Link href={project.project_url} target="blank">
            View
          </Link>
        </button>
      </div>
      <div className="right-content flex justify-center rounded items-center bg-fuchsia-800 h-96 order-1 sm:order-2">
        <img src={project.image_src} style={{ width: "90%", height: "90%" }} />
      </div>
    </div>
  );
}

export default ProjectItem;
