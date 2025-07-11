
# Pokémon Explorer – Assignment Submission

This is a simple Pokémon search app built using **Next.js (App Router)** and **Tailwind CSS** as part of a frontend evaluation assignment.

The task was to build a responsive, type-filtered, and name-searchable Pokémon listing with SSR, dynamic routing, and good code quality.

---

## ✅ Features Implemented

- **Server-Side Rendering (SSR)** for initial Pokémon list and types using the PokéAPI
- **Dropdown filter** to show Pokémon by type (uses `/type/{name}` API)
- **Search bar** to filter Pokémon by name (CSR)
- **Custom Hook (`usePokemonFilter`)** to manage filter and search logic centrally
- **Dynamic Routing**: `/pokemon/[name]` to show Pokémon details with breadcrumb
- **Reusable Components**: basic components for `Card`, `Select`, and `Search` (only `Card` used in final version)

---

## 🧠 Architecture & Thought Process

- I used SSR on the home page to fetch initial Pokémon list and types.
- Created a parent `Pokemon.tsx` wrapper to include:
  - `<PokemonFilters />`: handles dropdown and search
  - `<PokemonList />`: displays card list
- Shared filter/search state through a custom hook (`usePokemonFilter`), using `useState` internally.
- In production, I would avoid this wrapper and instead use layout sections with their own hooks per component for better separation.
- Detail page was created using dynamic routing `/pokemon/[name]`, and the name was extracted using `usePathname` for simplicity.
- Fetched real-time data for the selected Pokémon to show stats, image, and type.
- Designed the UI using Tailwind with a clean and responsive layout.

---

## 📁 Folder Structure



/app
├── page.tsx → SSR main page
├── /pokemon/[name]/page.tsx → Dynamic details page

/components
├── pokemon/
├── PokemonFilters.tsx
├── PokemonList.tsx
└── PokemonCard.tsx

/hooks
└── usePokemonFilter.ts

/lib
└── pokemon-api.ts → SSR-safe API utils

---

## 🧪 Things I'd Improve With More Time

- Use dynamic metadata for SEO per Pokémon
- Add error/loading states for better UX
- Use `notFound()` in dynamic routes if name is invalid
- Create separate hooks for search and filter
- Use my reusable input/select components properly in the final version
- Implement the optional “Favorites” feature (with `localStorage`)
- Add unit tests for components and hook logic

---

## 🧰 Tech Stack

- **Next.js (App Router)**
- **Tailwind CSS**
- **PokéAPI** (REST)
- No external state libraries (as instructed)
- Pure functional components with SSR + CSR mix

---

## 🎯 Notes

- The project is built by a working frontend professional with limited time, focusing on delivering a clean and working solution over polish.
- Code is intentionally not over-optimized or "AI-clean" to reflect natural development under a deadline.



Thanks for the opportunity! Looking forward to feedback and next steps.
