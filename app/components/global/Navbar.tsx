import Link from "next/link";
import Theme from "./Theme";
import MobileMenu from "./MobileMenu";
import { navigationItems } from "@/app/config/navigation";

export default function Navbar() {
  return (
    <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Retour à l'accueil">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="35" height="35" aria-hidden="true">
            <rect width="40" height="40" rx="8" fill="#000000" />
            <text
              x="50%"
              y="52%"
              dominantBaseline="central"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize="15"
              letterSpacing="0.5"
              fill="#33E092"
            >
              SC
            </text>
          </svg>
        </Link>

        <nav className="md:block hidden">
          <ul className="flex items-center gap-x-8">
            {navigationItems.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <Theme />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
