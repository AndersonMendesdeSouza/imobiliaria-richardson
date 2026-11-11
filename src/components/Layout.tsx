import { useState } from 'react'
import { Brand } from './Brand'
import { Icon } from './Icon'
import { contact } from '../data/properties'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className={menuOpen ? 'header-nav is-open' : 'header-nav'} id="main-navigation" aria-label="Navegação principal">
          <a href="#/" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#imoveis" onClick={() => setMenuOpen(false)}>Imóveis</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="button header-contact" href={contact.whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" />Vamos conversar</a>
        <button className="icon-button menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div><Brand /><p>Conectando pessoas, imóveis<br />e novos começos.</p></div>
        <div className="footer-links"><span>Explore</span><a href="#imoveis">Encontre seu imóvel</a><a href="#sobre">Conheça a Richardson Paula</a></div>
        <div className="footer-links"><span>Estamos por perto</span><p>Buriti Alegre e Lago das Brisas · GO</p><a href={contact.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" />@rplagodasbrisas</a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Richardson Paula. Todos os direitos reservados.</span><span>Seu novo começo tem endereço.</span></div>
    </footer>
  )
}
