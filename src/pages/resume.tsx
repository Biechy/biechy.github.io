import React from "react";
import Layout from "@theme/Layout";
import {
  educations,
  experiences,
  projects,
  technos,
  publications,
} from "../data";
import {
  EducationsList,
  ExperiencesList,
  PublicationsList,
  ProjectsList,
  Stack,
} from "../components/PagesFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Resume() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center gap-y-20 sm:gap-y-40 py-10 sm:py-20">
        <div className="flex w-3/4">
          <div className="flex flex-col w-full sm:w-2/3">
            <h1 className="ml-3">Educations</h1>
            <EducationsList educations={educations} />
          </div>
          <div className="hidden sm:flex w-1/3 justify-center items-center">
            <img
              src={useBaseUrl("img/memojie/study.png")}
              alt="Profile Picture"
              className="h-48"
            />
          </div>
        </div>
        <div className="flex w-3/4">
          <div className="hidden sm:flex w-1/3 justify-center items-center">
            <img
              src={useBaseUrl("img/memojie/work.png")}
              alt="Profile Picture"
              className="h-48"
            />
          </div>
          <div className="flex flex-col w-full sm:w-2/3">
            <h1 className="ml-3">Experiences</h1>
            <ExperiencesList experiences={experiences} />
          </div>
        </div>
        <div className="flex flex-col w-11/12 sm:w-3/4">
          <h1 className="ml-3">Main Publications</h1>
          <PublicationsList publications={publications} />
        </div>
        <div className="flex flex-col w-[90%]">
          <h1 className="ml-3">Main Projects & Stack</h1>
          <div className="flex flex-col xl:flex-row w-full sm:items-center">
            <div className="flex flex-col w-full xl:w-1/2">
              <ProjectsList
                projects={projects.filter((project) =>
                  project.tag.includes("main")
                )}
              />
              <a
                className="text-sm hover:underline cursor-pointer block text-right mr-10"
                href="/projects"
              >
                All Projects
              </a>
            </div>
            <div className="flex flex-col w-full xl:w-1/2">
              <Stack technos={technos} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
