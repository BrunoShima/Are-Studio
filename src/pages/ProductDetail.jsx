import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { html } from '../helper-functions'
import { getProductBySlug, getProducts } from '../api/wordpress'

export default function ProductDetail() {
  const { slug } = useParams()

  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [error, setError]     = useState(null)

  useEffect(() => {
    setProduct(null)
    setError(null)

    Promise.all([getProductBySlug(slug), getProducts()])
      .then(([prod, all]) => {
        setProduct(prod)
        setRelated(all.filter((p) => p.slug !== slug).slice(0, 2))
      })
      .catch(setError)
  }, [slug])

  if (error) return (
    <main className="px-6 md:px-20 py-16 md:py-[120px]">
      <p className="text-[15px] opacity-60">
        Product not found — check that WordPress is running and this product exists.
      </p>
    </main>
  )

  if (!product) return (
    <main className="px-6 md:px-20 py-16 md:py-[120px]">
      <p className="text-[15px] opacity-60">Loading…</p>
    </main>
  )

  return (
    <main>
      {/* ── Two-column product layout ────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[55%_45%]">
        {/* Left — image (sticky on desktop only) */}
        <div className="md:sticky md:top-[73px] md:h-[calc(100vh-73px)] h-[50vh]">
          {product.meta._are_image_url ? (
            <img
              src={product.meta._are_image_url}
              alt={product.title.rendered}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-placeholder" />
          )}
        </div>

        {/* Right — scrollable product info */}
        <div className="px-6 md:px-20 py-10 md:py-20 space-y-8">
          {/* Eyebrow */}
          <div className="font-medium text-[10px] tracking-label uppercase opacity-60">
            Release {product.meta._are_release_number || '—'}
          </div>

          {/* Product name */}
          <h1
            className="font-light text-[36px] md:text-[48px] leading-tight"
            {...html(product.title.rendered)}
          />

          {/* Concept — full editor content */}
          <div
            className="font-normal text-[15px] leading-[1.7] space-y-4 [&_p]:mt-4 first:[&_p]:mt-0"
            {...html(product.content.rendered)}
          />

          {/* Add to Cart */}
          <Link
            to="/shop"
            className="block w-full bg-black text-white text-center font-medium text-[13px] tracking-[2px] uppercase py-4 hover:opacity-70 transition-opacity duration-200"
          >
            Add to Cart
          </Link>

        </div>
      </section>

      {/* ── The Process ──────────────────────────────────────── */}
      {product.processImages.length > 0 && (
        <section className="px-6 md:px-20 py-16 md:py-[120px]">
          <div className="space-y-8">
            <h2 className="font-light text-[36px] md:text-[48px] leading-tight">The Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.processImages.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="aspect-[3/4] bg-placeholder overflow-hidden">
                    {item.url && (
                      <img
                        src={item.url}
                        alt={item.label}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="font-medium text-[15px]">{item.label}</div>
                    <div className="font-normal text-[15px] leading-[1.7] opacity-60">
                      {item.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Products ─────────────────────────────────── */}
      {related.length > 0 && (
        <section className="px-6 md:px-20 pb-16 md:pb-[120px]">
          <div className="space-y-8">
            <h2 className="font-light text-[36px] md:text-[48px] leading-tight">Related Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.slug}`}
                  className="group space-y-4"
                >
                  <div className="aspect-[3/4] bg-placeholder overflow-hidden">
                    {item.meta._are_image_url && (
                      <img
                        src={item.meta._are_image_url}
                        alt={item.title.rendered}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="space-y-1">
                    <div
                      className="font-medium text-[20px]"
                      {...html(item.title.rendered)}
                    />
                    <div
                      className="font-normal text-[15px] leading-[1.7] opacity-70"
                      {...html(item.excerpt.rendered)}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
