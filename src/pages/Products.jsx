import { useEffect, useState } from 'react'
import { html } from '../helper-functions'
import { getProducts } from '../api/wordpress'

export default function Products() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(setError)
  }, [])

  if (error) return <p>Error loading products: {error.message}</p>
  if (!products.length) return <p>Loading...</p>

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2 {...html(product.title.rendered)} />
            <p>Release Year: {product.meta._are_release_year}</p>
            <div {...html(product.excerpt.rendered)} />
          </li>
        ))}
      </ul>
    </main>
  )
}
