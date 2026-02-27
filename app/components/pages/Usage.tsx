import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiVuetify,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPython,
  SiFastapi,
  SiGraphql,
  SiVisualstudiocode,
  SiNotion,
} from "react-icons/si";

const tools = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Vuetify", icon: SiVuetify, color: "#1867C0" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
];

export default async function Usage() {
  return (
    <section className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Outils & Technologies</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Technologies et outils que j&apos;utilise au quotidien pour créer des applications.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl dark:bg-zinc-800/50 bg-zinc-100 border dark:border-zinc-700 border-zinc-200 hover:scale-105 transition-transform duration-200"
          >
            <tool.icon className="w-8 h-8" style={{ color: tool.color }} aria-hidden="true" />
            <span className="text-sm font-medium text-center dark:text-zinc-300 text-zinc-700">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
