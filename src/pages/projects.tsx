import React from "react";
import Layout from "@theme/Layout";

import { ProjectsList } from "../components/PagesFeatures";
import { projects } from "@site/src/data";

export default function Projects() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center py-10 sm:py-20">
        <h1>Projects</h1>
        <div className="flex flex-col w-3/4">
          <ProjectsList projects={projects} />
        </div>
      </main>
    </Layout>
  );
}
