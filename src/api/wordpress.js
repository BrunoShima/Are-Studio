const BASE_URL = import.meta.env.VITE_WP_API_URL

/**
 * Fetch a WordPress page by its slug.
 * Returns the first matching page object from the REST API.
 */
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
