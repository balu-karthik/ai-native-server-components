// EXERCISE 1 — Dynamic route + the blocking-route error
//
// Goal: render the real title (title + overview) for this slug, call
// notFound() if it doesn't exist.
//
// `params` is a Promise here, and awaiting it directly in an async page
// triggers "Uncached data was accessed outside of <Suspense>" — same
// rule as connection()/cookies(). Fix: split into an outer component and
// an inner async component, same shape as app/rendering/revalidated/page.tsx.
//
// HINT: `getTitle` + `Title` type from '@/lib/db', `notFound` from 'next/navigation':
// async function TitleBody({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const title = getTitle(slug);
//   if (!title) notFound();
//   return ( /* render title.title and title.overview */ );
// }
// export default function TitlePage({ params }: { params: Promise<{ slug: string }> }) {
//   return <Suspense fallback={<p>Loading…</p>}><TitleBody params={params} /></Suspense>;
// }
//
// Checkpoint — `npm run build`: what marker does /titles/[slug] get?
// `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:PORT/titles/nonexistent-slug`

import { Suspense } from "react";

function ExercisePlaceholder({ n, hint }: { n: number; hint: string }) {
  return (
    <div className="rounded-xl border border-dashed border-black/20 bg-white/50 p-8 text-center dark:border-white/20 dark:bg-white/5">
      <p className="text-2xl">🚧</p>
      <p className="mt-2 font-medium">Exercise {n} not implemented</p>
      <p className="mt-1 text-sm text-neutral-500">{hint}</p>
    </div>
  );
}

export default function TitlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="animate-pulse space-y-3">
          <div className="h-8 w-2/3 rounded bg-black/10 dark:bg-white/10" />
          <div className="h-4 w-full rounded bg-black/10 dark:bg-white/10" />
          <div className="h-4 w-5/6 rounded bg-black/10 dark:bg-white/10" />
        </div>
      }
    >
      <ExercisePlaceholder n={1} hint="See the comment block at the top of this file." />
    </Suspense>
  );
}
