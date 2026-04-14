import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { html } from '../helper-functions'
import { getProducts } from '../api/wordpress'
import heroBanner from '../assets/homeHero.jpg'
import homeTeaser from '../assets/homeTeaser.jpg'

export default function Home() {
  const [products, setProducts] = useState([])
  const [error, setError]       = useState(null)

  useEffect(() => {
    getProducts().then(setProducts).catch(setError)
  }, [])

  return (
    <main>
      {/* ── Hero ─ full viewport height ─────────────────────── */}
      <section className="relative h-screen w-full">
        <img src={heroBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-20 left-20">
          <h1 className="font-light text-[80px] tracking-hero leading-none text-white">
            ĀRE STUDIOS
          </h1>
        </div>
      </section>

      {/* ── Tagline ──────────────────────────────────────────── */}
      <section className="py-[120px] px-20">
        <h2 className="font-light text-[32px] text-center leading-tight">
          Clothes that mean something.
        </h2>
      </section>

      {/* ── Latest Releases ─────────────────────────────────── */}
      <section className="px-20 pb-[120px]">
        {error && (
          <p className="text-center opacity-60 text-[15px]">
            Could not load products — make sure WordPress is running.
          </p>
        )}

        <div className="grid grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className="group space-y-4"
            >
              <div className="aspect-[3/4] bg-placeholder overflow-hidden">
                {product.meta._are_image_url && (
                  <img
                    src={product.meta._are_image_url}
                    alt={product.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="space-y-1">
                <div
                  className="font-medium text-[20px]"
                  {...html(product.title.rendered)}
                />
                <div
                  className="font-normal text-[15px] leading-[1.7] opacity-70"
                  {...html(product.excerpt.rendered)}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Magazine Strip ───────────────────────────────────── */}
      <section className="px-20 pb-[120px]">
        <div className="grid grid-cols-5 gap-6">
          {/* Image — 60% */}
          <div className="col-span-3">
            <img src={homeTeaser} alt="" className="w-full aspect-[4/5] object-cover" />
          </div>

          {/* Text — 40% */}
          <div className="col-span-2 flex flex-col justify-center space-y-6">
            <div className="font-medium text-[10px] tracking-label uppercase">
              Issue No.1
            </div>
            <h3 className="font-light text-[48px] leading-tight">
              Vancouver Stories
            </h3>
            <p className="font-normal text-[15px] leading-[1.7]">
              An editorial exploration of the city that shapes our design.
              Photography, interviews, and insights from the streets we call home.
            </p>
            <Link
              to="/magazine"
              className="inline-block font-semibold text-[12px] tracking-[1px] uppercase hover:opacity-60 transition-opacity"
            >
              View Magazine
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
