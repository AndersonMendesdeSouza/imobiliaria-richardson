import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import { PropertyCard } from './PropertyCard'
import type { Property, PropertyCategory } from '../data/properties'

interface PropertyCarouselProps {
  category: PropertyCategory
  properties: Property[]
}

export function PropertyCarousel({ category, properties }: PropertyCarouselProps) {
  const carousel = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ atStart: true, atEnd: false })
  const title = category === 'house' ? 'Casas' : 'Lotes'
  const headingId = `carousel-title-${category}`

  useEffect(() => {
    const rail = carousel.current
    if (!rail) return

    function updatePosition() {
      if (!rail) return
      setPosition({
        atStart: rail.scrollLeft < 4,
        atEnd: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4,
      })
    }

    const observer = new ResizeObserver(updatePosition)
    observer.observe(rail)
    rail.addEventListener('scroll', updatePosition, { passive: true })

    return () => {
      observer.disconnect()
      rail.removeEventListener('scroll', updatePosition)
    }
  }, [properties.length])

  function scrollCarousel(direction: number) {
    const rail = carousel.current
    if (!rail) return

    const card = rail.querySelector('article')
    const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 0
    const cardWidth = card?.getBoundingClientRect().width ?? rail.clientWidth
    rail.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
  }

  return (
    <section className="property-group" aria-labelledby={headingId}>
      <div className="property-group-header">
        <div className="property-group-title">
          <span className="property-group-icon">
            <Icon name={category === 'house' ? 'house' : 'area'} />
          </span>
          <div>
            <h3 id={headingId}>{title}</h3>
            <p>{properties.length} imóveis</p>
          </div>
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            className="icon-button"
            disabled={position.atStart}
            aria-label={`Imóveis anteriores: ${title}`}
            aria-controls={`carousel-${category}`}
            onClick={() => scrollCarousel(-1)}
          >
            <Icon name="arrow" className="rotate" />
          </button>
          <button
            type="button"
            className="icon-button"
            disabled={position.atEnd}
            aria-label={`Próximos imóveis: ${title}`}
            aria-controls={`carousel-${category}`}
            onClick={() => scrollCarousel(1)}
          >
            <Icon name="arrow" />
          </button>
        </div>
      </div>
      <div
        id={`carousel-${category}`}
        className="property-carousel"
        ref={carousel}
        role="region"
        aria-label={`Carrossel de ${title.toLowerCase()}`}
        tabIndex={0}
      >
        {properties.map((property) => <PropertyCard key={property.id} property={property} />)}
      </div>
      <div className="property-group-bottom">
        <span className="swipe-note">Deslize para explorar<Icon name="arrow" /></span>
      </div>
    </section>
  )
}
