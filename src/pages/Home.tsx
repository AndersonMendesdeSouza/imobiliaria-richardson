import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Icon } from '../components/Icon'
import { Brand } from '../components/Brand'
import { PropertyCard } from '../components/PropertyCard'
import { contact, properties } from '../data/properties'
import type { PropertyCategory } from '../data/properties'
import heroImage from '../assets/casas/casa1/image copy 2.png'
import aboutImage from '../assets/casas/casa1/image copy.png'

interface HomeProps {
  category: PropertyCategory
  onCategoryChange: (category: PropertyCategory) => void
}

export function Home({ category, onCategoryChange }: HomeProps) {
  const carousel = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ atStart: true, atEnd: false })
  const visibleProperties = properties.filter((property) => property.category === category)

  function changeCategory(nextCategory: PropertyCategory) {
    onCategoryChange(nextCategory)
    setPosition({ atStart: true, atEnd: false })
  }

  function scrollCarousel(direction: number) {
    const rail = carousel.current
    if (!rail) return
    const card = rail.querySelector('article')
    rail.scrollBy({ left: direction * ((card?.getBoundingClientRect().width ?? rail.clientWidth) + 24), behavior: 'smooth' })
  }

  function updatePosition() {
    const rail = carousel.current
    if (!rail) return
    setPosition({ atStart: rail.scrollLeft < 4, atEnd: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4 })
  }

  useEffect(() => {
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  })

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      const nextCategory = category === 'house' ? 'land' : 'house'
      const target = event.key === 'Home' ? 'house' : event.key === 'End' ? 'land' : nextCategory
      changeCategory(target)
      document.getElementById(`tab-${target}`)?.focus()
    }
  }

  return (
    <main id="conteudo" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={heroImage} alt="Casa com piscina e jardim no estilo dos imóveis da seleção" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow hero-eyebrow"><span />Seu próximo capítulo começa aqui</span>
          <h1 id="hero-title">O lugar certo<br />para a sua<br /><em>nova história.</em></h1>
          <p>Mais que encontrar um imóvel, encontrar o seu lugar.<br className="desktop-break" /> Conheça novas possibilidades em Buriti Alegre e região.</p>
          <a className="button button-gold" href="#imoveis">Encontre seu imóvel<Icon name="arrow" /></a>
          <a className="hero-bottom-link" href="#imoveis"><span className="scroll-line" />Explore as possibilidades</a>
        </div>
        <div className="hero-caption"><Icon name="pin" /><div>Viva o melhor de Goiás<span>Buriti Alegre · Lago das Brisas</span></div></div>
        <span className="hero-side-note">RICHARDSON PAULA · GESTÃO IMOBILIÁRIA</span>
      </section>

      <section className="trust-strip" aria-label="Nossa atuação">
        <div className="container trust-inner">
          <span><Icon name="house" />Compra e venda de imóveis</span>
          <span><Icon name="key" />Locação e administração</span>
          <span><Icon name="compass" />Avaliação imobiliária</span>
          <span className="trust-location"><Icon name="pin" />Buriti Alegre e região</span>
        </div>
      </section>

      <section className="properties-section section-space" id="imoveis" aria-labelledby="properties-title">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Encontre o seu lugar</span><h2 id="properties-title">Novos começos,<br className="mobile-break" /> boas escolhas.</h2></div>
            <p>Uma casa para viver. Um lote para sonhar.<br />O próximo passo da sua história está aqui.</p>
          </div>
          <div className="catalog-toolbar">
            <div className="category-tabs" role="tablist" aria-label="Tipo de imóvel">
              <button type="button" id="tab-house" role="tab" aria-selected={category === 'house'} aria-controls="property-panel" tabIndex={category === 'house' ? 0 : -1} onClick={() => changeCategory('house')} onKeyDown={handleTabKey}><Icon name="house" />Casas<span>04</span></button>
              <button type="button" id="tab-land" role="tab" aria-selected={category === 'land'} aria-controls="property-panel" tabIndex={category === 'land' ? 0 : -1} onClick={() => changeCategory('land')} onKeyDown={handleTabKey}><Icon name="area" />Lotes<span>04</span></button>
            </div>
            <div className="carousel-controls"><span>Encontre novas possibilidades</span><button className="icon-button" disabled={position.atStart} aria-label="Imóveis anteriores" onClick={() => scrollCarousel(-1)}><Icon name="arrow" className="rotate" /></button><button className="icon-button" disabled={position.atEnd} aria-label="Próximos imóveis" onClick={() => scrollCarousel(1)}><Icon name="arrow" /></button></div>
          </div>
          <div id="property-panel" role="tabpanel" aria-labelledby={`tab-${category}`} tabIndex={0}>
            <div className="property-carousel" key={category} ref={carousel} onScroll={updatePosition} aria-label={category === 'house' ? 'Carrossel de casas' : 'Carrossel de lotes'}>
              {visibleProperties.map((property) => <PropertyCard key={property.id} property={property} />)}
            </div>
          </div>
          <div className="catalog-bottom"><span className="demo-note">Catálogo demonstrativo · Valores e características fictícios.</span><span className="swipe-note">Deslize para explorar<Icon name="arrow" /></span></div>
        </div>
      </section>

      <section className="about-section section-space" id="sobre" aria-labelledby="about-title">
        <div className="container about-grid">
          <div className="about-visual"><img src={aboutImage} alt="Varanda e área verde de uma casa com piscina" loading="lazy" /><div className="about-brand"><Brand /><span>Seu novo começo<br />tem endereço.</span></div><span className="about-image-caption">Espaços que acolhem. Histórias que começam.</span></div>
          <div className="about-copy"><span className="eyebrow">Prazer, Richardson Paula</span><h2 id="about-title">Imóveis conectam.<br /><em>Pessoas transformam.</em></h2><p>Comprar, vender ou alugar um imóvel é também escolher como viver o próximo capítulo. É uma decisão que merece atenção, clareza e alguém por perto.</p><p>Da busca pelo seu novo lar à administração do seu patrimônio, a Richardson Paula atua em Buriti Alegre e Lago das Brisas, aproximando você das possibilidades da região.</p><div className="about-services"><div><Icon name="shield" /><span>Clareza em cada etapa</span></div><div><Icon name="pin" /><span>Um olhar para a nossa região</span></div><div><Icon name="key" /><span>Atendimento próximo de você</span></div></div><a className="text-link" href={contact.whatsapp} target="_blank" rel="noreferrer">Vamos nos conhecer<Icon name="arrow" /></a></div>
        </div>
      </section>

      <section className="contact-section" id="contato" aria-labelledby="contact-title"><div className="container contact-inner"><div><span className="eyebrow">Uma conversa pode ser o começo</span><h2 id="contact-title">Qual é o seu<br /><em>próximo endereço?</em></h2><p>Conte o que você procura. Vamos encontrar as possibilidades juntos.</p></div><a className="button button-gold" href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" />Fale com Richardson<Icon name="arrow" /></a><div className="contact-decoration" aria-hidden="true">RP</div></div></section>
    </main>
  )
}
