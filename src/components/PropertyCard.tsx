import { Icon } from './Icon'
import { formatPrice } from '../data/properties'
import type { Property } from '../data/properties'

export function PropertyCard({ property }: { property: Property }) {
  const cover = property.images[0]
  const isHouse = property.category === 'house'

  return (
    <article className="property-card">
      <a
        className="property-card-link"
        href={`#/imovel/${property.id}`}
        aria-label={`Ver detalhes de ${property.title}`}
      >
        <div className="property-cover">
          <img
            className={cover.collage ? 'collage-cover' : ''}
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
          />
          <span className="category-badge">{isHouse ? 'Casa' : 'Lote'}</span>
          <span className="photo-count"><Icon name="photos" />{property.images.length}</span>
          <span className="price-badge">
            {formatPrice(property.price)}
            {property.purpose === 'rent' && <small>/mês</small>}
          </span>
        </div>

        <div className="property-card-body">
          <span className={`purpose-badge ${property.purpose}`}>
            {property.purpose === 'sale' ? 'À venda' : 'Para alugar'}
          </span>
          <h3>{property.title}</h3>
          <p className="property-neighborhood">{property.neighborhood}</p>
          <p className="property-location"><Icon name="pin" />{property.city}</p>

          <div className="property-specs">
            <div>
              <span><Icon name="area" />{property.area.toLocaleString('pt-BR')} m²</span>
              <small>{isHouse ? 'Área construída' : 'Área do terreno'}</small>
            </div>
            {isHouse ? (
              <>
                <div>
                  <span><Icon name="bed" />{property.bedrooms}</span>
                  <small>Quartos</small>
                </div>
                <div>
                  <span><Icon name="bath" />{property.bathrooms}</span>
                  <small>Banheiros</small>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span><Icon name="area" />{property.frontage} m</span>
                  <small>Frente</small>
                </div>
                <div>
                  <span><Icon name="house" /></span>
                  <small>Residencial</small>
                </div>
              </>
            )}
          </div>
          <div className="card-action">Conhecer imóvel<Icon name="arrow" /></div>
        </div>
      </a>
    </article>
  )
}
