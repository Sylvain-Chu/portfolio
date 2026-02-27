import Image from "next/image";
import { Metadata } from "next";
import type { ProjectType } from "@/types";
import { Slide } from "../../animation/Slide";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { getProjects } from "@/lib/data";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPrisma,
  SiSqlite,
  SiMapbox,
  SiRos,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiOpencv,
  SiPytorch,
  SiFastapi,
  SiJupyter,
  SiPostgresql,
  SiUnity,
  SiCsharp,
  SiCmake,
} from "react-icons/si";

type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string = "";

// Technology icons mapping
const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  Prisma: SiPrisma,
  SQLite: SiSqlite,
  MapBox: SiMapbox,
  "ROS 2": SiRos,
  Python: SiPython,
  "C++": SiCplusplus,
  Docker: SiDocker,
  OpenCV: SiOpencv,
  YOLO: SiPython, // Using Python icon as fallback
  Nav2: SiRos, // Using ROS icon as fallback
  "micro-ROS": SiRos, // Using ROS icon as fallback
  PyTorch: SiPytorch,
  FastAPI: SiFastapi,
  Jupyter: SiJupyter,
  EfficientNet: SiPytorch, // Using PyTorch icon as fallback
  PostgreSQL: SiPostgresql,
  NextAuth: SiNextdotjs, // Using Next.js icon as fallback
  Unity: SiUnity,
  "C#": SiCsharp,
  ShaderLab: SiUnity, // Using Unity icon as fallback
  SFML: SiCplusplus, // Using C++ icon as fallback
  CMake: SiCmake,
};

// Generate static params for all projects at build time
export async function generateStaticParams() {
  const projects: ProjectType[] = getProjects();
  return projects.map((project) => ({
    project: project.slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const projects: ProjectType[] = getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.name} | Projet`,
    metadataBase: new URL(
      `https://sylvain.churlet.eu/projects/${project.slug}`,
    ),
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || fallbackImage || undefined,
      url: `https://sylvain.churlet.eu/projects/${project.slug}`,
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const projects: ProjectType[] = getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Projet non trouvé</div>;

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between flex-wrap mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-md">
              {project.name}
            </h1>

            <div className="flex items-center gap-x-2">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                >
                  <BiLinkExternal aria-hidden="true" />
                  Voir le site
                </a>
              )}

              <a
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${
                  !project.repository
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                }`}
              >
                <BiLogoGithub aria-hidden="true" />
                {project.repository ? "GitHub" : "Pas de repo"}
              </a>
            </div>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-semibold dark:text-zinc-400 text-zinc-600 mb-3">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border dark:border-zinc-800 border-zinc-200 rounded-lg px-3 py-2"
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {project.coverImage?.image && (
            <div className="relative w-full h-40 pt-[52.5%]">
              <Image
                className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
                fill
                src={project.coverImage.image}
                alt={project.coverImage?.alt ?? project.name}
                quality={100}
                placeholder={project.coverImage?.lqip ? `blur` : "empty"}
                blurDataURL={project.coverImage?.lqip || ""}
              />
            </div>
          )}

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <p>{project.description}</p>
          </div>

          {/* Team and dates information */}
          {(project.team || project.dates) && (
            <div className="mt-8 p-4 dark:bg-primary-bg bg-zinc-50 border dark:border-zinc-800 border-zinc-200 rounded-lg">
              {project.team && (
                <div className="mb-3 last:mb-0">
                  <h3 className="text-sm font-semibold dark:text-white text-zinc-900 mb-2">
                    Équipe
                  </h3>
                  <p className="text-sm dark:text-zinc-400 text-zinc-600">
                    {project.team.members.join(", ")}
                  </p>
                  {project.team.context && (
                    <p className="text-sm dark:text-zinc-500 text-zinc-500 mt-1">
                      {project.team.context}
                    </p>
                  )}
                </div>
              )}
              {project.dates && (
                <div>
                  <h3 className="text-sm font-semibold dark:text-white text-zinc-900 mb-2">
                    Période
                  </h3>
                  <p className="text-sm dark:text-zinc-400 text-zinc-600">
                    {project.dates.start}
                    {project.dates.end
                      ? ` - ${project.dates.end}`
                      : " - En cours"}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Detailed sections */}
          {project.detailedSections && project.detailedSections.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold dark:text-white text-zinc-900 mb-6">
                Détails du projet
              </h2>
              <div className="space-y-8">
                {project.detailedSections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold dark:text-white text-zinc-900">
                      {section.title}
                    </h3>
                    <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                      {section.content}
                    </p>
                    {section.image && (
                      <div className="relative w-full mt-4">
                        <Image
                          className="rounded-lg border dark:border-zinc-800 border-zinc-200 w-full h-auto"
                          src={section.image.url}
                          alt={section.image.alt}
                          width={1200}
                          height={800}
                          quality={100}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold dark:text-white text-zinc-900 mb-6">
                Galerie
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="w-full">
                    <Image
                      className="rounded-lg border dark:border-zinc-800 border-zinc-200 w-full h-auto"
                      src={image.url}
                      alt={image.alt}
                      width={800}
                      height={600}
                      quality={100}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Slide>
    </main>
  );
}
