import Image from "next/image";
import { Slide } from "../../animation/Slide";
import RefLink from "../shared/RefLink";
import { getEducations } from "@/lib/data";
import { formatDate } from "../../utils/date";

export default async function Education() {
  const educationData = getEducations();
  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Formation
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-y-10">
          {educationData.map(
            (edu: {
              _id: string;
              logo?: string;
              school: string;
              degree: string;
              field: string;
              startDate: string;
              endDate?: string;
              description?: string;
              level?: string;
              linkedSchool?: {
                logo?: string;
                name: string;
                url: string;
              };
            }) => (
              <div
                key={edu._id}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-4xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <div className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                  {edu.logo ? (
                    <Image
                      src={edu.logo}
                      className="object-contain duration-300"
                      alt={`${edu.school} logo`}
                      width={50}
                      height={50}
                    />
                  ) : (
                    <span className="text-3xl">🎓</span>
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="dark:text-zinc-300 text-zinc-700">
                    {edu.degree}, {edu.field}
                  </p>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(edu.startDate)} -{" "}
                    {edu.endDate ? (
                      formatDate(edu.endDate)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Présent
                      </span>
                    )}
                  </time>
                  {edu.description && (
                    <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                      {edu.description}
                    </p>
                  )}
                  {edu.level && (
                    <p className="text-sm dark:text-zinc-400 text-zinc-600 mt-2">
                      Niveau : {edu.level}
                    </p>
                  )}
                  {edu.linkedSchool && (
                    <div className="mt-4 flex items-center gap-x-4 p-4 dark:bg-zinc-800/50 bg-zinc-100 rounded-lg">
                      <div className="min-w-[50px] min-h-[50px] flex items-center justify-center">
                        {edu.linkedSchool.logo ? (
                          <Image
                            src={edu.linkedSchool.logo}
                            className="object-contain duration-300 rounded-md"
                            alt={`${edu.linkedSchool.name} logo`}
                            width={40}
                            height={40}
                          />
                        ) : (
                          <span className="text-2xl">🏫</span>
                        )}
                      </div>
                      <div>
                        <RefLink
                          href={edu.linkedSchool.url}
                          className="font-semibold dark:text-primary-color text-secondary-color hover:underline"
                        >
                          {edu.linkedSchool.name}
                        </RefLink>
                        <p className="text-xs dark:text-zinc-400 text-zinc-500">
                          Lien vers la page de l&apos;école
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </Slide>
    </section>
  );
}
