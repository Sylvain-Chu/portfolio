import "@/app/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "./assets/font/font";
import { gitlabmono } from "./assets/font/font";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Sylvain Churlet | Ingénieur Logiciel & Développeur Fullstack",
  description:
    "Sylvain Churlet est un ingénieur logiciel passionné spécialisé dans le développement fullstack, avec une expertise en cloud computing et DevOps.",
  url: "https://sylvain.churlet.eu",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  keywords: [
    "Sylvain Churlet",
    "développeur",
    "fullstack",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: "Sylvain Churlet" }],
  creator: "Sylvain Churlet",
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "sylvain.churlet.eu",
    locale: "fr-FR",
    type: "website",
    description: options.description,
  },
  twitter: {
    card: "summary_large_image",
    title: options.title,
    description: options.description,
  },
  alternates: {
    canonical: options.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sylvain Churlet",
  url: options.url,
  jobTitle: "Ingénieur Logiciel & Développeur Fullstack",
  description: options.description,
  sameAs: [
    "https://github.com/Sylvain-Chu",
    "https://www.linkedin.com/in/sylvain-churlet/",
    "https://gitlab.com/Sylvain-Chu1",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <ScrollToTop />
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md"
          >
            Aller au contenu principal
          </a>
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
