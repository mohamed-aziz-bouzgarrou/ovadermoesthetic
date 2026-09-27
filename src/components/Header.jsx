import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Camera, Menu, Phone, X } from 'lucide-react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" to="/" onClick={closeMenu} aria-label="Ovadermoesthetic, accueil">
          <span className="wordmark-mark">O</span>
          <span className="wordmark-name">ova<span>dermoesthetic</span></span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
          <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
          <NavLink to="/nos-soins" onClick={closeMenu}>Nos soins</NavLink>
          <NavLink to="/rendez-vous" onClick={closeMenu}>Rendez-vous</NavLink>
          <a className="nav-phone" href="tel:+33785924509" onClick={closeMenu}>
            <Phone size={15} aria-hidden="true" /> 07 85 92 45 09
          </a>
          <a className="nav-instagram" href="https://www.instagram.com/ovaadermoesthetic/" target="_blank" rel="noreferrer" aria-label="Instagram Ovadermoesthetic">
            <Camera size={18} />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header