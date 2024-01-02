import React from "react";
import ProjectItem from "./ProjectItem";
type Props = {
  promise: Promise<projectType[]>;
};

async function PorjectsList({ promise }: Props) {
  const projects = await promise;
  return (
    <div className="container mx-auto mt-8  flex flex-col gap-28">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export default PorjectsList;
