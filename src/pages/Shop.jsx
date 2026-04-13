import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { html } from '../helper-functions'
import { getProducts } from '../api/wordpress'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [error, setError]       = useState(null)

  useEffect(() => {
    getProducts().then(setProducts).catch(setError)
  }, [])

  if (error) return (
    <main className="px-20 py-[120px]">
      <p className="text-[15px] opacity-60">
        Could not load products — make sure WordPress is running.
      </p>
    </main>
  )

  return (
    <main>
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="px-20 py-20 border-b border-black">
        <h1 className="font-light text-[48px] leading-tight">Shop</h1>
      </section>

      {/* ── Product Grid ─────────────────────────────────────── */}
      <section className="px-20 py-[80px]">
        {!products.length && !error && (
          <p className="text-[15px] opacity-60">Loading products…</p>
        )}

        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="group space-y-4"
            >
              {/* Image */}
              <div className="aspect-[3/4] bg-placeholder overflow-hidden">
                {product.meta._are_image_url && (
                  <img
                    src={product.meta._are_image_url}
                    alt={product.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Info */}
              <div className="space-y-1">
                {product.meta._are_release_number && (
                  <div className="font-medium text-[10px] tracking-label uppercase opacity-60">
                    Release {product.meta._are_release_number}
                  </div>
                )}
                <div
                  className="font-medium text-[20px]"
                  {...html(product.title.rendered)}
                />
                <div
                  className="font-normal text-[15px] leading-[1.7] opacity-70"
                  {...html(product.excerpt.rendered)}
                />
                {product.meta._are_price && (
                  <div className="font-medium text-[15px] pt-1">
                    ${product.meta._are_price}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
