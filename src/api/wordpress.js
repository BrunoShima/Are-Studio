/**
 * BASE_URL — The root address of your WordPress REST API.
 *
 * This is pulled from an environment variable called VITE_WP_API_URL, which you
 * define in your .env file. The "import.meta.env" part is how Vite (your build tool)
 * exposes those variables to your JavaScript code at build time.
 *
 * Think of it like a contact card for your WordPress site. Instead of typing the full
 * address every time you want to call WordPress, you store it once here and reference
 * BASE_URL throughout the file. If your WordPress URL ever changes, you only update
 * it in one place (.env), not in every function.
 *
 * Example .env entry:
 *   VITE_WP_API_URL=http://my-site.local/wp-json
 *
 * So when a function builds a URL like `${BASE_URL}/wp/v2/pages`, the result is:
 *   http://my-site.local/wp-json/wp/v2/pages
 *
 * The "/wp-json" part is WordPress's REST API gateway — every request goes through
 * it. Everything after that is the "route" that tells WordPress what data you want.
 */
const BASE_URL = import.meta.env.VITE_WP_API_URL

/**
 * getPageBySlug — Fetches a single WordPress page using its slug.
 *
 * ─── WHAT IS A SLUG? ───────────────────────────────────────────────────────────
 * A slug is the URL-friendly version of a page's title. If your page is called
 * "About Us", WordPress turns that into the slug "about-us". You can see it in
 * the WordPress editor under the "Permalink" field.
 *
 * ─── WHY FETCH BY SLUG AND NOT BY ID? ──────────────────────────────────────────
 * IDs are internal database numbers — they work, but they're fragile. If you ever
 * move your site or rebuild the database, page IDs can change. Slugs are tied to
 * the content itself and rarely change, so they make for more resilient code.
 * It's like looking someone up by their name instead of their employee number.
 *
 * ─── HOW THE WORDPRESS REST API RETURNS DATA ────────────────────────────────────
 * The WordPress REST API always returns pages as an ARRAY, even when you filter
 * by slug. This is because theoretically multiple pages could match a query
 * (though in practice slugs are unique). So when we ask for:
 *
 *   /wp/v2/pages?slug=about-us
 *
 * WordPress responds with something like:
 *   [
 *     {
 *       "id": 12,
 *       "slug": "about-us",
 *       "title": { "rendered": "About Us" },
 *       "content": { "rendered": "<p>We are...</p>" },
 *       ...
 *     }
 *   ]
 *
 * Notice it's wrapped in [ ]. That's why we check pages.length and return pages[0]
 * — we unwrap the array and hand back just the page object itself.
 *
 * ─── ASYNC / AWAIT ──────────────────────────────────────────────────────────────
 * Fetching data from a server takes time — your JavaScript can't just pause and
 * wait for it the way you'd wait in line at a shop. Instead, it uses Promises,
 * and "async/await" is the modern, readable way to work with them.
 *
 * "async" before the function declaration means: "this function will do something
 * that takes time, and it will return a Promise."
 *
 * "await" before fetch() means: "pause HERE and wait for the network request to
 * finish before moving to the next line." Crucially, it only pauses THIS function
 * — the rest of your app keeps running normally.
 *
 * Think of it like placing an order at a restaurant (fetch), sitting down to wait
 * (await), and only eating (using the data) once the food actually arrives.
 *
 * ─── ERROR HANDLING ─────────────────────────────────────────────────────────────
 * Two failure cases are handled explicitly:
 *
 * 1. response.ok — The fetch() API considers any HTTP status code below 400 as
 *    "ok". If WordPress returns a 404 (not found), 500 (server error), etc.,
 *    response.ok will be false. We throw an Error here so the calling code knows
 *    something went wrong rather than silently receiving bad data.
 *
 * 2. pages.length === 0 — Even if the HTTP request succeeds (status 200), WordPress
 *    might return an empty array if no page matches the slug. A successful response
 *    with no results is not the same as a network error, so we check for it
 *    separately and throw a descriptive error.
 *
 * Throwing errors from API functions like this is good practice — it lets the
 * component or page that called this function decide how to handle it (show an
 * error message, redirect, etc.) rather than burying the failure here.
 *
 * @param {string} slug - The page slug to look up (e.g. "about-us", "home").
 * @returns {Promise<Object>} The first matching WordPress page object.
 */
/**
 * getProducts — Fetches all published Products from the custom post type.
 *
 * The endpoint is /wp/v2/are_product — WordPress automatically creates a REST
 * route using the post type name we registered in the plugin (are_product).
 *
 * We append "_fields" to limit the response to only the fields we actually use.
 * WordPress posts contain a lot of data by default (author, links, GUID, etc.)
 * that we don't need. Trimming the response keeps it fast and readable.
 *
 * The "meta" field is where our custom _are_release_year value lives. It's
 * included in the REST response because we registered it with show_in_rest: true
 * in the plugin. Without that, WordPress hides meta fields from the API entirely.
 *
 * @returns {Promise<Array>} Array of product post objects.
 */
export async function getProducts() {
  const fields = 'id,slug,title,excerpt,meta'
  const response = await fetch(`${BASE_URL}/wp/v2/are_product?_fields=${fields}&per_page=100`)
  if (!response.ok) {
    throw new Error(`WP API error: ${response.status}`)
  }
  return response.json()
}

export async function getPageBySlug(slug) {
  const response = await fetch(`${BASE_URL}/wp/v2/pages?slug=${slug}`)
  if (!response.ok) {
    throw new Error(`WP API error: ${response.status}`)
  }
  const pages = await response.json()
  if (!pages.length) {
    throw new Error(`No page found with slug: "${slug}"`)
  }
  return pages[0]
}
