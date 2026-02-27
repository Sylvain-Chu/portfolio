import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import type { ProjectType } from "@/types";
import EmptyState from "../components/shared/EmptyState";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import { getProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projets | Sylvain Churlet",
  metadataBase: new URL("https://sylvain.churlet.eu/projects"),
  description: "Découvrez les projets réalisés par Sylvain Churlet",
  openGraph: {
    title: "Projets | Sylvain Churlet",
    url: "https://sylvain.churlet.eu/projects",
    description: "Découvrez les projets réalisés par Sylvain Churlet",
  },
};

export default async function Project() {
  const projects: ProjectType[] = getProjects();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projets"
        description="J'ai travaillé sur de nombreux projets au fil des années, mais voici ceux dont je suis le plus fier. Beaucoup d'entre eux sont open-source, donc si quelque chose vous intéresse, n'hésitez pas à consulter le code et à contribuer si vous avez des idées d'amélioration."
      />

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex flex-col gap-y-3 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
              >
                <div className="flex items-center gap-x-4">
                  {project.logo && !project.logo.startsWith("/") && !project.logo.startsWith("http") ? (
                    <div className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2 text-3xl">
                      {project.logo}
                    </div>
                  ) : project.logo ? (
                    <Image
                      src={project.logo}
                      width={60}
                      height={60}
                      alt={project.name}
                      className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                    />
                  ) : (
                    <div className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 rounded-lg text-3xl">
                      🪴
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
                    <div className="text-sm dark:text-zinc-400 text-zinc-600">
                      {project.tagline}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Projets" />
        )}
      </Slide>
    </main>
  );
}
