import Layout from "@theme/Layout";
import Markdown from "react-markdown";

import { NewsList } from "../components/PagesFeatures";
import { news } from "@site/src/data";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center gap-y-20 sm:gap-y-40 py-10 sm:py-20">
        <div className="flex w-3/4">
          <div className="flex flex-col w-full sm:w-2/3">
            <h1 className="ml-3">👋 About Me</h1>
            <Markdown className="text-sm">
              I am a PhD student at the University of Paris-Saclay and Inria
              Saclay under the supervision of [Nicolas
              Anciaux](https://pages.saclay.inria.fr/nicolas.anciaux/) and the
              [PETSCRAFT](https://www.inria.fr/fr/petscraft) team. I work on
              adding privacy metrics to NLP and LLM models. I work also on some
              [side projects](/projects) in Software Engineer and MLOps. I like
              learning new things and sharing my knowledge
              [here](/knowledge/welcome), especially for machine learning,
              economics, finance and computer science. I am convinced that the
              ability to make theoretical links between all these areas will
              speed up research in AI. Please, do not hesitate to contact me by
              email.
            </Markdown>
          </div>
          <div className="hidden sm:flex w-1/3 justify-center items-center">
            <img
              src={useBaseUrl("img/memojie/hey.png")}
              alt="Profile Picture"
              className="h-48"
            />
          </div>
        </div>
        <div className="flex w-3/4">
          <div className="hidden sm:flex w-1/3 justify-center items-center">
            <img
              src={useBaseUrl("img/memojie/news.png")}
              alt="Profile Picture"
              className="h-48"
            />
          </div>
          <div className="flex flex-col w-full sm:w-2/3">
            <h1 className="ml-3">News</h1>
            <NewsList news={news} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
