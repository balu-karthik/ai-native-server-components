// EXERCISE 4b — Force genuine per-request rendering
//
// Goal: show the live total watch count across all titles, recomputed on
// EVERY request — the opposite of Exercise 4a's periodic revalidation.
//
// HINT — same runtime-deferral function as RatingBadge (Exercise 3),
// wrapped in <Suspense> here:
//   import { Suspense } from 'react';
//   import { connection } from 'next/server';
//   import { getTotalWatches } from '@/lib/db';
//   async function TotalWatches() {
//     await connection();
//     const total = getTotalWatches();
//     return <p>Total watches across all titles: {total}</p>;
//   }
//   export default function StatsPage() {
//     return (
//       <div>
//         <h1>Live Stats</h1>
//         <Suspense fallback={<p>Loading…</p>}>
//           <TotalWatches />
//         </Suspense>
//       </div>
//     );
//   }
//
// Checkpoint — `npm run build`: what marker do you expect for `/stats`?
// Both `/` and `/stats` read the same kind of synchronous SQLite call —
// why do they end up with different markers?

export default function StatsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Live Stats</h1>
      <div className="mt-8 rounded-xl border border-dashed border-black/20 bg-white/50 p-8 text-center dark:border-white/20 dark:bg-white/5">
        <p className="text-2xl">🚧</p>
        <p className="mt-2 font-medium">Exercise 4b not implemented</p>
        <p className="mt-1 text-sm text-neutral-500">
          See the comment block at the top of this file.
        </p>
      </div>
    </div>
  );
}
