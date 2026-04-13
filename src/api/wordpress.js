/**
 * src/api/wordpress.js
 *
 * Central module for all WordPress REST API calls.
 *
 * HOW IT WORKS (for new team members)
 * ────────────────────────────────────
 * WordPress ships with a built-in REST API available at /wp-json.
 * Every request goes through that gateway. We store the full base URL
 * in a .env variable (VITE_WP_API_URL) so we only ever change it in
 * one place — not scattered across every component.
 *
 * Example .env:
 *   VITE_WP_API_URL=http://are-wp.local/wp-json
 *
 * A typical full URL looks like:
 *   http://are-wp.local/wp-json/wp/v2/are_product?slug=metamorphosis-tee
 *
 * All functions are async and throw on error, so the calling component
 * can decide how to display the failure (loading state, error message, etc).
 */
const BASE_URL = import.meta.env.VITE_WP_API_URL


/* ─────────────────────────────────────────────────────────────────
 * getProducts
 *
 * Returns all published products as a flat array. Used on the Home
 * page (first 3) and the Shop/listing page (all).
 *
 * Fields requested:
 *   id, slug, title, excerpt, meta
 *
 * The "meta" object will contain all registered custom fields:
 *   _are_price, _are_release_number, _are_sizes, _are_image_url, etc.
 * ───────────────────────────────────────────────────────────────── */
export async function getProducts() {
  const fields = 'id,slug,title,excerpt,meta'
  const response = await fetch(
    `${BASE_URL}/wp/v2/are_product?_fields=${fields}&per_page=100`
  )
  if ( !response.ok ) {
    throw new Error( `WP API error: ${response.status}` )
  }
  return response.json()
}


/* ─────────────────────────────────────────────────────────────────
 * getProductBySlug
 *
 * Returns a single product with all fields needed for the detail page,
 * including the full content (editor body) and parsed convenience
 * properties:
 *
 *   product.sizes          → string[]   e.g. ['XS', 'S', 'M', 'L', 'XL']
 *   product.processImages  → object[]   e.g. [{url, label, caption}, ...]
 *
 * The API always returns an array even for slug lookups (WordPress
 * convention), so we unwrap the first item and throw if nothing found.
 * ───────────────────────────────────────────────────────────────── */
export async function getProductBySlug( slug ) {
  const fields = 'id,slug,title,content,excerpt,meta'
  const response = await fetch(
    `${BASE_URL}/wp/v2/are_product?slug=${slug}&_fields=${fields}`
  )
  if ( !response.ok ) {
    throw new Error( `WP API error: ${response.status}` )
  }
  const products = await response.json()
  if ( !products.length ) {
    throw new Error( `No product found with slug: "${slug}"` )
  }

  const product = products[0]

  // Parse _are_sizes from "XS,S,M,L,XL" → ['XS', 'S', 'M', 'L', 'XL']
  product.sizes = ( product.meta._are_sizes || '' )
    .split( ',' )
    .map( s => s.trim() )
    .filter( Boolean )

  // Parse _are_process_images from JSON string → array of objects
  try {
    product.processImages = JSON.parse( product.meta._are_process_images || '[]' )
  } catch {
    product.processImages = []
  }

  return product
}


/* ─────────────────────────────────────────────────────────────────
 * getPageBySlug
 *
 * Fetches a standard WordPress Page by its slug.
 * Used for any CMS-managed static pages (e.g. an "About" page
 * managed fully from the WP editor rather than hardcoded in React).
 * ───────────────────────────────────────────────────────────────── */
export async function getPageBySlug( slug ) {
  const response = await fetch( `${BASE_URL}/wp/v2/pages?slug=${slug}` )
  if ( !response.ok ) {
    throw new Error( `WP API error: ${response.status}` )
  }
  const pages = await response.json()
  if ( !pages.length ) {
    throw new Error( `No page found with slug: "${slug}"` )
  }
  return pages[0]
}
