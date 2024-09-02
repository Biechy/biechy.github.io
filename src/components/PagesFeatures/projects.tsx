import React from "react";

import ProjectCard from "./project";
import { Project } from "../types";

const ProjectsList: React.FC<Project[]> = ({ projects }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          tag={project.tag}
          date={project.date}
          technos={project.technos}
          link={project.link}
          repo_link={project.repo_link}
          img={project.img}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
