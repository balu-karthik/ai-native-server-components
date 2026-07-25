"use client";

// EXERCISE 2 — Server default vs the 'use client' boundary
//
// Goal: an "Add to watchlist" button that toggles this title in
// localStorage. Needs `useState` + the browser `localStorage` API.
//
// HINT:
//   import { useState } from 'react';
//   export function WatchlistButton({ slug }: { slug: string }) {
//     const key = `watchlist:${slug}`;
//     const [saved, setSaved] = useState(false);
//
//     return (
//       <button onClick={() => {
//         const next = !saved;
//         if (next) localStorage.setItem(key, '1');
//         else localStorage.removeItem(key);
//         setSaved(next);
//       }}>
//         {saved ? 'In watchlist' : 'Add to watchlist'}
//       </button>
//     );
//   }
//
// Then render it in TitleBody : <WatchlistButton slug={title.slug} />
