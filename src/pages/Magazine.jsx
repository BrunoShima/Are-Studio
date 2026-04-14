export default function Magazine() {
  return (
    <main className="flex-1 flex flex-col">
      <iframe
        allowFullScreen
        allow="clipboard-write"
        scrolling="no"
        className="fp-iframe flex-1"
        src="https://heyzine.com/flip-book/c7f8cd285c.html"
        style={{ border: '1px solid lightgray', width: '100%' }}
      />
    </main>
  )
}
