import Image from "next/image";
import Link from "next/link";
import type { JobType, ProjectType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import RefLink from "../shared/RefLink";
import EmptyState from "../shared/EmptyState";
import { RiBriefcase3Fill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { getJobs, getProjects } from "@/lib/data";

export default async function Job() {
  const jobs: JobType[] = getJobs();
  const projects: ProjectType[] = getProjects();

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Expériences professionnelles
          </h2>
        </div>
      </Slide>

      {jobs.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {jobs.map((job) => (
              <div
                key={job._id || job.name + job.startDate}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <RefLink
                  href={job.url}
                  className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                >
                  {job.logo &&
                  (job.logo.startsWith("/") || job.logo.startsWith("http")) ? (
                    <Image
                      src={job.logo}
                      className="object-cover duration-300"
                      alt={`${job.name} logo`}
                      width={50}
                      height={50}
                    />
                  ) : (
                    <RiBriefcase3Fill className="w-8 h-8 text-zinc-500" />
                  )}
                </RefLink>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">{job.name}</h3>
                  <p>{job.jobTitle}</p>
                  {job.location && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {job.location}
                    </p>
                  )}
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(job.startDate)} -{" "}
                    {job.endDate ? (
                      formatDate(job.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Présent
                      </span>
                    )}
                  </time>
                  <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4 justify">
                    {job.description}
                  </p>
                  {job.relatedProject &&
                    (() => {
                      const relatedProject = projects.find(
                        (p) => p.slug === job.relatedProject,
                      );
                      return relatedProject ? (
                        <Link
                          href={`/projects/${relatedProject.slug}`}
                          className="inline-flex items-center gap-x-2 text-sm dark:text-primary-color text-tertiary-color hover:underline"
                        >
                          <BiLinkExternal className="w-4 h-4" />
                          Voir le projet : {relatedProject.name}
                        </Link>
                      ) : null;
                    })()}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiBriefcase3Fill />}
          title="Aucune expérience professionnelle"
          message="Aucune expérience professionnelle n'a été trouvée pour le moment."
        />
      )}
    </section>
  );
}
