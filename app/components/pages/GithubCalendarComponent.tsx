import { Suspense } from "react";
import ContributionGraph from "./ContributionGraph";
import { Slide } from "@/app/animation/Slide";

function CalendarSkeleton() {
  return (
    <div className="flex xl:flex-row flex-col gap-4">
      <div className="h-36 w-full max-w-3xl rounded-lg dark:bg-zinc-800 bg-zinc-100 animate-pulse" />
      <div className="flex xl:flex-col flex-row gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-9 w-16 rounded-lg dark:bg-zinc-800 bg-zinc-100 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

export default function GithubCalendarComponent() {
  return (
    <section>
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Contribution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <Suspense fallback={<CalendarSkeleton />}>
          <ContributionGraph />
        </Suspense>
      </Slide>
    </section>
  );
}
