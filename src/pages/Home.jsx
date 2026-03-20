import { useEffect, useState } from 'react'
import { html } from '../helper-functions'
import { getPageBySlug } from '../api/wordpress'

export default function Home() {
  const [page, setPage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getPageBySlug('home')
      .then(setPage)
      .catch(setError)
  }, [])

  if (error) return <p>Error loading page: {error.message}</p>
  if (!page) return <p>Loading...</p>

  return (
    <main>
      <h1 {...html(page.title.rendered)} />
      <div {...html(page.content.rendered)} />
    </main>
  )
}
