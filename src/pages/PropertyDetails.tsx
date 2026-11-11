import { PhotoGallery } from '../components/PhotoGallery'
import { Icon } from '../components/Icon'
import { Brand } from '../components/Brand'
import { contact, formatPrice } from '../data/properties'
import type { Property } from '../data/properties'

export function PropertyDetails({ property }: { property: Property }) {
  const message = `Olá! Tenho interesse no imóvel ${property.title}, referência ${property.reference}. Gostaria de mais informações.`
  const whatsappUrl = `${contact.whatsapp}?text=${encodeURIComponent(message)}`
  const isHouse = property.category === 'house'
  const isRent = property.purpose === 'rent'

  return (
    <main id="conteudo" tabIndex={-1} className="details-page container">
      <a className="text-link detail-back" href="#imoveis">
        <Icon name="arrow" className="rotate" />
        Voltar
      </a>

      <div className="detail-heading">
        <div>
          <div className="detail-labels">
            <span className={`purpose-badge ${property.purpose}`}>
              {isRent ? 'Para alugar' : 'À venda'}
            </span>
            <span className="detail-category">{isHouse ? 'Casa' : 'Lote residencial'}</span>
          </div>
          <h1>{property.title}</h1>
          <p className="detail-location">
            <Icon name="pin" />
            {property.neighborhood} · {property.city}
          </p>
        </div>
        <span className="reference">Ref. {property.reference}</span>
      </div>

      <PhotoGallery images={property.images} title={property.title} />
      {property.imageSource && (
        <p className="image-credit">
          Imagens ilustrativas de outra região · Fonte:{' '}
          <a href={property.imageSource.url} target="_blank" rel="noreferrer">
            {property.imageSource.label}
          </a>
        </p>
      )}

      <div className="detail-content">
        <div className="detail-main">
          <div className="detail-specs">
            <div>
              <Icon name="area" />
              <strong>{property.area.toLocaleString('pt-BR')} m²</strong>
              <span>{isHouse ? 'Área construída' : 'Área do terreno'}</span>
            </div>
            {isHouse ? (
              <>
                <div>
                  <Icon name="bed" />
                  <strong>{property.bedrooms}</strong>
                  <span>Quartos</span>
                </div>
                <div>
                  <Icon name="bath" />
                  <strong>{property.bathrooms}</strong>
                  <span>Banheiros</span>
                </div>
                <div>
                  <Icon name="car" />
                  <strong>{property.parking}</strong>
                  <span>Vagas de garagem</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Icon name="area" />
                  <strong>{property.frontage} m</strong>
                  <span>Frente do lote</span>
                </div>
                <div>
                  <Icon name="house" />
                  <strong>Residencial</strong>
                  <span>Tipo de uso</span>
                </div>
              </>
            )}
          </div>

          <section className="detail-description" aria-labelledby="description-title">
            <span className="eyebrow">Conheça seu próximo {isHouse ? 'lar' : 'endereço'}</span>
            <h2 id="description-title">Espaço para uma nova história.</h2>
            <p>{property.description}</p>
          </section>

          <section className="features-section" aria-labelledby="features-title">
            <h3 id="features-title">O que este imóvel oferece</h3>
            <ul>
              {property.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="location-box" aria-label="Localização aproximada">
            <span className="location-box-icon"><Icon name="pin" /></span>
            <div>
              <h3>Uma boa história começa pelo lugar.</h3>
              <p>{property.neighborhood} · {property.city}</p>
              <small>Localização de exemplo. Endereço completo sob consulta.</small>
            </div>
          </section>
        </div>

        <aside className="price-panel" aria-label="Preço e contato">
          <span className="eyebrow">Imagine as possibilidades</span>
          <span className="price-label">{isRent ? 'Aluguel mensal' : 'Valor do imóvel'}</span>
          <div className="detail-price">
            {formatPrice(property.price)}
            {isRent && <small>/mês</small>}
          </div>
          <div className="price-information">
            <Icon name="house" />
            <span>{isRent ? 'Consulte as condições de locação' : 'Consulte as condições de compra'}</span>
          </div>
          <a className="button button-navy" href={whatsappUrl} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            Tenho interesse
            <Icon name="arrow" />
          </a>
          <p className="contact-hint">
            A mensagem já vai com o nome do imóvel e a referência <strong>{property.reference}</strong>.
          </p>
          <div className="advisor">
            <Brand />
            <span>Atendimento em Buriti Alegre e região</span>
          </div>
          <p className="demo-disclaimer">
            Anúncio demonstrativo. Preço, localização e características são fictícios.
          </p>
        </aside>
      </div>
    </main>
  )
}
