import Image from "next/image";
import { Metadata } from "next";
import type { ProfileType } from "@/types";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import Usage from "../components/pages/Usage";
import { Slide } from "../animation/Slide";
import RefLink from "../components/shared/RefLink";
import { getProfile } from "@/lib/data";

export const metadata: Metadata = {
  title: "A Propos | Sylvain Churlet",
  metadataBase: new URL("https://sylvain.churlet.eu/about"),
  description:
    "En savoir plus sur mes compétences, mon expérience et mon parcours technique",
  openGraph: {
    title: "A Propos | Sylvain Churlet",
    url: "https://sylvain.churlet.eu/about",
    description:
      "En savoir plus sur mes compétences, mon expérience et mon parcours technique",
  },
};

export default async function About() {
  const profile: ProfileType = getProfile();

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <div key={profile?._id}>
        <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide>
              <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                Je suis {profile?.fullName ?? "John Doe"}. Je vis à{" "}
                {profile?.location ?? "'X'"}.
              </h1>

              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                {profile?.fullBio ? (
                  <p>{profile?.fullBio}</p>
                ) : (
                  "Votre biographie apparaîtra ici"
                )}
              </div>
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <Slide delay={0.1}>
              <div className="sticky top-10">
                {profile?.profileImage.image ? (
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                    src={profile?.profileImage.image}
                    width={400}
                    height={400}
                    quality={100}
                    alt={profile?.profileImage.alt}
                    placeholder="blur"
                    blurDataURL={profile?.profileImage.lqip}
                    priority
                  />
                ) : (
                  <div className="h-96 w-[400px] bg-zinc-500 mb-4"></div>
                )}

                <div className="flex flex-col text-center gap-y-4">
                  <div className="flex items-center gap-x-3">
                    <RefLink
                      href="#"
                      className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      Voir le CV <BiLinkExternal className="text-base" />
                    </RefLink>
                    <a
                      href={`${profile?.resumeURL}?dl=${profile?.fullName}-resume.pdf`}
                      className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                      title="Télécharger le CV"
                    >
                      <BiSolidDownload
                        className="text-lg"
                        aria-label="Télécharger le CV"
                      />
                    </a>
                  </div>

                  <a
                    href={`mailto:${profile?.email}`}
                    className="flex items-center gap-x-2 hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    {profile?.email ?? "Adresse email non disponible"}
                  </a>
                </div>
              </div>
            </Slide>
          </aside>
        </section>
        <Slide delay={0.14}>
          <Usage />
        </Slide>
      </div>
    </main>
  );
}
