import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import ContactForm from "../components/pages/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Sylvain Churlet",
  metadataBase: new URL("https://sylvain.churlet.eu/contact"),
  description: "Contactez Sylvain Churlet pour discuter de vos projets",
  openGraph: {
    title: "Contact | Sylvain Churlet",
    url: "https://sylvain.churlet.eu/contact",
    description: "Contactez Sylvain Churlet pour discuter de vos projets",
  },
};

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <header className="mb-10">
        <Slide>
          <h1 className="max-w-3xl font-incognito font-semibold tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
            Contact
          </h1>
          <p className="max-w-2xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Vous avez un projet en tête ou souhaitez simplement échanger ?
            N&apos;hésitez pas à me contacter via le formulaire ci-dessous ou
            directement par email.
          </p>
        </Slide>
      </header>

      <Slide delay={0.1}>
        <ContactForm />
      </Slide>
    </main>
  );
}
