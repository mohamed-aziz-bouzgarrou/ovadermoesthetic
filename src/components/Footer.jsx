import { Camera, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark footer-wordmark" to="/">
            <span className="wordmark-mark">O</span>
            <span className="wordmark-name">ova<span>dermoesthetic</span></span>
          </Link>
          <p>La beauté, avec justesse et délicatesse.</p>
        </div>
        <div className="footer-contact">
          <h2>Nous trouver</h2>
          <p><MapPin size={15} /> 25 Rue du N, 94600 Choisy-le-Roi</p>
          <a href="tel:+33785924509"><Phone size={15} /> 07 85 92 45 09</a>
        </div>
        <div className="footer-social">
          <h2>Restons en contact</h2>
          <a href="https://www.instagram.com/ovaadermoesthetic/" target="_blank" rel="noreferrer">
            <Camera size={16} /> @ovaadermoesthetic
          </a>
          <Link className="footer-booking" to="/rendez-vous">Prendre rendez-vous <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ovadermoesthetic</span>
        <span>Choisy-le-Roi · Val-de-Marne</span>
      </div>
    </footer>
  )
}

export default Footer