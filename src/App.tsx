import { useEffect, useState } from 'react'
import { Header, Footer } from './components/Layout'
import { properties } from './data/properties'
import { Home } from './pages/Home'
import type { PropertyFilter } from './pages/Home'
import { PropertyDetails } from './pages/PropertyDetails'
import './App.css'

function App() {
  const [hash, setHash] = useState(window.location.hash)
  const [filter, setFilter] = useState<PropertyFilter>('all')
  const isDetails = hash.startsWith('#/imovel/')
  const property = properties.find((item) => `#/imovel/${item.id}` === hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    document.title = property
      ? `${property.title} | Richardson Paula`
      : 'Richardson Paula | Seu próximo capítulo começa aqui'

    const frame = window.requestAnimationFrame(() => {
      if (hash && !hash.startsWith('#/')) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash, property])

  let page = <Home filter={filter} onFilterChange={setFilter} />

  if (isDetails) {
    if (property) {
      page = <PropertyDetails key={property.id} property={property} />
    } else {
      page = (
        <main id="conteudo" tabIndex={-1} className="container not-found">
          <span className="eyebrow">Imóvel não encontrado</span>
          <h1>Vamos encontrar outro lugar?</h1>
          <p>Este anúncio não está disponível. Conheça os outros imóveis da nossa seleção.</p>
          <a className="button button-navy" href="#imoveis">Explorar imóveis</a>
        </main>
      )
    }
  }

  return (
    <>
      <a
        className="skip-link"
        href="#conteudo"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById('conteudo')?.focus()
        }}
      >
        Pular para o conteúdo
      </a>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default App
