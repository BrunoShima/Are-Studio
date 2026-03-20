# Are Studio — AI Agent Context

## Project Overview

This is a **headless WordPress + React** project. Two separate repos are involved:

- **This repo (React frontend):** Vite + React 19, located at the root of `Are Studio/`.
- **WordPress repo (separate, tracked later):** Tracks `wp/wp-content/` only. Uses a custom plugin to manage CPTs and REST API exposure.

The `wp/` folder is **git-ignored** in this repo. It is a [Local by Flywheel](https://localwp.com/) WordPress site at `wp/app/public/`.

---

## Architecture

```
Are Studio/              ← This repo (React)
├── src/
│   ├── api/
│   │   └── wordpress.js     ← Central WP REST API config & helpers
│   ├── pages/
│   │   └── Home.jsx         ← Maps to WP "Home" page (slug: home)
│   ├── App.jsx
│   └── main.jsx
├── .env                     ← VITE_WP_API_URL (not committed)
└── AGENTS.md

wp/                      ← Git-ignored, separate repo later
└── app/public/          ← WordPress root (Local by Flywheel)
```

---

## WordPress REST API

- Base URL is set via `VITE_WP_API_URL` in `.env`
- Default local value: `http://are-wp.local/wp-json`
- All API calls go through `src/api/wordpress.js`
- Pages are fetched by slug: `GET /wp/v2/pages?slug=<slug>`
- Gutenberg content is returned as rendered HTML in `data.content.rendered`
- Page title is in `data.title.rendered`

### Key Endpoints

| Resource | Endpoint |
|----------|----------|
| Pages (by slug) | `/wp/v2/pages?slug=<slug>` |
| Posts | `/wp/v2/posts` |
| Custom post types | `/wp/v2/<cpt-slug>` (must be registered with `show_in_rest: true`) |

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_WP_API_URL` | Full base URL to WP REST API, e.g. `http://are-studio.local/wp-json` |

Create a `.env` file at the root (not committed). See `.env.example` for reference.

---

## Pages Pattern

Each WP page/CPT maps to a React component in `src/pages/`. The convention:

- Fetch by slug from WP REST API
- Display `title.rendered` as a heading
- Render `content.rendered` via `dangerouslySetInnerHTML` (Gutenberg HTML output)
- Handle loading and error states

## Code Style

- **Do not add conditional guards around individual fields in JSX.** Render fields directly and trust the data shape from the API. Keep the JSX output as clean and flat as possible. Loading/error states at the top of the component are fine, but field-level conditionals (e.g. `{value && <p>{value}</p>}`) should be avoided.

---

## WordPress Setup Notes

- WP is managed via **Local by Flywheel**
- The WP repo (separate) will track `wp-content/` only
- A **custom plugin** will register CPTs and ensure they are exposed via REST API (`show_in_rest: true`)
- The React site consumes data only — no server-side rendering

---

## Status

- [x] React/Vite project scaffolded
- [x] WP REST API connection configured (`src/api/wordpress.js`)
- [x] `Home` page component created and fetching from WP (`src/pages/Home.jsx`)
- [x] `App.jsx` renders `Home` component
- [ ] WP custom plugin repo set up
- [ ] Additional pages/CPTs to be added as content is defined
